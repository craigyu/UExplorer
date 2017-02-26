/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse, QueryRequest} from "./IInsightFacade";

import Log from "../Util";

var JSZip = require("jszip");

//var zip = new JSZip();
var fs = require("fs");


if (!fs.existsSync("./cachedDatasets/")) {
    fs.mkdirSync('./cachedDatasets/');
}

var dataPath = './cachedDatasets/';
var toProcess = new Array();
var allTheData = new Array();
var misID = new Array();
var isValidKeys: boolean[] = [];
var mcompLibrary = new Array('courses_avg', 'courses_pass', 'courses_fail', 'courses_audit');
var stringLibrary = new Array('courses_dept', 'courses_id', 'courses_instructor', 'courses_title', 'courses_uuid');
var allLibrary = new Array('courses_avg', 'courses_pass', 'courses_fail', 'courses_audit', 'courses_dept', 'courses_id',
    'courses_instructor', 'courses_title', 'courses_uuid');


export default class InsightFacade implements IInsightFacade {

    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }

    addDataset(id: string, content: string): Promise<InsightResponse> {
        var theTable: any;
        var hasTable = false;


        return new Promise(function (fulfill, reject) {
            var options = {base64: true};
            if (id == '') reject({code: 400, body: {"error": "No id was provided."}});
            //console.log("hiiiii");
            // id contains given id
            var cached = new JSZip();

            if (id == "courses") {

                if (fs.existsSync(dataPath + id)) {

                    fs.unlinkSync(dataPath + id);

                    cached.loadAsync(content, options)
                        .then(function (files: any) {
                            var processList: Promise<any>[] = [];


                            files.remove("__MACOSX");
                            if (id == "courses") {
                                files.forEach(function (relativePath: any, file: any) {
                                    //console.log(processList.length);
                                    //console.log(relativePath);
                                    if (relativePath != id + "/") {
                                        //console.log(processList.length);
                                        //console.log(relativePath);
                                        var promise = file.async("string").then(function (json: any) {
                                            try {

                                                var parsed = JSON.parse(json);
                                                if (typeof parsed != 'undefined' && parsed.hasOwnProperty('result')) {

                                                    var objValues: any[] = [];
                                                    for (let obj of parsed.result) {
                                                        let subObjValues = {
                                                            "courses_dept": "",
                                                            "courses_id": "",
                                                            "courses_instructor": "",
                                                            "courses_title": "",
                                                            "courses_uuid": "",
                                                            "courses_audit": 0,
                                                            "courses_avg": 0,
                                                            "courses_fail": 0,
                                                            "courses_pass": 0
                                                        };

                                                        if (Object.keys(obj) != null && Object.keys(obj) != undefined) {
                                                            if (obj.hasOwnProperty("Subject")) {
                                                                let dept = id + "_dept";
                                                                let deptVal = obj["Subject"];
                                                                subObjValues["courses_dept"] = deptVal;
                                                            }
                                                            if (obj.hasOwnProperty("Course")) {
                                                                let nameId = id + "_id";
                                                                let nameIdVal = obj["Course"];
                                                                subObjValues["courses_id"] = nameIdVal;
                                                            }
                                                            if (obj.hasOwnProperty("Avg")) {
                                                                let avg = id + "_avg";
                                                                let avgVal = obj["Avg"];
                                                                subObjValues["courses_avg"] = avgVal;
                                                            }
                                                            if (obj.hasOwnProperty("Professor")) {
                                                                let instr = id + "_instructor";
                                                                let instrVal = obj["Professor"];
                                                                subObjValues["courses_instructor"] = instrVal;
                                                            }
                                                            if (obj.hasOwnProperty("Title")) {
                                                                let title = id + "_title";
                                                                let titleVal = obj["Title"];
                                                                subObjValues["courses_title"] = titleVal;
                                                            }
                                                            if (obj.hasOwnProperty("Pass")) {
                                                                let pass = id + "_pass";
                                                                let passVal = obj["Pass"];
                                                                subObjValues["courses_pass"] = passVal;
                                                            }
                                                            if (obj.hasOwnProperty("Fail")) {
                                                                let fail = id + "_fail";
                                                                let failVal = obj["Fail"];
                                                                subObjValues["courses_fail"] = failVal;
                                                            }
                                                            if (obj.hasOwnProperty("Audit")) {
                                                                let audit = id + "_audit";
                                                                let auditVal = obj["Audit"];
                                                                subObjValues["courses_audit"] = auditVal;
                                                            }
                                                            if (obj.hasOwnProperty("id")) {
                                                                let uuid = id + "_uuid";
                                                                let uuidVal = obj["id"];
                                                                subObjValues["courses_uuid"] = uuidVal;
                                                            }


                                                        }
                                                        objValues.push(subObjValues);

                                                    }


                                                }

                                            }
                                            catch (err) {
                                                //console.log(err);

                                                return reject({
                                                    code: 400,
                                                    body: {'error': 'file include invalid JSON(s)'}
                                                });
                                                //throw err;

                                            }


                                            return objValues;
                                        });
                                        if (typeof promise != 'undefined') {
                                            processList.push(promise);
                                        }
                                    }
                                });
                            }

                            Promise.all(processList).then(function (arrayOfStrings: any) {
                                var counter = 0;
                                for (let i of arrayOfStrings) {
                                    if (i == undefined) {
                                        counter++
                                    }
                                }
                                if (counter == arrayOfStrings.length) {
                                    reject({code: 400, body: {'error': 'No useful data provided'}});
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
                                fulfill({code: 201, body: {}});
                            })
                                .catch(function (err: any) {
                                    reject({code: 400, body: {'error': err.toString('utf8')}});
                                })
                        })
                        .catch(function (err: any) {
                            reject({code: 400, body: {'error': err.toString('utf8')}});
                        })


                }


                else {

                    cached.loadAsync(content, options)
                        .then(function (files: any) {
                            var processList: Promise<any>[] = [];


                            files.remove("__MACOSX");
                            files.forEach(function (relativePath: any, file: any) {
                                //console.log(processList.length);
                                //console.log(relativePath);
                                if (relativePath != id + "/") {
                                    //console.log(processList.length);
                                    //console.log(relativePath);
                                    var promise = file.async("string").then(function (json: any) {
                                        try {

                                            var parsed = JSON.parse(json);
                                            if (typeof parsed != 'undefined' && parsed.hasOwnProperty('result')) {
                                                var objValues: any[] = [];
                                                for (let obj of parsed.result) {
                                                    let subObjValues = {
                                                        "courses_dept": "",
                                                        "courses_id": "",
                                                        "courses_instructor": "",
                                                        "courses_title": "",
                                                        "courses_uuid": "",
                                                        "courses_audit": 0,
                                                        "courses_avg": 0,
                                                        "courses_fail": 0,
                                                        "courses_pass": 0
                                                    };

                                                    if (Object.keys(obj) != null && Object.keys(obj) != undefined) {
                                                        if (obj.hasOwnProperty("Subject")) {
                                                            let dept = id + "_dept";
                                                            let deptVal = obj["Subject"];
                                                            subObjValues["courses_dept"] = deptVal;
                                                        }
                                                        if (obj.hasOwnProperty("Course")) {
                                                            let nameId = id + "_id";
                                                            let nameIdVal = obj["Course"];
                                                            subObjValues["courses_id"] = nameIdVal;
                                                        }
                                                        if (obj.hasOwnProperty("Avg")) {
                                                            let avg = id + "_avg";
                                                            let avgVal = obj["Avg"];
                                                            subObjValues["courses_avg"] = avgVal;
                                                        }
                                                        if (obj.hasOwnProperty("Professor")) {
                                                            let instr = id + "_instructor";
                                                            let instrVal = obj["Professor"];
                                                            subObjValues["courses_instructor"] = instrVal;
                                                        }
                                                        if (obj.hasOwnProperty("Title")) {
                                                            let title = id + "_title";
                                                            let titleVal = obj["Title"];
                                                            subObjValues["courses_title"] = titleVal;
                                                        }
                                                        if (obj.hasOwnProperty("Pass")) {
                                                            let pass = id + "_pass";
                                                            let passVal = obj["Pass"];
                                                            subObjValues["courses_pass"] = passVal;
                                                        }
                                                        if (obj.hasOwnProperty("Fail")) {
                                                            let fail = id + "_fail";
                                                            let failVal = obj["Fail"];
                                                            subObjValues["courses_fail"] = failVal;
                                                        }
                                                        if (obj.hasOwnProperty("Audit")) {
                                                            let audit = id + "_audit";
                                                            let auditVal = obj["Audit"];
                                                            subObjValues["courses_audit"] = auditVal;
                                                        }
                                                        if (obj.hasOwnProperty("id")) {
                                                            let uuid = id + "_uuid";
                                                            let uuidVal = obj["id"];
                                                            subObjValues["courses_uuid"] = uuidVal;
                                                        }


                                                    }
                                                    objValues.push(subObjValues);

                                                }


                                            }

                                        }
                                        catch (err) {
                                            //console.log(err);

                                            return reject({code: 400, body: {'error': 'file include invalid JSON(s)'}});
                                            //throw err;

                                        }


                                        return objValues;
                                    });
                                    if (typeof promise != 'undefined') {
                                        processList.push(promise);
                                    }
                                }
                            });


                            Promise.all(processList).then(function (arrayOfStrings: any) {
                                var counter = 0;
                                for (let i of arrayOfStrings) {
                                    if (i == undefined) {
                                        counter++
                                    }
                                }
                                if (counter == arrayOfStrings.length) {
                                    reject({code: 400, body: {'error': 'No useful data provided'}});
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
                                fulfill({code: 204, body: {}});
                            })
                                .catch(function (err: any) {
                                    reject({code: 400, body: {'error': err.toString('utf8')}});
                                })
                        })
                        .catch(function (err: any) {
                            reject({code: 400, body: {'error': err.toString('utf8')}});
                        })


                }
            }

            else if (id == "rooms") {
                let processList: any = [];
                let zipFiles: any;
                let test = require("parse5");


                cached.loadAsync(content, options)
                    .then(function (files: any) {
                        zipFiles = files;
                        return files.file("index.htm").async("string");
                    })
                    .then(function (indexFile: any) {
                        return test.parseFragment(indexFile);
                    })
                    .then(function (parsedHTML: any) {
                        return findTable(parsedHTML);
                    })
                    .then(function (tableFound: any) {
                        if (tableFound) {
                            let arrayOfShortBuilding = [];
                            for (let cI of theTable.childNodes) {
                                if (cI.nodeName == "tr") {
                                    // a bunch of checks to make sure its actually the building acronym
                                    for (let inTd of cI.childNodes) {
                                        if (inTd.attrs && inTd.attrs.length == 1
                                            && inTd.attrs[0].name == "class"
                                            && inTd.attrs[0].value == "views-field views-field-field-building-code") {

                                            let value = inTd.childNodes[0].value.trim();

                                            arrayOfShortBuilding.push(value);
                                        }
                                    }
                                }
                            }
                            return arrayOfShortBuilding;
                        } else {
                            reject({code: 400, body: {'error': "no table found"}});
                        }
                    })
                    .then(function (content: any) {
                        zipFiles.folder("campus/discover/buildings-and-classrooms").forEach(function (relativePath: any, file: any) {
                            var promise = createDataset(file, content, relativePath);
                            processList.push(promise);

                        })
                    })
                    .catch(function (err: any) {
                        reject({code: 400, body: {'error': err.toString('utf8')}});
                    });

            }

        });


        // finding the TABLE that has all the names
        // uses recursion to find table
        function findTable(node: any): boolean {
            for (let cI in node.childNodes) {
                if (node.childNodes[cI].nodeName == "tbody") {
                    theTable = node.childNodes[cI];
                    hasTable = true;
                    break;
                }
                else {
                    findTable(node.childNodes[cI])
                }
            }
            return hasTable;
        }


        // needed to create the entire dataset
        // File is an individual file in the rooms folder
        // content is the acronym names to retrieve data
        // if the file is not in our content, will fulfill with empty array, handle in promise.all
        // else it should fulfill with an array of my data
        function createDataset(file: any, content: string[], relativePath: string): Promise<any> {
            return new Promise(function (fulfill: any, reject: any) {
                let test = require("parse5");

                if (content.includes(relativePath)) {
                    file.async("string")
                        .then(function (content: any) {
                            return test.parseFragment(content);
                        })
                        .then(function (parsedHTML: any) {
                            // get fullname of building
                            var nodeNeeded: any;
                            var hasNode = false;

                            if (findBuildingInfo(parsedHTML)) {
                                return nodeNeeded;
                            } else {
                                reject({code: 400, body: {'error': "No Building Info found"}});
                            }

                            function findBuildingInfo(node: any): boolean {
                                for (let cI in node.childNodes) {
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
                        })
                        .then(function (hasInfo: any) {
                            if (typeof(hasInfo) == "undefined") {
                                reject({code: 400, body: {'error': "Cannot find building info"}});
                            }
                            getBuildingInfo(file, hasInfo);

                        })
                        .catch(function (err: any) {
                            reject({code: 400, body: {'error': err.toString('utf8')}});
                        })
                } else {
                    fulfill([]);
                }

            })

        }

        function getBuildingInfo(file: any, parsedBuildingInfo: any) {
            var buildingInfo = { // represents one buildingInfo
                "rooms_fullname": "",
                "rooms_shortname": "",
                "rooms_number": "",
                "rooms_name": "",
                "rooms_address": "",
                "rooms_lat": 0,
                "rooms_lon": 0,
                "rooms_seats": 0,
                "rooms_type": "",
                "rooms_furniture": "",
                "rooms_href": ""
            };
            // getting full name
            buildingInfo["rooms_fullname"] = (parsedBuildingInfo[1].childNodes[0].childNodes[0].value);
            //getting address
            //  buildingInfo["room_address"] = (parsedBuildingInfo[3].childNodes[0].childNodes[0].value);
            var linkForLatLon = parsedBuildingInfo[7].childNodes[0].childNodes[0].attrs[0].value;

        }

    }


    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            if (fs.existsSync(dataPath + id)) {
                // remove dataset associated with the id
                fs.unlinkSync(dataPath + id)

                fulfill({code: 204, body: {}});
            }
            else (reject({code: 404, body: {'error': 'The id does not exist'}}));
        });
    }


    performQuery(query: QueryRequest): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {

            let finalProduct; // THIS IS THE FINAL JSON AFTER PARSING EVERYTHING

            //check if query is valid
            if (query == null || !('WHERE' in query) || !('OPTIONS' in query) || typeof query == 'undefined' || Object.keys(query).length != 2) {
                reject({code: 400, body: {'error': 'The query is invalid'}});
            }

            try {
                JSON.parse(JSON.stringify(query))
            }
            catch (err) {
                reject({code: 400, body: {'error': 'The query is not a valid JSON'}});
            }

            // check if the dataset exists, !!!this is only of D1!!!
            // if (!fs.existsSync(dataPath + 'courses')) {
            //     reject({ code: 424, body: { 'missing': ['courses'] } });
            // }


            // retrive cached data
            let id = 'courses';
            var currentData;

            var thisData = fs.readFileSync(dataPath + id, "utf8");
            try {
                currentData = JSON.parse(thisData);
            }
            catch (err) {
                reject({code: 400, body: {'error': 'cannot retrive data from disk'}});
                throw err;
            }

            //***************************** STARTING HERE WE ASSUME WE HAVE ALL THE DATA ******************************** //


            function isValid(element: boolean, index: any, array: any) {
                return element == true;
            }

            try {

                isValidKeys = [];
                toProcess = [];
                misID = [];
                allTheData = [];


                if (Object.keys(query.WHERE).length == 1) {
                    for (let filter of Object.keys(query.WHERE)) {
                        whereParser(query.WHERE, filter, currentData);
                    }

                    if (isValidKeys.every(isValid) == false) {
                        reject({code: 400, body: {'error': 'invalid keys for logic comparactor'}})
                    }
                    if (misID.length != 0) {
                        reject({code: 424, body: {'missing': misID}});
                    }
                    allTheData = toProcess[0];
                }
                else (reject({code: 400, body: {'error': 'Invalid WHERE'}}));
            }
            catch (err) {
                reject({code: 400, body: {'error': err.toString()}});
                throw err;
            }


            if (Object.keys(query.OPTIONS).length > 1) {
                finalProduct = optionParser(allTheData, query.OPTIONS);
                if (finalProduct == null) {
                    reject({code: 400, body: {"Error": "Invalid OPTIONS"}});
                }
                fulfill({code: 200, body: finalProduct.valueOf()});

                // IF SOMETHING WAS MISSING SUCH AS THE KEYS NEEDED INSIDE THE OPTIONS.
            } else {
                reject({code: 400, body: {"Error": "Invalid OPTIONS"}});
            }


            //cached.file('courses'). ... ; get the data here somehow


        });

        function whereParser(where: any, filter: string, currentData: any) {

            if (filter == 'AND' || filter == 'OR') {
                if (where[filter].length < 2) {
                    isValidKeys.push(false);
                    return;
                }
                let subLen = Object.keys(where[filter]).length;
                for (let subFilter of where[filter]) {
                    for (let subSubfilter of Object.keys(subFilter)) {
                        whereParser(subFilter, subSubfilter, currentData);
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

                for (let key of mcompKeys) {
                    let n = key.indexOf("_");
                    let fileName = key.substr(0, n);
                    if (!fs.existsSync(dataPath + fileName)) {
                        misID.push(fileName);
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
            }


            else if (filter == 'IS') {
                let isKey = Object.keys(where[filter]);
                let waitList = new Array();
                if (Object.keys(where[filter]).length != 1) {
                    isValidKeys.push(false);
                    return;
                }

                for (let key of isKey) {
                    let n = key.indexOf("_");
                    let fileName = key.substr(0, n);
                    if (!fs.existsSync(dataPath + fileName)) {
                        misID.push(fileName);
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
            }

            else if (filter == 'NOT') {
                let notKeys = Object.keys(where[filter]);
                if (notKeys.length != 1) {
                    isValidKeys.push(false);
                    return;
                }
                let waitList = new Array();
                for (let subFilter of notKeys) {
                    whereParser(where[filter], subFilter, currentData);
                }
                let n = toProcess.pop();
                waitList = currentData.filter(function (x: any) {
                    return n.indexOf(x) < 0
                });
                toProcess.push(waitList);
            }


        }


        // MCOMPFILTERED FOR NOW BECAUSE WE WANT TO MAKE SURE THE FUNCTIONALITY WORKS.
        // MCOMPFILTER = TOTALFILTERED AFTER

        function optionParser(mcompFiltered: any[], optionBody: any): any {
            if (!("COLUMNS" in optionBody) || !("FORM" in optionBody)) {
                return null;
            }
            // dealing with columns
            let colVal: any = [];
            for (let val of optionBody["COLUMNS"]) {
                colVal.push(val);
            }

            if (optionBody["FORM"] != "TABLE") {
                return null;
            }
            //check if order is valid
            var orderVal: string;
            if (optionBody.hasOwnProperty("ORDER")) {
                if (typeof optionBody["ORDER"] != 'string' && !allLibrary.includes(optionBody["ORDER"])) {

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
                        eachData.push({[val]: obj[val]})
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


    // helper function to parse WHERE in query

}