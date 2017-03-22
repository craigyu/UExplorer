"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../Util");
var QueryController_1 = require("./QueryController");
var JSZip = require("jszip");
var fs = require("fs");
if (!fs.existsSync("./cachedDatasets/")) {
    fs.mkdirSync('./cachedDatasets/');
}
var dataPath = './cachedDatasets/';
var toProcess = new Array();
var allTheData = new Array();
var currentData;
var InsightFacade = (function () {
    function InsightFacade() {
        Util_1.default.trace('InsightFacadeImpl::init()');
    }
    InsightFacade.prototype.addDataset = function (id, content) {
        var theTable;
        var hasTable = false;
        return new Promise(function (fulfill, reject) {
            var options = { base64: true };
            if (id == '')
                reject({ code: 400, body: { "error": "No id was provided." } });
            var cached = new JSZip();
            if (id == "courses") {
                var sucCode_1 = 0;
                if (fs.existsSync(dataPath + id)) {
                    sucCode_1 = 201;
                    fs.unlinkSync(dataPath + id);
                }
                else {
                    sucCode_1 = 204;
                }
                cached.loadAsync(content, options)
                    .then(function (files) {
                    var processList = [];
                    files.remove("__MACOSX");
                    if (id == "courses") {
                        files.forEach(function (relativePath, file) {
                            if (relativePath != id + "/") {
                                var promise = file.async("string").then(function (json) {
                                    try {
                                        var parsed = JSON.parse(json);
                                        if (typeof parsed != 'undefined' && parsed.hasOwnProperty('result')) {
                                            var objValues = [];
                                            for (var _i = 0, _a = parsed.result; _i < _a.length; _i++) {
                                                var obj = _a[_i];
                                                var subObjValues = {
                                                    "courses_dept": "",
                                                    "courses_id": "",
                                                    "courses_instructor": "",
                                                    "courses_title": "",
                                                    "courses_uuid": "",
                                                    "courses_audit": 0,
                                                    "courses_avg": 0,
                                                    "courses_fail": 0,
                                                    "courses_pass": 0,
                                                    "courses_year": 0
                                                };
                                                if (Object.keys(obj) != null && Object.keys(obj) != undefined) {
                                                    if (obj.hasOwnProperty("Subject")) {
                                                        var dept = id + "_dept";
                                                        var deptVal = obj["Subject"];
                                                        subObjValues["courses_dept"] = deptVal;
                                                    }
                                                    if (obj.hasOwnProperty("Course")) {
                                                        var nameId = id + "_id";
                                                        var nameIdVal = obj["Course"];
                                                        subObjValues["courses_id"] = nameIdVal;
                                                    }
                                                    if (obj.hasOwnProperty("Avg")) {
                                                        var avg = id + "_avg";
                                                        var avgVal = obj["Avg"];
                                                        subObjValues["courses_avg"] = avgVal;
                                                    }
                                                    if (obj.hasOwnProperty("Professor")) {
                                                        var instr = id + "_instructor";
                                                        var instrVal = obj["Professor"];
                                                        subObjValues["courses_instructor"] = instrVal;
                                                    }
                                                    if (obj.hasOwnProperty("Title")) {
                                                        var title = id + "_title";
                                                        var titleVal = obj["Title"];
                                                        subObjValues["courses_title"] = titleVal;
                                                    }
                                                    if (obj.hasOwnProperty("Pass")) {
                                                        var pass = id + "_pass";
                                                        var passVal = obj["Pass"];
                                                        subObjValues["courses_pass"] = passVal;
                                                    }
                                                    if (obj.hasOwnProperty("Fail")) {
                                                        var fail = id + "_fail";
                                                        var failVal = obj["Fail"];
                                                        subObjValues["courses_fail"] = failVal;
                                                    }
                                                    if (obj.hasOwnProperty("Audit")) {
                                                        var audit = id + "_audit";
                                                        var auditVal = obj["Audit"];
                                                        subObjValues["courses_audit"] = auditVal;
                                                    }
                                                    if (obj.hasOwnProperty("id")) {
                                                        var uuid = id + "_uuid";
                                                        var uuidVal = obj["id"];
                                                        subObjValues["courses_uuid"] = uuidVal.toString();
                                                    }
                                                    if (obj.hasOwnProperty("Section")) {
                                                        if (obj["Section"] == "overall") {
                                                            subObjValues["courses_year"] = 1900;
                                                        }
                                                        else {
                                                            if (obj.hasOwnProperty("Year")) {
                                                                subObjValues["courses_year"] = parseInt(obj["Year"]);
                                                                ;
                                                            }
                                                        }
                                                    }
                                                }
                                                objValues.push(subObjValues);
                                            }
                                        }
                                    }
                                    catch (err) {
                                        return reject({
                                            code: 400,
                                            body: { 'error': 'file include invalid JSON(s)' }
                                        });
                                    }
                                    return objValues;
                                });
                                if (typeof promise != 'undefined') {
                                    processList.push(promise);
                                }
                            }
                        });
                    }
                    Promise.all(processList).then(function (arrayOfStrings) {
                        var counter = 0;
                        for (var _i = 0, arrayOfStrings_1 = arrayOfStrings; _i < arrayOfStrings_1.length; _i++) {
                            var i = arrayOfStrings_1[_i];
                            if (i == undefined) {
                                counter++;
                            }
                        }
                        if (counter == arrayOfStrings.length) {
                            reject({ code: 400, body: { 'error': 'No useful data provided' } });
                        }
                        var combine = new Array();
                        if (arrayOfStrings.length > 2) {
                            for (var _a = 0, arrayOfStrings_2 = arrayOfStrings; _a < arrayOfStrings_2.length; _a++) {
                                var i = arrayOfStrings_2[_a];
                                for (var _b = 0, i_1 = i; _b < i_1.length; _b++) {
                                    var j = i_1[_b];
                                    if (typeof j != "undefined") {
                                        combine.push(j);
                                    }
                                }
                            }
                        }
                        fs.writeFileSync(dataPath + id, JSON.stringify(combine));
                        fulfill({ code: sucCode_1, body: {} });
                    })
                        .catch(function (err) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    });
                })
                    .catch(function (err) {
                    reject({ code: 400, body: { 'error': err.toString('utf8') } });
                });
            }
            else if (id == "rooms") {
                var zipFiles_1;
                var http_1 = require("parse5");
                var sucCode_2 = 0;
                if (fs.existsSync(dataPath + id)) {
                    sucCode_2 = 201;
                    fs.unlinkSync(dataPath + id);
                }
                else {
                    sucCode_2 = 204;
                }
                cached.loadAsync(content, options)
                    .then(function (files) {
                    zipFiles_1 = files;
                    return files.file("index.htm").async("string");
                })
                    .then(function (indexFile) {
                    return http_1.parseFragment(indexFile);
                })
                    .then(function (parsedHTML) {
                    return findTable(parsedHTML);
                })
                    .then(function (tableFound) {
                    if (tableFound) {
                        var arrayOfShortBuilding = [];
                        for (var _i = 0, _a = theTable.childNodes; _i < _a.length; _i++) {
                            var cI = _a[_i];
                            if (cI.nodeName == "tr") {
                                for (var _b = 0, _c = cI.childNodes; _b < _c.length; _b++) {
                                    var inTd = _c[_b];
                                    if (inTd.attrs && inTd.attrs.length == 1
                                        && inTd.attrs[0].name == "class"
                                        && inTd.attrs[0].value == "views-field views-field-field-building-code") {
                                        var value = inTd.childNodes[0].value.trim();
                                        arrayOfShortBuilding.push(value);
                                    }
                                }
                            }
                        }
                        return arrayOfShortBuilding;
                    }
                    else {
                        reject({ code: 400, body: { 'error': "no table found" } });
                    }
                })
                    .then(function (content) {
                    var processList = [];
                    zipFiles_1.folder("campus/discover/buildings-and-classrooms").remove(".DS_Store");
                    zipFiles_1.folder("campus/discover/buildings-and-classrooms").forEach(function (relativePath, file) {
                        var promise = createDataset(file, content, relativePath);
                        if (promise != {}) {
                            processList.push(promise);
                        }
                    });
                    Promise.all(processList).then(function (arrayOfStrings) {
                        if (arrayOfStrings.length == 0) {
                            reject({ code: 400, body: { 'error': 'no data' } });
                        }
                        var arLen = arrayOfStrings.length;
                        var newAr = new Array();
                        for (var i = 0; i < arLen; i++) {
                            newAr = newAr.concat(arrayOfStrings[i]);
                        }
                        newAr = newAr.filter(function (n) {
                            return Object.keys(n).length > 0;
                        });
                        fs.writeFileSync(dataPath + id, JSON.stringify(newAr));
                        fulfill({ code: sucCode_2, body: {} });
                    })
                        .catch(function (err) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    });
                })
                    .catch(function (err) {
                    reject({ code: 400, body: { 'error': err.toString('utf8') } });
                });
            }
            else {
                reject({ code: 400, body: { 'error': 'the id is not valid' } });
            }
        });
        function findTable(node) {
            for (var cI in node.childNodes) {
                if (node.childNodes[cI].nodeName == "tbody") {
                    theTable = node.childNodes[cI];
                    hasTable = true;
                    break;
                }
                else {
                    findTable(node.childNodes[cI]);
                }
            }
            return hasTable;
        }
        function createDataset(file, content, relativePath) {
            return new Promise(function (fulfill, reject) {
                var test = require("parse5");
                var emptyB = {};
                if (content.includes(relativePath)) {
                    file.async("string")
                        .then(function (content) {
                        return test.parseFragment(content);
                    })
                        .then(function (parsedHTML) {
                        var nodeNeeded;
                        var hasNode = false;
                        var theTable;
                        var hasTable = false;
                        var returnData = [];
                        if (findTable(parsedHTML) && findBuildingInfo(parsedHTML)) {
                            returnData.push(theTable);
                            returnData.push(nodeNeeded);
                            return returnData;
                        }
                        else {
                            fulfill(emptyB);
                        }
                        function findBuildingInfo(node) {
                            for (var cI in node.childNodes) {
                                if (node.childNodes[cI].nodeName == "div" && node.childNodes[cI].attrs.length == 1
                                    && node.childNodes[cI].attrs[0].name == "class"
                                    && node.childNodes[cI].attrs[0].value == "building-field") {
                                    hasNode = true;
                                    nodeNeeded = node.childNodes;
                                    break;
                                }
                                else {
                                    findBuildingInfo(node.childNodes[cI]);
                                }
                            }
                            return hasNode;
                        }
                        function findTable(node) {
                            for (var cI in node.childNodes) {
                                if (node.childNodes[cI].nodeName == "tbody") {
                                    theTable = node.childNodes[cI];
                                    hasTable = true;
                                    break;
                                }
                                else {
                                    findTable(node.childNodes[cI]);
                                }
                            }
                            return hasTable;
                        }
                    })
                        .then(function (hasInfo) {
                        var objArr = [];
                        if (typeof (hasInfo) == "undefined") {
                            fulfill(emptyB);
                        }
                        else {
                            objArr.push(getBuildingInfo(file, hasInfo[1], hasInfo[0], relativePath));
                            Promise.all(objArr).then(function (arr) {
                                if (arr[0] != [] && arr[0] != {}) {
                                    fulfill(arr[0]);
                                }
                                else
                                    fulfill({});
                            })
                                .catch(function (err) {
                                console.log(err);
                            });
                        }
                    })
                        .catch(function (err) {
                        fulfill(emptyB);
                    });
                }
                else {
                    fulfill(emptyB);
                }
            });
        }
        function getBuildingInfo(file, parsedBuildingInfo, parsedRoomTable, shortname) {
            var emptyB = {};
            var childLen = parsedRoomTable.childNodes.length;
            var allRooms = new Array();
            var buildingInfo = { "rooms_address": parsedBuildingInfo[3].childNodes[0].childNodes[0].value };
            for (var i = 1; i < childLen; i = i + 2) {
                var temp = {
                    "rooms_fullname": parsedBuildingInfo[1].childNodes[0].childNodes[0].value,
                    "rooms_shortname": shortname,
                    "rooms_number": "",
                    "rooms_name": "",
                    "rooms_address": parsedBuildingInfo[3].childNodes[0].childNodes[0].value,
                    "rooms_lat": 0,
                    "rooms_lon": 0,
                    "rooms_seats": 0,
                    "rooms_type": "",
                    "rooms_furniture": "",
                    "rooms_href": ""
                };
                temp["rooms_number"] = (parsedRoomTable.childNodes[i].childNodes[1].childNodes[1].childNodes[0].value);
                temp["rooms_seats"] = parseInt(parsedRoomTable.childNodes[i].childNodes[3].childNodes[0].value.trim());
                temp["rooms_furniture"] = (parsedRoomTable.childNodes[i].childNodes[5].childNodes[0].value).trim();
                temp["rooms_type"] = (parsedRoomTable.childNodes[i].childNodes[7].childNodes[0].value).trim();
                temp["rooms_name"] = temp["rooms_shortname"] + "_" + temp["rooms_number"];
                temp["rooms_href"] = "http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/" + shortname + "-" + temp["rooms_number"];
                allRooms.push(temp);
            }
            var linkForLatLon = buildingInfo["rooms_address"].split(" ").join("%20");
            var http = require("http");
            var requestToServer = "http://skaha.cs.ubc.ca:11316/api/v1/team188/" + linkForLatLon;
            var objForLatLon;
            return objForLatLon = new Promise(function (fulfill, reject) {
                try {
                    http.get(requestToServer, function (res) {
                        if (res.statusCode != 200) {
                            fulfill(emptyB);
                        }
                        res.setEncoding('utf8');
                        var rowData = '';
                        res.on('data', function (chunk) { return rowData += chunk; });
                        res.on('end', function () {
                            try {
                                var parseData = JSON.parse(rowData);
                                if ('error' in parseData) {
                                    fulfill(emptyB);
                                }
                                else {
                                    for (var _i = 0, allRooms_1 = allRooms; _i < allRooms_1.length; _i++) {
                                        var obj = allRooms_1[_i];
                                        obj["rooms_lat"] = parseData["lat"];
                                        obj["rooms_lon"] = parseData["lon"];
                                    }
                                    fulfill(allRooms);
                                }
                            }
                            catch (e) {
                                fulfill(emptyB);
                            }
                        });
                    }).on('error', function (e) {
                        fulfill(emptyB);
                    });
                }
                catch (err) {
                    fulfill(emptyB);
                }
            });
        }
    };
    InsightFacade.prototype.removeDataset = function (id) {
        return new Promise(function (fulfill, reject) {
            if (fs.existsSync(dataPath + id)) {
                fs.unlinkSync(dataPath + id);
                fulfill({ code: 204, body: {} });
            }
            else
                (reject({ code: 404, body: { 'error': 'The id does not exist' } }));
        });
    };
    InsightFacade.prototype.performQuery = function (query) {
        return new Promise(function (fulfill, reject) {
            var idAssure;
            var finalProduct;
            var qc = new QueryController_1.default();
            var apTerm, aKeys, gKeys, subAks, trimedGK = new Array();
            var trimedColn = new Array();
            try {
                JSON.parse(JSON.stringify(query));
            }
            catch (err) {
                reject({ code: 400, body: { 'error': 'The query is not a valid JSON' } });
            }
            if (query == null || !('WHERE' in query) || !('OPTIONS' in query) || typeof query == 'undefined' || Object.keys(query).length < 2) {
                reject({ code: 400, body: { 'error': 'The query is invalid' } });
            }
            else if (Object.keys(query).length > 2) {
                var transBody = query.TRANSFORMATIONS;
                if (Object.keys(query).length > 3) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                else if (!('TRANSFORMATIONS' in query)) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                else if (!Object.keys(transBody).includes('GROUP') || !Object.keys(transBody).includes('APPLY') || Object.keys(transBody).length != 2) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                var tKeys = qc.transTerms(transBody);
                if (tKeys[0] == false) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                else {
                    gKeys = tKeys[0];
                    aKeys = tKeys[1];
                    subAks = tKeys[2];
                    apTerm = tKeys[3];
                }
                var trimedColn_1 = new Array();
                if (Object.keys(query.OPTIONS).length > 1) {
                    var opColn = query.OPTIONS['COLUMNS'];
                    for (var _i = 0, opColn_1 = opColn; _i < opColn_1.length; _i++) {
                        var str = opColn_1[_i];
                        var underS = str.indexOf('_');
                        if (underS == 0 || underS == str.length - 1) {
                            reject({ code: 400, body: { 'error': 'The query is invalid' } });
                        }
                        else if (underS == -1) {
                            if (!aKeys.includes(str)) {
                                reject({ code: 400, body: { 'error': 'The query is invalid' } });
                            }
                        }
                        else {
                            if (!gKeys.includes(str)) {
                                reject({ code: 400, body: { 'error': 'The query is invalid' } });
                            }
                            var trimStr = str.substr(0, underS);
                            trimedColn_1.push(trimStr);
                        }
                    }
                    for (var _a = 0, gKeys_1 = gKeys; _a < gKeys_1.length; _a++) {
                        var str = gKeys_1[_a];
                        var underS = str.indexOf('_');
                        var trimStr = str.substr(0, underS);
                        trimedColn_1.push(trimStr);
                        trimedGK.push(trimStr);
                    }
                    trimedColn_1 = trimedColn_1.concat(subAks);
                    for (var i = 1; i < trimedColn_1.length; i++) {
                        if (trimedColn_1[0] != trimedColn_1[i]) {
                            reject({ code: 400, body: { 'error': 'The query is invalid' } });
                        }
                    }
                    var fileName = trimedColn_1[0];
                    if (!fs.existsSync(dataPath + fileName)) {
                        reject({ code: 424, body: { 'missing': [fileName] } });
                    }
                    else {
                        idAssure = fileName;
                        currentData = fs.readFileSync(dataPath + fileName, "utf8");
                        currentData = JSON.parse(currentData);
                    }
                }
                else {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
            }
            function isValid(element, index, array) {
                return element == true;
            }
            try {
                qc.resetVars();
                if (Object.keys(query.WHERE).length == 1) {
                    var whereKeys = Object.keys(query.WHERE);
                    var filter = whereKeys[0];
                    qc.getKeys(query.WHERE, filter);
                    var allKeys = qc.returnKeys();
                    var keyLen = allKeys.length;
                    var isValidKeys = qc.getValidKeys();
                    if (isValidKeys.every(isValid) == false) {
                        reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } });
                    }
                    if ('TRANSFORMATIONS' in query) {
                        allKeys = allKeys.concat(subAks).concat(trimedGK);
                    }
                    var misID = new Array();
                    if (keyLen == 1) {
                        var name_1 = allKeys[0];
                        if (!fs.existsSync(dataPath + name_1)) {
                            reject({ code: 424, body: { 'missing': allKeys } });
                        }
                        else {
                            idAssure = name_1;
                            currentData = fs.readFileSync(dataPath + name_1, "utf8");
                        }
                    }
                    else if (keyLen > 1) {
                        for (var i = 1; i < keyLen; i++) {
                            if (allKeys[0] != allKeys[i]) {
                                reject({ code: 400, body: { 'error': 'Invalid WHERE' } });
                            }
                        }
                        var name_2 = allKeys[0];
                        if (!fs.existsSync(dataPath + name_2)) {
                            reject({ code: 424, body: { 'missing': [name_2] } });
                        }
                        else {
                            idAssure = name_2;
                            currentData = fs.readFileSync(dataPath + allKeys[0], "utf8");
                        }
                    }
                    else {
                        reject({ code: 400, body: { 'error': 'No keys were found' } });
                    }
                    isValidKeys = qc.getValidKeys();
                    if (isValidKeys.every(isValid) == false) {
                        reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } });
                    }
                    currentData = JSON.parse(currentData);
                    allTheData = [];
                    qc.resetVars();
                    for (var _b = 0, currentData_1 = currentData; _b < currentData_1.length; _b++) {
                        var obj = currentData_1[_b];
                        qc.whereParser(query.WHERE, filter, obj);
                        isValidKeys = qc.getValidKeys();
                        if (isValidKeys.every(isValid) == false) {
                            reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } });
                        }
                        if (qc.returnVal()) {
                            allTheData.push(obj);
                        }
                        qc.resetVars();
                    }
                }
                else if (Object.keys(query.WHERE).length == 0) {
                    allTheData = currentData;
                    idAssure = 'geteverything';
                }
                else
                    (reject({ code: 400, body: { 'error': 'Invalid WHERE' } }));
            }
            catch (err) {
                reject({ code: 400, body: { 'error': err.toString() } });
                throw err;
            }
            if (query.hasOwnProperty('TRANSFORMATIONS')) {
                var gBody = query.TRANSFORMATIONS['GROUP'];
                var result = new Array();
                result = qc.groupParser(gBody, allTheData);
                var aBody = query.TRANSFORMATIONS['APPLY'];
                var aLen = aBody.length;
                var rLen = result.length;
                if (aLen == 0) {
                    allTheData = [];
                    for (var _c = 0, result_1 = result; _c < result_1.length; _c++) {
                        var i = result_1[_c];
                        allTheData.push(i.pop());
                    }
                }
                else {
                    allTheData = [];
                    var rLen_1 = result.length;
                    while (result.length > 0) {
                        var obj = result.shift();
                        var term = new Array();
                        var keys = new Array();
                        term = term.concat(apTerm);
                        keys = keys.concat(aKeys);
                        var val = qc.applyParser(keys, obj, term);
                        if (val == false) {
                            reject({ code: 400, body: { 'error': "Malformed apply" } });
                        }
                        allTheData.push(val);
                    }
                }
            }
            if (Object.keys(query.OPTIONS).length > 1) {
                var hasTrans = false;
                if ('TRANSFORMATIONS' in query) {
                    hasTrans = true;
                }
                finalProduct = qc.optionParser(allTheData, query.OPTIONS, idAssure, hasTrans);
                if (finalProduct == null) {
                    reject({ code: 400, body: { "Error": "Invalid OPTIONS" } });
                }
                fulfill({ code: 200, body: finalProduct.valueOf() });
            }
            else {
                reject({ code: 400, body: { "Error": "Invalid OPTIONS" } });
            }
        });
    };
    return InsightFacade;
}());
exports.default = InsightFacade;
//# sourceMappingURL=InsightFacade.js.map