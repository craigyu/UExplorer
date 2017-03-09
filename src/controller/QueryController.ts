import Log from "../Util";
import { error } from "util";
var fs = require("fs");
var currentData: any;
var isValidKeys: boolean[] = [];
var misID = new Array();
var notCount = 0;
var dataPath = './cachedDatasets/';
var andArr = new Array();
var andKeyCount = 0;
var keyNum = 0;
var keyArr = new Array();
var toProcess = new Array();
var mcompLibrary = new Array('courses_avg', 'courses_pass', 'courses_fail', 'courses_audit', 'courses_year', 'rooms_lat', 'rooms_lon', 'rooms_seats');
var stringLibrary = new Array('courses_dept', 'courses_id', 'courses_instructor', 'courses_title', 'courses_uuid', 'rooms_fullname',
    'rooms_shortname', 'rooms_number', 'rooms_name', 'rooms_address', 'rooms_type', 'rooms_furniture', 'rooms_href');


export default class QueryController {

    public resetVars() {
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
    }

    public getMisID() {
        return misID;
    }

    public getValidKeys() {
        let temp = isValidKeys;
        isValidKeys = [];
        return temp;
    }

    public returnVal() {
        return toProcess.pop();
    }

    public returnKeys() {
        return keyArr;
    }

    public getKeys(where: any, filter: string) {
        if (filter == 'AND' || filter == 'OR' || filter == 'NOT') {
            if (filter == 'AND' || filter == 'OR') {
                if (where[filter].length < 2) {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    let subLen = Object.keys(where[filter]).length;
                    for (let subFilter of where[filter]) {
                        for (let subSubfilter of Object.keys(subFilter)) {
                            this.getKeys(subFilter, subSubfilter);
                        }
                    }
                }

            }
            else if (filter == 'NOT') {
                let notKeys = Object.keys(where[filter]);
                if (notKeys.length != 1) {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    let subFilter = notKeys[0];
                    this.getKeys(where[filter], subFilter);
                }
            }
        }
        else {
            if (Object.keys(where[filter]).length != 1) {
                isValidKeys.push(false);
                return;
            }
            let keys = Object.keys(where[filter]);
            let key = keys[0];
            let n = key.indexOf("_");
            if (n < 1) {
                isValidKeys.push(false);
                return;
            }
            let fileName = key.substr(0, n);
            keyArr.push(fileName);
        }
    }

