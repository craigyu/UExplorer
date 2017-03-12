/**
 * This is the main programmatic entry point for the project.
 */
import { IInsightFacade, InsightResponse, QueryRequest } from "./IInsightFacade";

import Log from "../Util";
import { error } from "util";
import QueryController from "./QueryController";
var JSZip = require("jszip");
//var zip = new JSZip();
var fs = require("fs");
if (!fs.existsSync("./cachedDatasets/")) {
    fs.mkdirSync('./cachedDatasets/');
}
var dataPath = './cachedDatasets/';
var toProcess = new Array();
var allTheData = new Array();
var currentData: any;


export default class InsightFacade implements IInsightFacade {

    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }

    addDataset(id: string, content: string): Promise<InsightResponse> {
        var theTable: any;
        var hasTable = false;
        return new Promise(function (fulfill, reject) {
            var options = { base64: true };
            if (id == '') reject({ code: 400, body: { "error": "No id was provided." } });
            var cached = new JSZip();
            if (id == "courses") {
                let sucCode = 0;
                if (fs.existsSync(dataPath + id)) {
                    sucCode = 201;
                    fs.unlinkSync(dataPath + id);
                }
                else {
                    sucCode = 204
                }

                cached.loadAsync(content, options)
                    .then(function (files: any) {
                        var processList: Promise<any>[] = [];
                        files.remove("__MACOSX");

                        if (id == "courses") {
                            files.forEach(function (relativePath: any, file: any) {
                                if (relativePath != id + "/") {
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
                                                        "courses_pass": 0,
                                                        "courses_year": 0
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
                            fulfill({ code: sucCode, body: {} });
                        })
                            .catch(function (err: any) {
                                reject({ code: 400, body: { 'error': err.toString('utf8') } });
                            })
                    })
                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    })
            }

            else if (id == "rooms") {
                let zipFiles: any;
                let http = require("parse5");
                let sucCode = 0;
                if (fs.existsSync(dataPath + id)) {
                    sucCode = 201;
                    fs.unlinkSync(dataPath + id);
                }
                else {
                    sucCode = 204
                }

                cached.loadAsync(content, options)
                    .then(function (files: any) {
                        zipFiles = files;
                        return files.file("index.htm").async("string");
                    })
                    .then(function (indexFile: any) {
                        return http.parseFragment(indexFile);
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
                            reject({ code: 400, body: { 'error': "no table found" } });
                        }
                    })
                    .then(function (content: any) {
                        var processList: Promise<any>[] = [];
                        zipFiles.folder("campus/discover/buildings-and-classrooms").remove(".DS_Store");

                        zipFiles.folder("campus/discover/buildings-and-classrooms").forEach(function (relativePath: any, file: any) {


                            let promise = createDataset(file, content, relativePath);
                            if (promise != {}) {
                                processList.push(promise);
                            }
                        });
                        Promise.all(processList).then(function (arrayOfStrings: any) {
                            if (arrayOfStrings.length == 0) {
                                reject({ code: 400, body: { 'error': 'no data' } });
                            }
                            let arLen = arrayOfStrings.length;
                            let newAr = new Array();
                            for (let i = 0; i < arLen; i++) {
                                newAr = newAr.concat(arrayOfStrings[i]);
                            }
                            newAr = newAr.filter(function (n: any) {
                                return Object.keys(n).length > 0;
                            });
                            fs.writeFileSync(dataPath + id, JSON.stringify(newAr));
                            fulfill({ code: sucCode, body: {} });
                        })
                            .catch(function (err: any) {
                                console.log(err);
                                reject({ code: 400, body: { 'error': err.toString('utf8') } });
                            })
                    })

                    .catch(function (err: any) {
                        console.log(err);
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    })
            }
            else {
                reject({ code: 400, body: { 'error': 'the id is not valid' } });
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
                let emptyB = {};

                if (content.includes(relativePath)) {
                    file.async("string")
                        .then(function (content: any) {
                            return test.parseFragment(content);
                        })
                        .then(function (parsedHTML: any) {
                            // parsedHTML is the whole HTML file (individual buildings)
                            var nodeNeeded: any;
                            var hasNode = false;
                            var theTable: any
                            var hasTable = false;
                            var returnData = [];

                            if (findTable(parsedHTML) && findBuildingInfo(parsedHTML)) {
                                returnData.push(theTable);
                                returnData.push(nodeNeeded);
                                return returnData;
                            } else {
                                fulfill(emptyB);
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

                        })
                        .then(function (hasInfo: any) {
                            let objArr: Promise<any>[] = [];
                            if (typeof (hasInfo) == "undefined") {
                                fulfill(emptyB);
                            }
                            else {

                                objArr.push(getBuildingInfo(file, hasInfo[1], hasInfo[0], relativePath));
                                Promise.all(objArr).then(function (arr: any) {
                                    if (arr[0] != [] && arr[0] != {}) {
                                        fulfill(arr[0]);
                                    }
                                    else fulfill({});
                                })
                                    .catch(function (err: any) {
                                        console.log(err);

                                    })

                            }
                        })
                        .catch(function (err: any) {
                            fulfill(emptyB);
                        })
                }
                else {
                    fulfill(emptyB);
                }
            })

        }

        function getBuildingInfo(file: any, parsedBuildingInfo: any, parsedRoomTable: any, shortname: any) {
            interface GeoResponse {
                lat?: number;
                lon?: number;
                error?: string;
            }
            let emptyB = {};

            let childLen = parsedRoomTable.childNodes.length;
            let allRooms = new Array();

            var buildingInfo = { "rooms_address": parsedBuildingInfo[3].childNodes[0].childNodes[0].value };

            for (let i = 1; i < childLen; i = i + 2) {
                var temp = { // represents one buildingInfo
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
            var objForLatLon: any;
            return objForLatLon = new Promise(function (fulfill: any, reject: any) {
                try {
                    http.get(requestToServer, function (res: any) {
                        if (res.statusCode != 200) {
                            fulfill(emptyB);
                        }
                        //parse the result to JSON
                        res.setEncoding('utf8');
                        let rowData = '';
                        res.on('data', (chunk: any) => rowData += chunk);
                        res.on('end', () => {
                            try {
                                let parseData: GeoResponse = JSON.parse(rowData);
                                //console.log(parseData);
                                if ('error' in parseData) {
                                    fulfill(emptyB);
                                } else {
                                    for (let obj of allRooms) {
                                        obj["rooms_lat"] = parseData["lat"];
                                        obj["rooms_lon"] = parseData["lon"];
                                    }
                                    fulfill(allRooms);
                                }
                            } catch (e) {
                                fulfill(emptyB);
                            }
                        })
                    }).on('error', function (e: any) {
                        fulfill(emptyB);
                    })
                }
                catch (err) {
                    fulfill(emptyB);
                }

            });
        }

    }


    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            if (fs.existsSync(dataPath + id)) {
                // remove dataset associated with the id
                fs.unlinkSync(dataPath + id);

                fulfill({ code: 204, body: {} });
            }
            else (reject({ code: 404, body: { 'error': 'The id does not exist' } }));
        });
    }


    performQuery(query: QueryRequest): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            var idAssure;
            let finalProduct; // THIS IS THE FINAL JSON AFTER PARSING EVERYTHING
            var qc = new QueryController();
            var apTerm, aKeys, gKeys, subAks, trimedGK = new Array();
            let trimedColn = new Array();
            //check if query is valid
            try {
                JSON.parse(JSON.stringify(query))
            }
            catch (err) {
                reject({ code: 400, body: { 'error': 'The query is not a valid JSON' } });
            }
            /**********   check in depth    **************/
            if (query == null || !('WHERE' in query) || !('OPTIONS' in query) || typeof query == 'undefined' || Object.keys(query).length < 2) {
                reject({ code: 400, body: { 'error': 'The query is invalid' } });
            }
            else if (Object.keys(query).length > 2) {
                let transBody = query.TRANSFORMATIONS;
                if (Object.keys(query).length > 3) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                else if (!('TRANSFORMATIONS' in query)) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                else if (!Object.keys(transBody).includes('GROUP') || !Object.keys(transBody).includes('APPLY') || Object.keys(transBody).length != 2) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }

                let tKeys = qc.transTerms(transBody);

                if (tKeys[0] == false) {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }
                else {
                    gKeys = tKeys[0]; // group keys
                    aKeys = tKeys[1]; // apply keys
                    subAks = tKeys[2]; // apply token keys
                    apTerm = tKeys[3]; // apply terms e.g. {"MAX": "rooms_seats"}
                }
                let trimedColn = new Array();
                // Option[COLUMNS] validation 
                if (Object.keys(query.OPTIONS).length > 1) {
                    let opColn = query.OPTIONS['COLUMNS'];
                    for (let str of opColn) {
                        let underS = str.indexOf('_');
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
                            let trimStr = str.substr(0, underS);
                            trimedColn.push(trimStr);
                        }
                    }
                    for (let str of gKeys) {
                        let underS = str.indexOf('_');
                        let trimStr = str.substr(0, underS);
                        trimedColn.push(trimStr);
                        trimedGK.push(trimStr);

                    }
                    trimedColn = trimedColn.concat(subAks);
                    for (let i = 1; i < trimedColn.length; i++) {
                        if (trimedColn[0] != trimedColn[i]) {
                            reject({ code: 400, body: { 'error': 'The query is invalid' } });
                        }
                    }
                    let fileName: string = trimedColn[0];

                    if (!fs.existsSync(dataPath + fileName)) {
                        reject({ code: 424, body: { 'missing': [fileName] } });
                    }
                    else {
                        idAssure = fileName;
                        currentData = fs.readFileSync(dataPath + fileName, "utf8");
                        currentData = JSON.parse(currentData);
                    }
                } else {
                    reject({ code: 400, body: { 'error': 'The query is invalid' } });
                }

            }


            // helper for an arr callback, ignore
            function isValid(element: boolean, index: any, array: any) {
                return element == true;
            }
            /**
             * 1st Process WHERE 
             */
            try {
                qc.resetVars();
                if (Object.keys(query.WHERE).length == 1) {
                    let whereKeys = Object.keys(query.WHERE);
                    let filter = whereKeys[0];
                    qc.getKeys(query.WHERE, filter);
                    let allKeys = qc.returnKeys();
                    let keyLen = allKeys.length;
                    let isValidKeys = qc.getValidKeys();
                    if (isValidKeys.every(isValid) == false) {
                        reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } })
                    }
                    if ('TRANSFORMATIONS' in query) {
                        allKeys = allKeys.concat(subAks).concat(trimedGK);
                    }
                    let misID = new Array();
                    if (keyLen == 1) {
                        let name = allKeys[0];
                        if (!fs.existsSync(dataPath + name)) {
                            reject({ code: 424, body: { 'missing': allKeys } });
                        }
                        else {
                            idAssure = name;
                            currentData = fs.readFileSync(dataPath + name, "utf8");
                        }
                    }
                    else if (keyLen > 1) {
                        for (let i = 1; i < keyLen; i++) {
                            if (allKeys[0] != allKeys[i]) {
                                reject({ code: 400, body: { 'error': 'Invalid WHERE' } });
                            }
                        }
                        let name = allKeys[0];
                        if (!fs.existsSync(dataPath + name)) {
                            reject({ code: 424, body: { 'missing': [name] } });
                        }
                        else {
                            idAssure = name;
                            currentData = fs.readFileSync(dataPath + allKeys[0], "utf8");
                        }
                    }
                    else {
                        reject({ code: 400, body: { 'error': 'No keys were found' } });
                    }
                    isValidKeys = qc.getValidKeys();
                    if (isValidKeys.every(isValid) == false) {
                        reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } })
                    }

                    currentData = JSON.parse(currentData);
                    allTheData = [];
                    qc.resetVars();
                    for (let obj of currentData) {
                        qc.whereParser(query.WHERE, filter, obj);
                        isValidKeys = qc.getValidKeys();
                        if (isValidKeys.every(isValid) == false) {
                            reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } })
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
                else (reject({ code: 400, body: { 'error': 'Invalid WHERE' } }));
            }
            catch (err) {
                reject({ code: 400, body: { 'error': err.toString() } });
                throw err;
            }

            // 2nd: Process TRANSFORMATIONS if exists
            if (query.hasOwnProperty('TRANSFORMATIONS')) {
                let gBody = query.TRANSFORMATIONS['GROUP'];
                let result = new Array();
                result = qc.groupParser(gBody, allTheData);
                let aBody = query.TRANSFORMATIONS['APPLY'];
                let aLen = aBody.length;
                let rLen = result.length;
                if (aLen == 0) {
                    allTheData = [];
                    for (let i of result) {
                        allTheData.push(i.pop());
                    }
                }
                else {
                    allTheData = [];

                    let rLen = result.length;
                    while (result.length > 0) {
                        let obj = result.shift();
                        let term = new Array();
                        let keys = new Array();
                        term = term.concat(apTerm);
                        keys = keys.concat(aKeys);
                        let val = qc.applyParser(keys, obj, term);
                        if (val == false) {
                            reject({ code: 400, body: { 'error': "Malformed apply" } });
                        }
                        allTheData.push(val);
                    }

                }

            }


            // 3rd: process options
            if (Object.keys(query.OPTIONS).length > 1) {
                let hasTrans = false;
                if ('TRANSFORMATIONS' in query) {
                    hasTrans = true;
                }
                if (allTheData.length == 0) fulfill({
                    code: 200, body: {
                        render: 'TABLE',
                        result: []
                    }
                });
                finalProduct = qc.optionParser(allTheData, query.OPTIONS, idAssure, hasTrans);
                //              console.log(finalProduct);
                if (finalProduct == null) {
                    reject({ code: 400, body: { "Error": "Invalid OPTIONS" } });
                }

                 fulfill({ code: 200, body: finalProduct.valueOf() });

                // IF SOMETHING WAS MISSING SUCH AS THE KEYS NEEDED INSIDE THE OPTIONS.
            } else {
                reject({ code: 400, body: { "Error": "Invalid OPTIONS" } });
            }

        });
    }
}