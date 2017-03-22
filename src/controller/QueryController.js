"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var currentData;
var isValidKeys = [];
var misID = new Array();
var notCount = 0;
var dataPath = './cachedDatasets/';
var andArr = new Array();
var andKeyCount = 0;
var keyNum = 0;
var keyArr = new Array();
var toProcess = new Array();
var mcompLibrary = new Array('courses_avg', 'courses_pass', 'courses_fail', 'courses_audit', 'courses_year', 'rooms_lat', 'rooms_lon', 'rooms_seats');
var stringLibrary = new Array('courses_dept', 'courses_id', 'courses_instructor', 'courses_title', 'courses_uuid', 'rooms_fullname', 'rooms_shortname', 'rooms_number', 'rooms_name', 'rooms_address', 'rooms_type', 'rooms_furniture', 'rooms_href');
var filterLib = ['AND', 'OR', 'NOT', 'IS', 'GT', 'EQ', 'LT'];
var QueryController = (function () {
    function QueryController() {
    }
    QueryController.prototype.resetVars = function () {
        isValidKeys = [];
        toProcess = [];
        misID = [];
        andArr = [];
        currentData = null;
        notCount = 0;
        andKeyCount = 0;
        keyNum = 0;
        keyArr = [];
        return;
    };
    QueryController.prototype.getMisID = function () {
        return misID;
    };
    QueryController.prototype.getValidKeys = function () {
        return isValidKeys;
    };
    QueryController.prototype.returnVal = function () {
        return toProcess.pop();
    };
    QueryController.prototype.returnKeys = function () {
        return keyArr;
    };
    QueryController.prototype.getKeys = function (where, filter) {
        if (!filterLib.includes(filter)) {
            isValidKeys.push(false);
            return;
        }
        if (filter == 'AND' || filter == 'OR' || filter == 'NOT') {
            if (filter == 'AND' || filter == 'OR') {
                if (where[filter].length < 1 || Array.isArray(where[filter] == false)) {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    var subLen = Object.keys(where[filter]).length;
                    for (var _i = 0, _a = where[filter]; _i < _a.length; _i++) {
                        var subFilter = _a[_i];
                        for (var _b = 0, _c = Object.keys(subFilter); _b < _c.length; _b++) {
                            var subSubfilter = _c[_b];
                            this.getKeys(subFilter, subSubfilter);
                        }
                    }
                }
            }
            else if (filter == 'NOT') {
                var notKeys = Object.keys(where[filter]);
                if (notKeys.length != 1) {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    var subFilter = notKeys[0];
                    this.getKeys(where[filter], subFilter);
                }
            }
        }
        else {
            if (Object.keys(where[filter]).length != 1) {
                isValidKeys.push(false);
                return;
            }
            var keys = Object.keys(where[filter]);
            var key = keys[0];
            var n = key.indexOf("_");
            if (n < 1) {
                isValidKeys.push(false);
                return;
            }
            var fileName = key.substr(0, n);
            keyArr.push(fileName);
        }
    };
    QueryController.prototype.whereParser = function (where, filter, theObj) {
        function allTrue(element, index, array) {
            return element == true;
        }
        if (filter == 'AND' || filter == 'OR') {
            var subLen = Object.keys(where[filter]).length;
            for (var _i = 0, _a = where[filter]; _i < _a.length; _i++) {
                var subFilter = _a[_i];
                for (var _b = 0, _c = Object.keys(subFilter); _b < _c.length; _b++) {
                    var subSubfilter = _c[_b];
                    this.whereParser(subFilter, subSubfilter, theObj);
                }
            }
            if (filter == 'AND') {
                var waitList = new Array();
                for (var i = 0; i < subLen; i++) {
                    waitList.push(toProcess.pop());
                }
                if (waitList.every(allTrue) == true) {
                    toProcess.push(true);
                }
                else {
                    toProcess.push(false);
                }
            }
            else if (filter == 'OR') {
                var waitList = new Array();
                for (var i = 0; i < subLen; i++) {
                    waitList.push(toProcess.pop());
                }
                if (waitList.includes(true)) {
                    toProcess.push(true);
                }
                else {
                    toProcess.push(false);
                }
            }
        }
        else if (filter == 'LT' || filter == 'GT' || filter == 'EQ') {
            var mcompKeys = Object.keys(where[filter]);
            var key = mcompKeys[0];
            if (mcompLibrary.includes(key)) {
                if (typeof where[filter][key] != 'number') {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    if (theObj.hasOwnProperty(key)) {
                        if (filter == 'LT') {
                            if (theObj[key] < where[filter][key]) {
                                toProcess.push(true);
                            }
                            else
                                toProcess.push(false);
                        }
                        else if (filter == 'GT') {
                            if (theObj[key] > where[filter][key]) {
                                toProcess.push(true);
                            }
                            else
                                toProcess.push(false);
                        }
                        else if (filter == 'EQ') {
                            if (theObj[key] == where[filter][key]) {
                                toProcess.push(true);
                            }
                            else
                                toProcess.push(false);
                        }
                    }
                    else
                        toProcess.push(false);
                }
            }
            else {
                isValidKeys.push(false);
                return;
            }
        }
        else if (filter == 'IS') {
            var isKey = Object.keys(where[filter]);
            var key = isKey[0];
            if (stringLibrary.includes(key)) {
                if (typeof where[filter][key] != 'string') {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    var strIS = where[filter][key];
                    var star = strIS.indexOf("*");
                    var keyLen = void 0;
                    if (strIS != "") {
                        keyLen = strIS.length - 1;
                    }
                    else
                        keyLen = 0;
                    if (keyLen == 0 && star == 0) {
                        isValidKeys.push(false);
                        return;
                    }
                    if (star != 0 && star != keyLen) {
                        if (theObj.hasOwnProperty(key)) {
                            if (theObj[key] == where[filter][key]) {
                                toProcess.push(true);
                            }
                            else {
                                toProcess.push(false);
                            }
                        }
                        else {
                            toProcess.push(false);
                        }
                    }
                    else if (star == 0) {
                        if (strIS.substr(keyLen, 1) == "*") {
                            var subIsStr = strIS.substr(1, keyLen - 1);
                            if (theObj.hasOwnProperty(key)) {
                                if (theObj[key].includes(subIsStr)) {
                                    toProcess.push(true);
                                }
                                else {
                                    toProcess.push(false);
                                }
                            }
                            else {
                                toProcess.push(false);
                            }
                        }
                        else {
                            var subIsStr = strIS.substr(1, keyLen);
                            if (theObj.hasOwnProperty(key)) {
                                if (theObj[key].endsWith(subIsStr)) {
                                    toProcess.push(true);
                                }
                                else {
                                    toProcess.push(false);
                                }
                            }
                            else {
                                toProcess.push(false);
                            }
                        }
                    }
                    else if (star == keyLen) {
                        var subIsStr = strIS.substr(0, keyLen);
                        if (theObj.hasOwnProperty(key)) {
                            if (theObj[key].startsWith(subIsStr)) {
                                toProcess.push(true);
                            }
                            else {
                                toProcess.push(false);
                            }
                        }
                        else {
                            toProcess.push(false);
                        }
                    }
                }
            }
            else {
                isValidKeys.push(false);
                return;
            }
        }
        else if (filter == 'NOT') {
            notCount++;
            var notKeys = Object.keys(where[filter]);
            if (notKeys.length != 1) {
                isValidKeys.push(false);
                return;
            }
            var subFilter = notKeys[0];
            this.whereParser(where[filter], subFilter, theObj);
            if (notCount % 2 != 0) {
                var len = toProcess.length - 1;
                if (toProcess[len] == true) {
                    toProcess[len] = false;
                }
                else {
                    toProcess[len] = true;
                }
                notCount = 0;
            }
        }
    };
    QueryController.prototype.optionParser = function (mcompFiltered, optionBody, idAssure, hasTrans) {
        if (!("COLUMNS" in optionBody) || !("FORM" in optionBody)) {
            return null;
        }
        var colVal = [];
        if (hasTrans) {
            colVal = optionBody["COLUMNS"];
        }
        else {
            for (var _i = 0, _a = optionBody["COLUMNS"]; _i < _a.length; _i++) {
                var val = _a[_i];
                var n = val.indexOf("_");
                var fileName = val.substr(0, n);
                if (n < 1) {
                    return null;
                }
                if (idAssure == "") {
                    return null;
                }
                else if (idAssure == "geteverything") {
                    idAssure = fileName;
                    if (!fs.existsSync(dataPath + fileName)) {
                        return null;
                    }
                    else {
                        mcompFiltered = fs.readFileSync(dataPath + fileName, "utf8");
                        mcompFiltered = JSON.parse(mcompFiltered);
                    }
                }
                else if (idAssure != fileName) {
                    return null;
                }
                colVal.push(val);
            }
        }
        if (optionBody["FORM"] != "TABLE") {
            return null;
        }
        var orderVal;
        var newStyle = false;
        var dir = "";
        var dirKeys;
        if (optionBody.hasOwnProperty("ORDER")) {
            if (typeof optionBody["ORDER"] != 'string' && typeof optionBody["ORDER"] != 'object') {
                return null;
            }
            else if (typeof optionBody["ORDER"] == 'string') {
                newStyle = false;
                if (!colVal.includes(optionBody["ORDER"])) {
                    return null;
                }
                else {
                    orderVal = optionBody["ORDER"];
                }
            }
            else if (typeof optionBody["ORDER"] == 'object') {
                newStyle = true;
                var oobj = optionBody["ORDER"];
                var oobjKeys = Object.keys(oobj);
                if (oobjKeys.length < 2)
                    return null;
                if (!oobjKeys.includes('dir') || !oobjKeys.includes('keys'))
                    return null;
                if (oobj['dir'] != 'DOWN' && oobj['dir'] != 'UP')
                    return null;
                else {
                    dir = oobj['dir'];
                }
                if (!Array.isArray(oobj['keys']))
                    return null;
                dirKeys = oobj['keys'];
                var kLen = dirKeys.length;
                for (var i = 0; i < kLen; i++) {
                    if (!colVal.includes(dirKeys[i])) {
                        return null;
                    }
                }
            }
            else
                return null;
        }
        else
            orderVal = "";
        if (mcompFiltered.length == 0)
            return { render: "TABLE", result: [] };
        var colData = new Array();
        for (var _b = 0, mcompFiltered_1 = mcompFiltered; _b < mcompFiltered_1.length; _b++) {
            var obj = mcompFiltered_1[_b];
            var eachData = new Array();
            for (var _c = 0, colVal_1 = colVal; _c < colVal_1.length; _c++) {
                var val = colVal_1[_c];
                if (obj.hasOwnProperty(val)) {
                    eachData.push((_d = {}, _d[val] = obj[val], _d));
                }
            }
            if (eachData.length > 0) {
                var parsed = JSON.parse(JSON.stringify(eachData));
                colData.push(parsed);
            }
        }
        var c = colData;
        var processed = new Array();
        for (var _e = 0, colData_1 = colData; _e < colData_1.length; _e++) {
            var outerArray = colData_1[_e];
            var buffer = {};
            for (var i = 0; i < outerArray.length; i++) {
                buffer = joinJSON(buffer, outerArray[i]);
            }
            processed.push(buffer);
        }
        function joinJSON(o, ob) {
            for (var z in ob) {
                o[z] = ob[z];
            }
            return o;
        }
        if (!newStyle) {
            if (orderVal != "") {
                var testVal = processed[0][orderVal];
                if (typeof testVal == 'number') {
                    processed.sort(function (a, b) {
                        return a[orderVal] - b[orderVal];
                    });
                }
                else if (typeof testVal == 'string') {
                    processed.sort(function (a, b) {
                        var nameA = a[orderVal].toUpperCase();
                        var nameB = b[orderVal].toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });
                }
                else
                    return null;
            }
        }
        else {
            processed = this.sortMulti(processed, dir, dirKeys);
        }
        var result = {
            render: optionBody["FORM"],
            result: processed
        };
        return result;
        var _d;
    };
    QueryController.prototype.transTerms = function (trans) {
        var ret = [];
        var applyK = new Array();
        var subAK = new Array();
        var appTerm = new Array();
        var tKeys = Object.keys(trans);
        var gLen = trans['GROUP'].length;
        var tokenLib = ['MAX', 'MIN', 'AVG', 'COUNT', 'SUM'];
        if (!tKeys.includes('GROUP') || !tKeys.includes('APPLY') || Object.keys(trans).length != 2 || gLen < 1) {
            ret = [false];
            return ret;
        }
        for (var i = 1; i < gLen; i++) {
            if (trans['GROUP'][0] == trans['GROUP'][i]) {
                ret = [false];
                return ret;
            }
            if (!stringLibrary.includes(trans['GROUP'][i]) && !mcompLibrary.includes(trans['GROUP'][i])) {
                ret = [false];
                return ret;
            }
        }
        ret.push(trans['GROUP']);
        if (trans['APPLY'].length > 0) {
            for (var _i = 0, _a = trans['APPLY']; _i < _a.length; _i++) {
                var obj = _a[_i];
                var subKs = Object.keys(obj);
                var subK = subKs[0];
                var subsubKs = Object.keys(obj[subK]);
                var subsubK = subsubKs[0];
                if (!tokenLib.includes(subsubK)) {
                    ret = [false];
                    return ret;
                }
                else {
                    var str = obj[subK][subsubK];
                    if (!stringLibrary.includes(str) && !mcompLibrary.includes(str)) {
                        ret = [false];
                        return ret;
                    }
                    appTerm.push(obj[subK]);
                    var underS = str.indexOf('_');
                    if (underS == -1 || underS == str.length - 1) {
                        ret = [false];
                        return ret;
                    }
                    var trimStr = str.substr(0, underS);
                    subAK.push(trimStr);
                }
                if (!applyK.includes(subK)) {
                    applyK.push(subK.replace(/\\n/g, "\\n")
                        .replace(/\\'/g, "\\'")
                        .replace(/\\"/g, '\\"')
                        .replace(/\\&/g, "\\&")
                        .replace(/\\r/g, "\\r")
                        .replace(/\\t/g, "\\t")
                        .replace(/\\b/g, "\\b")
                        .replace(/\\f/g, "\\f"));
                }
                else {
                    ret = [false];
                    return ret;
                }
            }
        }
        ret.push(applyK);
        ret.push(subAK);
        ret.push(appTerm);
        return ret;
    };
    QueryController.prototype.groupParser = function (group, data) {
        var gLen = group.length;
        var groups = {};
        function groupBy(array, f) {
            array.forEach(function (o) {
                var group = f(o);
                groups[group] = groups[group] || [];
                groups[group].push(o);
            });
            return Object.keys(groups).map(function (group) {
                return groups[group];
            });
        }
        var result = groupBy(data, function (item) {
            var arr = new Array();
            for (var i = 0; i < gLen; i++) {
                if (typeof item[group[i]] != 'undefined') {
                    arr.push(item[group[i]]);
                }
            }
            return arr;
        });
        return result;
    };
    QueryController.prototype.applyParser = function (keys, arr, apt) {
        var aptLen = apt.length - 1;
        var ret = false;
        var ar = new Array();
        var app = apt.pop();
        var k = Object.keys(app);
        var token = k[0];
        var result;
        var name = keys.pop();
        var tempAr = new Array();
        tempAr = tempAr.concat(arr);
        var key = app[token];
        if (arr.length < 1)
            return false;
        ret = this.tokenParser(token, key, tempAr, name);
        ar.push(ret);
        if (ret == false) {
            return false;
        }
        while (aptLen-- > 0) {
            name = keys.pop();
            app = apt.pop();
            k = Object.keys(app);
            token = k[0];
            key = app[token];
            tempAr = tempAr.concat(arr);
            ret = this.tokenParser(token, key, tempAr, name);
            if (ret == false) {
                return false;
            }
            ar.push(ret);
        }
        var arLen = ar.length;
        var unique = arr[0];
        for (var i = 0; i < arLen; i++) {
            unique = Object.assign(ar[i], unique);
        }
        return unique;
    };
    QueryController.prototype.tokenParser = function (tk, key, arr, name) {
        var len = arr.length;
        var temp = null;
        var obj, val;
        if (tk == 'MAX' || tk == 'MIN') {
            if (!mcompLibrary.includes(key)) {
                return false;
            }
            for (var i = 0; i < len; i++) {
                obj = arr[i];
                val = obj[key];
                if (temp == null) {
                    temp = val;
                }
                else {
                    if (tk == 'MAX') {
                        if (val > temp) {
                            temp = val;
                        }
                        continue;
                    }
                    else {
                        if (val < temp) {
                            temp = val;
                        }
                        continue;
                    }
                }
            }
            var max = (_a = {}, _a[name] = temp, _a);
            return max;
        }
        else if (tk == 'SUM') {
            if (!mcompLibrary.includes(key)) {
                return false;
            }
            for (var i = 0; i < len; i++) {
                obj = arr[i];
                temp = temp + obj[key];
            }
            var sum = (_b = {}, _b[name] = temp, _b);
            return sum;
        }
        else if (tk == 'COUNT') {
            if (!mcompLibrary.includes(key) && !stringLibrary.includes(key)) {
                return false;
            }
            temp = null;
            var num_1 = new Array();
            for (var i = 0; i < len; i++) {
                obj = arr[i];
                val = obj[key];
                num_1.push(val);
            }
            var newList = num_1.filter(function (elem, pos) {
                return num_1.indexOf(elem) == pos;
            });
            temp = newList.length;
            var count = (_c = {}, _c[name] = temp, _c);
            return count;
        }
        else if (tk == 'AVG') {
            if (!mcompLibrary.includes(key)) {
                return false;
            }
            temp = 0;
            for (var i = 0; i < len; i++) {
                obj = arr[i];
                val = obj[key];
                val = val * 10;
                val = Number(val.toFixed(0));
                temp = temp + val;
            }
            temp = temp / len;
            temp = temp / 10;
            temp = Number(temp.toFixed(2));
            var avg = (_d = {}, _d[name] = temp, _d);
            return avg;
        }
        var _a, _b, _c, _d;
    };
    QueryController.prototype.sortMulti = function (arr, dir, dirKeys) {
        var that = this;
        if (dir == 'UP') {
            var firstK_1 = dirKeys.shift();
            arr.sort(function (a, b) {
                var valA, valB;
                if (typeof a[firstK_1] == 'number') {
                    valA = a[firstK_1];
                    valB = b[firstK_1];
                }
                else {
                    valA = a[firstK_1].toUpperCase();
                    valB = b[firstK_1].toUpperCase();
                }
                if (valA < valB)
                    return -1;
                else if (valA > valB)
                    return 1;
                else {
                    var dumAr = new Array();
                    dumAr = dumAr.concat(dirKeys);
                    if (dirKeys.length == 0)
                        return 0;
                    return that.subSort(a, b, dir, dumAr);
                }
            });
        }
        else {
            var firstK_2 = dirKeys.shift();
            arr.sort(function (a, b) {
                var valA, valB;
                if (typeof a[firstK_2] == 'number') {
                    valA = a[firstK_2];
                    valB = b[firstK_2];
                }
                else {
                    valA = a[firstK_2].toUpperCase();
                    valB = b[firstK_2].toUpperCase();
                }
                if (valA > valB)
                    return -1;
                else if (valA < valB)
                    return 1;
                else {
                    var dumAr = new Array();
                    dumAr = dumAr.concat(dirKeys);
                    if (dirKeys.length == 0)
                        return 0;
                    return that.subSort(a, b, dir, dumAr);
                }
            });
        }
        return arr;
    };
    QueryController.prototype.subSort = function (a, b, dir, dirKeys) {
        if (dirKeys.length == 0)
            return 0;
        var firstK = dirKeys.shift();
        if (dir == "UP") {
            if (typeof a[firstK] == 'number') {
                var valA = a[firstK];
                var valB = b[firstK];
                if (valA < valB)
                    return -1;
                else if (valA > valB)
                    return 1;
                else {
                    return this.subSort(a, b, dir, dirKeys);
                }
            }
            else if (typeof a[firstK] == 'string') {
                var nameA = a[firstK].toUpperCase();
                var nameB = b[firstK].toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                else {
                    return this.subSort(a, b, dir, dirKeys);
                }
            }
        }
        else {
            if (typeof a[firstK] == 'number') {
                var valA = a[firstK];
                var valB = b[firstK];
                if (valA > valB)
                    return -1;
                else if (valA < valB)
                    return 1;
                else {
                    return this.subSort(a, b, dir, dirKeys);
                }
            }
            else if (typeof a[firstK] == 'string') {
                var nameA = a[firstK].toUpperCase();
                var nameB = b[firstK].toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                else {
                    return this.subSort(a, b, dir, dirKeys);
                }
            }
        }
    };
    return QueryController;
}());
exports.default = QueryController;
//# sourceMappingURL=QueryController.js.map