    public whereParser(where: any, filter: string, theObj: any) {
        function allTrue(element: boolean, index: any, array: any) {
            return element == true;
        }

        if (filter == 'AND' || filter == 'OR') {

            let subLen = Object.keys(where[filter]).length;
            for (let subFilter of where[filter]) {
                for (let subSubfilter of Object.keys(subFilter)) {
                    this.whereParser(subFilter, subSubfilter, theObj);
                }
            }
            if (filter == 'AND') {
                let waitList = new Array();
                for (let i = 0; i < subLen; i++) {
                    waitList.push(toProcess.pop());
                }
                if (waitList.every(allTrue) == true){
                    toProcess.push(true);
                }
                else{
                    toProcess.push(false);
                }
            }
            else if (filter == 'OR') {
                let waitList = new Array();
                for (let i = 0; i < subLen; i++) {
                    waitList.push(toProcess.pop());
                }
                if(waitList.includes(true)){
                    toProcess.push(true);
                }
                else{
                    toProcess.push(false);
                }
            }
        }


        else if (filter == 'LT' || filter == 'GT' || filter == 'EQ') {
            let mcompKeys = Object.keys(where[filter]);

            let key = mcompKeys[0];

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
                            else toProcess.push(false);
                        }
                        else if (filter == 'GT') {
                            if (theObj[key] > where[filter][key]) {
                                toProcess.push(true);
                            }
                            else toProcess.push(false);
                        }
                        else if (filter == 'EQ') {
                            if (theObj[key] == where[filter][key]) {
                                toProcess.push(true);
                            }
                            else toProcess.push(false);
                        }
                    }
                    else toProcess.push(false);
                }

            }

            else {
                isValidKeys.push(false);
                return;
            }

        }


        else if (filter == 'IS') {
            let isKey = Object.keys(where[filter]);
            let key = isKey[0];
            if (stringLibrary.includes(key)) {
                if (typeof where[filter][key] != 'string') {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    let strIS = where[filter][key];
                    let star = strIS.indexOf("*");
                    let keyLen = strIS.length - 1;

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
                            let subIsStr = strIS.substr(1, keyLen - 1);
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
                            let subIsStr = strIS.substr(1, keyLen);

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
                    }
                    else if (star == keyLen) {
                        let subIsStr = strIS.substr(0, keyLen);
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
            let notKeys = Object.keys(where[filter]);
            if (notKeys.length != 1) {
                isValidKeys.push(false);
                return;
            }

            let subFilter = notKeys[0]
            this.whereParser(where[filter], subFilter, theObj);

            if (notCount % 2 != 0) {
                let len = toProcess.length - 1;
                if (toProcess[len] == true) {
                    toProcess[len] = false;
                }
                else {
                    toProcess[len] = true;
                }
                notCount = 0;
            }
        }

    }






    // MCOMPFILTERED FOR NOW BECAUSE WE WANT TO MAKE SURE THE FUNCTIONALITY WORKS.
    // MCOMPFILTER = TOTALFILTERED AFTER

    public optionParser(mcompFiltered: any[], optionBody: any, idAssure: string): any {
        if (!("COLUMNS" in optionBody) || !("FORM" in optionBody)) {
            return null;
        }
        // dealing with columns
        let colVal: any = [];
        for (let val of optionBody["COLUMNS"]) {
            let n = val.indexOf("_");
            let fileName = val.substr(0, n);
            if (n < 1) {
                return null;
            }
            if (idAssure == "") {
                return null;
            }
            else if (idAssure != fileName) {
                return null;
            }
            colVal.push(val);
        }

        if (optionBody["FORM"] != "TABLE") {
            return null;
        }
        //check if order is valid
        var orderVal: string;
        if (optionBody.hasOwnProperty("ORDER")) {
            if (typeof optionBody["ORDER"] != 'string') {
                return null;
            }
            else {
                // var s = optionBody["ORDER"];
                if (!colVal.includes(optionBody["ORDER"])) {
                    return null;
                }
                else {
                    orderVal = optionBody["ORDER"];
                }
            }
        }
        else orderVal = "";


        var colData = new Array();

        for (let obj of mcompFiltered) {
            var eachData = new Array();
            for (let val of colVal) {
                if (obj.hasOwnProperty(val)) {
                    eachData.push({ [val]: obj[val] })
                }
            }
            if (eachData.length > 0) {
                let parsed = JSON.parse(JSON.stringify(eachData));
                colData.push(parsed);
            }
        }

        var c = colData;
        var processed = new Array();


        // PROCESSED THE RESULT TABLE:
        for (let outerArray of colData) {
            var buffer = {};
            for (let i = 0; i < outerArray.length; i++) {
                buffer = joinJSON(buffer, outerArray[i]);
            }
            processed.push(buffer);

        }
        //console.log(processed);

        function joinJSON(o: any, ob: any): any {
            for (var z in ob) {
                o[z] = ob[z];
            }
            return o;
        }

        // END OF PROCESS TABLE


        // START OF ORDERING //
        //sort with number
        if (orderVal != "") {
            if (mcompLibrary.includes(orderVal)) {
                processed.sort(function (a: any, b: any) {
                    return a[orderVal] - b[orderVal];
                })
                // console.log(processed);
            }
            //sort alphabetically
            else if (stringLibrary.includes(orderVal)) {
                processed.sort(function (a: any, b: any) {
                    var nameA = a[orderVal].toUpperCase(); // ignore upper and lowercase
                    var nameB = b[orderVal].toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                })
                // console.log(processed);
            }
            else return null;
        }
        // END OF ORDERING

        var result = {
            render: optionBody["FORM"],
            result: processed
        };
        return result;
    }


}

