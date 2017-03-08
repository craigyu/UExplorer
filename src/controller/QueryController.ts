import Log from "../Util";
import { error } from "util";
var fs = require("fs");
var currentData: any;
var isValidKeys: boolean[] = [];
var misID = new Array();
var idAssure = "";
var notCount = 0;
var dataPath = './cachedDatasets/';
var andArr = new Array();
var andKeyCount = 0;
var keyNum = 0;
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
        idAssure = "";
        currentData = null;
        notCount = 0;
        andKeyCount = 0;
        keyNum = 0;
        return;
    }

    public getMisID() {
        return misID;
    }

    public getValidKeys() {
        return isValidKeys;
    }

    public returnVal() {
        return toProcess[0];
    }

    public whereParser(where: any, filter: string) {

        if (filter == 'AND' || filter == 'OR') {
            if (where[filter].length < 2) {
                isValidKeys.push(false);
                return;
            }
            let subLen = Object.keys(where[filter]).length;
            for (let subFilter of where[filter]) {
                for (let subSubfilter of Object.keys(subFilter)) {
                    if (subFilter == 'AND') {
                        andKeyCount++;
                    }
                    this.whereParser(subFilter, subSubfilter);
                }
            }
            if (filter == 'AND') {
                let waitList = new Array();

                for (let i = 0; i < subLen; i++) {
                    waitList.push(toProcess.pop());
                }

                let newList = waitList.shift().reduce(function (res: any, v: any) {
                    if (res.indexOf(v) === -1 && waitList.every(function (a: any) {
                        return a.indexOf(v) !== -1;
                    })) res.push(v);
                    return res;
                }, []);


                toProcess.push(newList);

            }
            else if (filter == 'OR') {
                let waitList = new Array();
                for (let i = 0; i < subLen; i++) {
                    let w = toProcess.pop();
                    waitList = waitList.concat(waitList, w);
                }
                let newList = waitList.filter(function (elem, pos) {
                    return waitList.indexOf(elem) == pos;
                });


                toProcess.push(newList);
            }
        }


        else if (filter == 'LT' || filter == 'GT' || filter == 'EQ') {
            let mcompKeys = Object.keys(where[filter]);
            let waitList = new Array();
            if (Object.keys(where[filter]).length != 1) {
                isValidKeys.push(false);
                return;
            }

            let key = mcompKeys[0];
            let n = key.indexOf("_");
            let fileName = key.substr(0, n);
            if (n < 1) {
                isValidKeys.push(false);
                return;
            }
            if (!fs.existsSync(dataPath + fileName)) {
                misID.push(fileName);
                return;
            }
            else if (idAssure == "") {
                idAssure = fileName;
                let thisData = fs.readFileSync(dataPath + fileName, "utf8");
                try {
                    currentData = JSON.parse(thisData);
                }
                catch (err) {
                    isValidKeys.push(false);
                    return;
                }
            }
            else if (idAssure != fileName) {
                isValidKeys.push(false);
                return;
            }

            if (mcompLibrary.includes(key)) {
                if (typeof where[filter][key] != 'number') {
                    isValidKeys.push(false);
                    return;
                }
                else {
                    for (let obj of currentData) {
                        if (obj.hasOwnProperty(key)) {
                            if (filter == 'LT') {
                                if (obj[key] < where[filter][key]) {
                                    waitList.push(obj)
                                }
                            }
                            if (filter == 'GT') {
                                if (obj[key] > where[filter][key]) {
                                    waitList.push(obj)
                                }
                            }
                            if (filter == 'EQ') {
                                if (obj[key] == where[filter][key]) {
                                    waitList.push(obj)
                                }
                            }
                        }

                    }
                    toProcess.push(waitList);
                }

            }


            else {
                isValidKeys.push(false);
                return;
            }

        }


        else if (filter == 'IS') {
            let isKey = Object.keys(where[filter]);
            let waitList = new Array();
            if (Object.keys(where[filter]).length != 1) {
                isValidKeys.push(false);
                return;
            }

            let key = isKey[0];
            let n = key.indexOf("_");
            let fileName = key.substr(0, n);
            if (n < 1) {
                isValidKeys.push(false);
                return;
            }
            if (!fs.existsSync(dataPath + fileName)) {
                misID.push(fileName);
                return;
            }
            else if (idAssure == "") {
                idAssure = fileName;
                let thisData = fs.readFileSync(dataPath + fileName, "utf8");
                try {
                    currentData = JSON.parse(thisData);
                }
                catch (err) {
                    isValidKeys.push(false);
                    return;
                }
            }
            else if (idAssure != fileName) {
                isValidKeys.push(false);
                return;
            }
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
                        for (let obj of currentData) {
                            if (obj.hasOwnProperty(key)) {
                                if (obj[key] == where[filter][key]) {
                                    waitList.push(obj);
                                }

                            }

                        }

                    }
                    else if (star == 0) {
                        if (strIS.substr(keyLen, 1) == "*") {
                            let subIsStr = strIS.substr(1, keyLen - 1);
                            for (let obj of currentData) {
                                if (obj.hasOwnProperty(key)) {
                                    if (obj[key].includes(subIsStr)) {
                                        waitList.push(obj);
                                    }

                                }
                            }
                        }
                        else {
                            let subIsStr = strIS.substr(1, keyLen);
                            for (let obj of currentData) {
                                if (obj.hasOwnProperty(key)) {
                                    if (obj[key].endsWith(subIsStr)) {
                                        waitList.push(obj);
                                    }
                                }
                            }

                        }
                    }
                    else if (star == keyLen) {
                        let subIsStr = strIS.substr(0, keyLen);
                        for (let obj of currentData) {
                            if (obj.hasOwnProperty(key)) {
                                if (obj[key].startsWith(subIsStr)) {
                                    waitList.push(obj);
                                }


                            }
                        }

                    }

                    toProcess.push(waitList);
                }
            } else {
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
            this.whereParser(where[filter], subFilter);

            let waitList = new Array();
            if (notCount % 2 != 0) {
                let n = toProcess.pop();
                waitList = currentData.filter(function (x: any) {
                    return n.indexOf(x) < 0
                });
                toProcess.push(waitList);
                notCount = 0;
            }
        }

    }

    // private intersect(arr: any) {

    //     function isMap<T>(obj: { [n: string]: T }) { return obj; };

    //     var args = arr,
    //         aLower = [],
    //         aStack = new Array(),
    //         count,
    //         i,
    //         nArgs,
    //         nLower,
    //         oRest = {},
    //         oTmp = {},
    //         value,
    //         compareArrayLength = function (a:any, b:any) {
    //             return (a.length - b.length);
    //         },
    //         indexes = function (array: any, oStack:any) {
    //             var i = 0,
    //                 value,
    //                 nArr = array.length;
    //             for (; nArr > i; ++i) {
    //                 value = array[i];                  
    //                 if (!oTmp[value]) {
    //                     oStack[value] = 1 + (oStack[value] || 0); // counter
    //                     oTmp[value] = true;
    //                 }
    //             }
    //             return oStack;
    //         };

    //     args.sort(compareArrayLength);
    //     aLower = args.shift();
    //     nLower = aLower.length;

    //     if (0 === nLower) {
    //         return aStack;
    //     }

    //     nArgs = args.length;
    //     i = nArgs;
    //     while (i--) {
    //         oRest = indexes(args.shift(), oRest);
    //     }

    //     for (i = 0; nLower > i; ++i) {
    //         value = aLower[i];
    //         count = oRest[value];
    //         if (!oTmp[value]) {
    //             if (nArgs === count) {
    //                 aStack.push(value);
    //                 oTmp[value] = true;
    //             }
    //         }
    //     }

    //     return aStack;
    // }



    // MCOMPFILTERED FOR NOW BECAUSE WE WANT TO MAKE SURE THE FUNCTIONALITY WORKS.
    // MCOMPFILTER = TOTALFILTERED AFTER

    public optionParser(mcompFiltered: any[], optionBody: any): any {
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
        console.log(processed);

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

