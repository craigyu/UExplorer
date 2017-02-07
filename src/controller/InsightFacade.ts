/**
 * This is the main programmatic entry point for the project.
 */
import { IInsightFacade, InsightResponse, QueryRequest } from "./IInsightFacade";

import Log from "../Util";

var JSZip = require("jszip");

//var zip = new JSZip();
var fs = require("fs");


if (!fs.existsSync("./cachedDatasets/")) {
    fs.mkdirSync('./cachedDatasets/');
}

var dataPath = './cachedDatasets/';
var whereFilters = new Array();
var mcompFiltered = new Array();
var scompFiltered = new Array();
var negFiltered = new Array();
var allTheData = new Array();
var logicArr = new Array();
var isValidKeys: boolean[] = [];
var orderVal: string;
var isAnd1: boolean = false;
var logicCount = -1;
var isOr1: boolean = false;
var mcompLibrary = new Array('courses_avg', 'courses_pass', 'courses_fail', 'courses_audit');
var stringLibrary = new Array('courses_dept', 'courses_id', 'courses_instructor', 'courses_title', 'courses_uuid');
var allLibrary = new Array('courses_avg', 'courses_pass', 'courses_fail', 'courses_audit', 'courses_dept', 'courses_id',
    'courses_instructor', 'courses_title', 'courses_uuid');




