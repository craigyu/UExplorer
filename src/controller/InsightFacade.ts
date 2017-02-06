/**
 * This is the main programmatic entry point for the project.
 */
import { IInsightFacade, InsightResponse, QueryRequest } from "./IInsightFacade";

import Log from "../Util";

var JSZip = require("jszip");

//var zip = new JSZip();
var fs = require("fs");


if (!fs.existsSync("./cachedDatasets")) {
    fs.mkdirSync('./cachedDatasets/');
}

var dataPath = './cachedDatasets/';
var whereFilters = new Array();
var mToFilter = new Array();
var sToFilter = new Array();
var negToFilter = new Array();
var isValidKeys: boolean[] = [];




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

                                        var objValues: any[] = []
                                        for (let obj of parsed.result) {
                                            if (Object.keys(obj) != null && Object.keys(obj) != undefined) {

                                                let subObjValues: any[] = [];
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

                                                objValues.push(subObjValues);
                                            }
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
                            for (let i of arrayOfStrings) {
                                if (typeof (i) != "undefined") {
                                    fs.writeFileSync(dataPath + id, JSON.stringify(i));
                                }
                            }
                            fulfill({ code: 201, body: {} });
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
                                        var objValues: any[] = []
                                        for (let obj of parsed.result) {
                                            if (Object.keys(obj) != null && Object.keys(obj) != undefined) {
                                                let subObjValues: any[] = [];
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


                                                objValues.push(subObjValues);
                                            }
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
                            for (let i of arrayOfStrings) {
                                if (typeof (i) != "undefined") {
                                    fs.writeFileSync(dataPath + id, JSON.stringify(i));
                                }
                            }
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

            //check if query is valid
            if (query == null || !('WHERE' in query) || !('OPTIONS' in query) || typeof query == 'undefined' || Object.keys(query).length != 2) {
                reject({ code: 400, body: { 'error': 'The query is invalid' } });
            }

            try { JSON.parse(JSON.stringify(query)) }
            catch (err) { reject({ code: 400, body: { 'error': 'The query is not a valid JSON' } }); }

            // check if the dataset exists, !!!this is only of D1!!!
            if (fs.existsSync(dataPath + 'courses') == false) {
                reject({ code: 424, body: { 'missing': ['courses'] } });
            }


            // retrive cached data
            let id = 'courses';
            var currentData = fs.readFile(dataPath + id, "string", function (err: any, data: any) {
                if (err) {
                    reject({ code: 400, body: { 'error': 'cannot retrive data from disk' } });
                    throw err
                }
                else return data;

            });

            function isValid(element: boolean, index: any, array: any) {
                return element == true;
            }

            try {

                if (Object.keys(query.WHERE).length > 0) {
                    for (let filter of Object.keys(query.WHERE)) {
                        this.whereParser(query.WHERE, filter);
                    }

                    if (isValidKeys.every(isValid) == false) {
                        reject({ code: 400, body: { 'error': 'invalid keys for logic comparactor' } })
                    }

                }
                else (reject({ code: 400, body: { 'error': 'Nothing in WHERE' } }));
            }
            catch (err) {
                reject({ code: 400, body: { 'error': err.toString() } });
                throw err;
            }


            try {
                if (Object.keys(query.OPTIONS).length > 0) {
                    //parse Orders here
                }
            }
            catch (err) {
                reject({ code: 400, body: { 'error': 'Nothing in OPTIONS' } });
                throw err;
            }



            //cached.file('courses'). ... ; get the data here somehow




        });
    }





    // helper function to parse WHERE in query
    private whereParser(where: any, filter: string) {

        var library = new Array('courses_dept', 'courses_id', 'courses_avg', 'courses_instructor', 'courses_title', 'courses_pass',
            'courses_fail', 'courses_audit', 'courses_uuid');
        var numberVal;


        if (filter == 'AND' || filter == 'OR') {
            for (let subFilter of where[filter]) {
                for (let subSubfilter of where[filter][subFilter]) {
                    this.whereParser(where[filter][subFilter], subSubfilter);
                }
            }
        }
        else if (filter == 'LT' || filter == 'GT' || filter == 'EQ') {
            let mcompKeys = Object.keys(where[filter]);
            if (Object.keys(where[filter]).length != 1) {
                isValidKeys.push(false);
                return;
            }



            for (let key in mcompKeys) {
                if (library.includes(key)) {
                    if (typeof where[filter][key] != 'number') {
                        isValidKeys.push(false);
                        return;
                    }
                    else{

                    }

                }
                else {
                    isValidKeys.push(false);
                    return;
                }
            }


        }
        else if (filter == 'IS') {
            whereFilters.push(filter);
            let itemToFilter = JSON.parse(JSON.stringify(where[filter]));
            sToFilter.push(itemToFilter);
        }
        else if (filter == 'NOT') {
            whereFilters.push(filter);
            let itemToFilter = JSON.parse(JSON.stringify(where[filter]));
            negToFilter.push(itemToFilter);
        }




    }

}