export default class InsightFacade implements IInsightFacade {

    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }

    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            var options = { base64: true };
            if (id == '') reject({ code: 400, body: { "error": "No id was provided." } });
            //console.log("hiiiii");
            // id contains given id
            var cached = new JSZip();

            if (fs.existsSync(dataPath + id)) {

                fs.unlinkSync(dataPath + id);

                cached.loadAsync(content, options)
                    .then(function (files: any) {
                        var processList: Promise<any>[] = [];


                        files.remove("__MACOSX");
                        files.forEach(function (relativePath: any, file: any) {
                            console.log(processList.length);

                            let promise = file.async("string").then(function (json: any) {
                                try {
                                    var parsed = JSON.parse(json);
                                    if (Object.keys(parsed.result).length != 0) {

                                        var objValues: any[] = [];
                                        for (let obj of parsed.result) {
                                            let subObjValues: any[] = [];
                                            if (Object.keys(obj) != null && Object.keys(obj) != undefined) {
                                                if (obj.hasOwnProperty("Subject")) {
                                                    let dept = id + "_dept";
                                                    let deptVal = obj["Subject"];
                                                    subObjValues.push({ [dept]: deptVal })
                                                }
                                                if (obj.hasOwnProperty("Course")) {
                                                    let nameId = id + "_id";
                                                    let nameIdVal = obj["Course"];
                                                    subObjValues.push({ [nameId]: nameIdVal });
                                                }
                                                if (obj.hasOwnProperty("Avg")) {
                                                    let avg = id + "_avg";
                                                    let avgVal = obj["Avg"];
                                                    subObjValues.push({ [avg]: avgVal });
                                                }
                                                if (obj.hasOwnProperty("Professor")) {
                                                    let instr = id + "_instructor";
                                                    let instrVal = obj["Professor"];
                                                    subObjValues.push({ [instr]: instrVal });
                                                }
                                                if (obj.hasOwnProperty("Title")) {
                                                    let title = id + "_title";
                                                    let titleVal = obj["Title"];
                                                    subObjValues.push({ [title]: titleVal });
                                                }
                                                if (obj.hasOwnProperty("Pass")) {
                                                    let pass = id + "_pass";
                                                    let passVal = obj["Pass"];
                                                    subObjValues.push({ [pass]: passVal });
                                                }
                                                if (obj.hasOwnProperty("Fail")) {
                                                    let fail = id + "_fail";
                                                    let failVal = obj["Fail"];
                                                    subObjValues.push({ [fail]: failVal });
                                                }
                                                if (obj.hasOwnProperty("Audit")) {
                                                    let audit = id + "_audit";
                                                    let auditVal = obj["Audit"];
                                                    subObjValues.push({ [audit]: auditVal });
                                                }
                                                if (obj.hasOwnProperty("id")) {
                                                    let uuid = id + "_uuid";
                                                    let uuidVal = obj["id"];
                                                    subObjValues.push({ [uuid]: uuidVal });
                                                }


                                            }
                                            objValues.push(subObjValues);

                                        }


                                    }


                                }

                                catch (err) {

                                    reject({ code: 400, body: { 'error': 'files include invalid JSON(s)' } });
                                    throw err;

                                }


                                return objValues;
                            });

                            processList.push(promise);
                        })
                        Promise.all(processList).then(function (arrayOfStrings: any) {
                            var counter = 0;
                            for (let i of arrayOfStrings) {
                                if (i == undefined) {
                                    counter++
                                }
                            }
                            if (counter == arrayOfStrings.length) {
                                reject({ code: 400, body: { 'error': 'No useful data provided' } });
                            }

                            var combine = new Array();
                            if (arrayOfStrings.length > 2) {
                                for (let i of arrayOfStrings) {
                                    for (let j of i) {
                                        if (typeof j != "undefined") {
                                            combine.push(j);
                                        }
                                    }
                                }
                            } else {
                                for (let i of arrayOfStrings) {
                                    if (typeof i != "undefined") {
                                        for (let j of i) {
                                            combine.push(j);
                                        }
                                    }
                                }
                            }



                            fs.writeFileSync(dataPath + id, JSON.stringify(combine));
                            fulfill({ code: 204, body: {} });
                        })
                            .catch(function (err: any) {
                                reject({ code: 400, body: { 'error': err.toString('utf8') } });
                            })
                    })
                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    })


            }


            else {

                cached.loadAsync(content, options)
                    .then(function (files: any) {
                        var processList: Promise<any>[] = [];


                        files.remove("__MACOSX");
                        files.forEach(function (relativePath: any, file: any) {
                            console.log(processList.length);

                            let promise = file.async("string").then(function (json: any) {
                                try {
                                    var parsed = JSON.parse(json);
                                    if (Object.keys(parsed.result).length != 0) {

                                        var objValues: any[] = [];
                                        for (let obj of parsed.result) {
                                            let subObjValues: any[] = [];
                                            if (Object.keys(obj) != null && Object.keys(obj) != undefined) {
                                                if (obj.hasOwnProperty("Subject")) {
                                                    let dept = id + "_dept";
                                                    let deptVal = obj["Subject"];
                                                    subObjValues.push({ [dept]: deptVal })
                                                }
                                                if (obj.hasOwnProperty("Course")) {
                                                    let nameId = id + "_id";
                                                    let nameIdVal = obj["Course"];
                                                    subObjValues.push({ [nameId]: nameIdVal });
                                                }
                                                if (obj.hasOwnProperty("Avg")) {
                                                    let avg = id + "_avg";
                                                    let avgVal = obj["Avg"];
                                                    subObjValues.push({ [avg]: avgVal });
                                                }
                                                if (obj.hasOwnProperty("Professor")) {
                                                    let instr = id + "_instructor";
                                                    let instrVal = obj["Professor"];
                                                    subObjValues.push({ [instr]: instrVal });
                                                }
                                                if (obj.hasOwnProperty("Title")) {
                                                    let title = id + "_title";
                                                    let titleVal = obj["Title"];
                                                    subObjValues.push({ [title]: titleVal });
                                                }
                                                if (obj.hasOwnProperty("Pass")) {
                                                    let pass = id + "_pass";
                                                    let passVal = obj["Pass"];
                                                    subObjValues.push({ [pass]: passVal });
                                                }
                                                if (obj.hasOwnProperty("Fail")) {
                                                    let fail = id + "_fail";
                                                    let failVal = obj["Fail"];
                                                    subObjValues.push({ [fail]: failVal });
                                                }
                                                if (obj.hasOwnProperty("Audit")) {
                                                    let audit = id + "_audit";
                                                    let auditVal = obj["Audit"];
                                                    subObjValues.push({ [audit]: auditVal });
                                                }
                                                if (obj.hasOwnProperty("id")) {
                                                    let uuid = id + "_uuid";
                                                    let uuidVal = obj["id"];
                                                    subObjValues.push({ [uuid]: uuidVal });
                                                }


                                            }
                                            objValues.push(subObjValues);

                                        }


                                    }


                                }

                                catch (err) {

                                    reject({ code: 400, body: { 'error': 'files include invalid JSON(s)' } });
                                    throw err;

                                }


                                return objValues;
                            });

                            processList.push(promise);
                        })
                        Promise.all(processList).then(function (arrayOfStrings: any) {
                            var counter = 0;
                            for (let i of arrayOfStrings) {
                                if (i == undefined) {
                                    counter++
                                }
                            }
                            if (counter == arrayOfStrings.length) {
                                reject({ code: 400, body: { 'error': 'No useful data provided' } });
                            }


                            var combine = new Array();
                            if (arrayOfStrings.length > 2) {
                                for (let i of arrayOfStrings) {
                                    for (let j of i) {
                                        if (typeof j != "undefined") {
                                            combine.push(j);
                                        }
                                    }
                                }
                            } else {
                                for (let i of arrayOfStrings) {
                                    if (typeof i != "undefined") {
                                        for (let j of i) {
                                            combine.push(j);
                                        }
                                    }
                                }
                            }



                            fs.writeFileSync(dataPath + id, JSON.stringify(combine));
                            fulfill({ code: 204, body: {} });
                        })
                            .catch(function (err: any) {
                                reject({ code: 400, body: { 'error': err.toString('utf8') } });
                            })
                    })
                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    })





            }

        });
    }

    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            if (fs.existsSync(dataPath + id)) {
                // remove dataset associated with the id
                fs.unlink(dataPath + id, function (err: any) {
                    if (err) {
                        reject({ code: 404, body: { 'error': err.toString() } });
                    }
                    else {
                        fulfill({ code: 204, body: {} });
                    }
                })

            }
            else (reject({ code: 404, body: { 'error': 'The id does not exist' } }));
        });
    }



    performQuery(query: QueryRequest): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {

            let finalProduct; // THIS IS THE FINAL JSON AFTER PARSING EVERYTHING

            //check if query is valid
            if (query == null || !('WHERE' in query) || !('OPTIONS' in query) || typeof query == 'undefined' || Object.keys(query).length != 2) {
                reject({ code: 400, body: { 'error': 'The query is invalid' } });
            }

            try { JSON.parse(JSON.stringify(query)) }
            catch (err) { reject({ code: 400, body: { 'error': 'The query is not a valid JSON' } }); }

            // check if the dataset exists, !!!this is only of D1!!!
            if (!fs.existsSync(dataPath + 'courses')) {
                reject({ code: 424, body: { 'missing': ['courses'] } });
            }


            // retrive cached data
            let id = 'courses';
            var currentData;

            var thisData = fs.readFileSync(dataPath + id, "utf8");
            try {
                currentData = JSON.parse(thisData);
            }
            catch (err) {
                reject({ code: 400, body: { 'error': 'cannot retrive data from disk' } });
                throw err;
            }

            //***************************** STARTING HERE WE ASSUME WE HAVE ALL THE DATA ******************************** //


            function isValid(element: boolean, index: any, array: any) {
                return element == true;
            }

            try {

                isValidKeys = [];
                mcompFiltered = [];
                scompFiltered = [];
                negFiltered = [];
                allTheData = [];
                isAnd1 = false;
                isOr1 = false;
                logicCount = -1;
                logicArr = []

                if (Object.keys(query.WHERE).length == 1) {
                    for (let filter of Object.keys(query.WHERE)) {
                        whereParser(query.WHERE, filter, currentData);
                    }

                    if (isValidKeys.every(isValid) == false) {
                        reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } })
                    }

                }
                else (reject({ code: 400, body: { 'error': 'Invalid WHERE' } }));
            }
            catch (err) {
                reject({ code: 400, body: { 'error': err.toString() } });
                throw err;
            }



            if (Object.keys(query.OPTIONS).length == 3) {
                finalProduct = optionParser(allTheData, query.OPTIONS);
                if (finalProduct == null) {
                    reject({ code: 400, body: { "Error": "Invalid OPTIONS" } });
                }
                fulfill({ code: 200, body: finalProduct.valueOf() });

                // IF SOMETHING WAS MISSING SUCH AS THE KEYS NEEDED INSIDE THE OPTIONS.
            } else {
                reject({ code: 400, body: { "Error": "Invalid OPTIONS" } });
            }




            //cached.file('courses'). ... ; get the data here somehow




        });

        function whereParser(where: any, filter: string, currentData: any) {


            if (filter == 'AND' || filter == 'OR') {
                logicArr.push(filter);
                logicCount++;

                if (where[filter].length == 0) {
                    isValidKeys.push(false);
                    return;
                }
                for (let subFilter of where[filter]) {

                    for (let subSubfilter of Object.keys(subFilter)) {

                        whereParser(subFilter, subSubfilter, currentData);
                        while (logicCount > 0) {
                            let thisLogic = logicArr[logicCount];
                            if (thisLogic == 'OR') {
                                for (let obj of mcompFiltered) {
                                    if (!allTheData.includes(obj)) {
                                        allTheData.push(obj);
                                    }
                                }
                                for (let obj of scompFiltered) {
                                    if (!allTheData.includes(obj)) {
                                        allTheData.push(obj);
                                    }
                                }
                                for (let obj of negFiltered) {
                                    if (!allTheData.includes(obj)) {
                                        allTheData.push(obj);
                                    }
                                }
                            }
                            else if (thisLogic == 'AND') {
                                for (let obj of mcompFiltered) {
                                    if (scompFiltered.includes(obj) && negFiltered.includes(obj)) {
                                        allTheData.push(obj);
                                    }
                                }
                            }
                            logicCount--;
                            mcompFiltered = [];
                            scompFiltered = [];
                            negFiltered = [];

                        }
                    }
                }
            }

            else if (filter == 'LT' || filter == 'GT' || filter == 'EQ') {
                let mcompKeys = Object.keys(where[filter]);
                if (Object.keys(where[filter]).length != 1) {
                    isValidKeys.push(false);
                    return;
                }



                for (let key of mcompKeys) {
                    if (mcompLibrary.includes(key)) {
                        if (typeof where[filter][key] != 'number') {
                            isValidKeys.push(false);
                            return;
                        }
                        else {
                            for (let obj of currentData) {
                                for (let subObj of obj) {
                                    for (let val of Object.keys(subObj)) {
                                        if (val == key) {
                                            if (filter == 'LT') {
                                                if (subObj[val] < where[filter][key]) {
                                                    mcompFiltered.push(obj)
                                                }
                                            }
                                            if (filter == 'GT') {
                                                if (subObj[val] > where[filter][key]) {
                                                    mcompFiltered.push(obj)
                                                }
                                            }
                                            if (filter == 'EQ') {
                                                if (subObj[val] == where[filter][key]) {
                                                    mcompFiltered.push(obj)
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }

                    }
                    else {
                        isValidKeys.push(false);
                        return;
                    }
                }


            }


            else if (filter == 'IS') {
                let isKey = Object.keys(where[filter]);
                if (Object.keys(where[filter]).length != 1) {
                    isValidKeys.push(false);
                    return;
                }

                for (let key of isKey) {
                    if (stringLibrary.includes(key)) {
                        if (typeof where[filter][key] != 'string') {
                            isValidKeys.push(false);
                            return;
                        }
                        else {
                            for (let obj of currentData) {
                                for (let subObj of obj)
                                    for (let val of Object.keys(subObj)) {
                                        if (val == key) {
                                            var hello = subObj[val];
                                            var hello2 = where[filter][key];
                                            if (subObj[val] == where[filter][key]) {
                                                scompFiltered.push(obj);
                                            }
                                            else {
                                                isValidKeys.push(false);
                                                return;
                                            }

                                        }
                                    }
                            }
                        }
                    } else {
                        isValidKeys.push(false);
                        return;
                    }
                }
            }

            else if (filter == 'NOT') {
                let notKeys = Object.keys(where[filter]);
                if(notKeys.length != 1){
                    isValidKeys.push(false);
                    return;
                }
                
                for (let n of notKeys) {
                    for (let subFilter of where[filter]) {
                        whereParser(where[filter], n, currentData);
                        
                        for(let obj of currentData){
                            let subnegFiltered = new Array();
                            if(!mcompFiltered.includes(obj) && !scompFiltered.includes(obj)){
                                subnegFiltered.push(obj);
                            }
                            negFiltered.concat(subnegFiltered);
                        }
                    }
                }
            }

            if (logicCount == 0) {
                if (logicArr[logicCount] == 'OR') {
                    for (let obj of mcompFiltered) {
                        if (!allTheData.includes(obj)) {
                            allTheData.push(obj);
                        }
                    }
                    for (let obj of scompFiltered) {
                        if (!allTheData.includes(obj)) {
                            allTheData.push(obj);
                        }
                    }
                    for (let obj of negFiltered) {
                        if (!allTheData.includes(obj)) {
                            allTheData.push(obj);
                        }
                    }
                }
                else if (logicArr[logicCount] == 'AND') {
                    for (let obj of mcompFiltered) {
                        if (scompFiltered.includes(obj) && negFiltered.includes(obj)) {
                            allTheData.push(obj);
                        }
                    }
                }
            }

            else if (logicCount == -1) {
                allTheData = mcompFiltered.concat(scompFiltered).concat(negFiltered);
            }



        }


        // MCOMPFILTERED FOR NOW BECAUSE WE WANT TO MAKE SURE THE FUNCTIONALITY WORKS.
        // MCOMPFILTER = TOTALFILTERED AFTER

        function optionParser(mcompFiltered: any[], optionBody: any): any {
            if (!("COLUMNS" in optionBody) || !("ORDER" in optionBody) || !("FORM" in optionBody)) {
                return null;
            }


            // dealing with columns
            let colVal: any = [];
            for (let val of optionBody["COLUMNS"]) {
                colVal.push(val);
            }




            //check if order is valid 
            if (typeof optionBody["ORDER"] != 'string' && !allLibrary.includes(optionBody["ORDER"])) {

                return null;
            }
            else {
                var s = optionBody["ORDER"];
                if (!colVal.includes(optionBody["ORDER"])) {
                    return null;
                }
                else {
                    orderVal = optionBody["ORDER"];
                }
            }


            var colData = new Array();

            for (let key of mcompFiltered) {
                var eachData = new Array();
                for (let subKey of key) {

                    for (let subSubkey of Object.keys(subKey)) {

                        for (let val of colVal) {
                            if (val == subSubkey) {
                                eachData.push({ [val]: subKey[subSubkey] })
                            }
                        }

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
            // END OF ORDERING

            var result = {
                render: optionBody["FORM"],
                result: processed
            };
            return result;
        }






    }


    // helper function to parse WHERE in query

}
