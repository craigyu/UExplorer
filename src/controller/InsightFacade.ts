/**
 * This is the main programmatic entry point for the project.
 */
import { IInsightFacade, InsightResponse, QueryRequest } from "./IInsightFacade";

import Log from "../Util";

var JSZip = require("jszip");
var ids = new Array();
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

            if (ids.includes(id)) {

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
                                }
                                catch (err) {
                                    reject({ code: 400, body: { 'error': 'files include invalid JSON(s)' } });
                                    throw err;

                                }

                                return parsed;
                            });
                            processList.push(promise);
                        })

                        Promise.all(processList).then(function (arrayOfStrings: any) {
                            fs.writeFileSync(dataPath + id, JSON.stringify(arrayOfStrings));
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
                ids.push(id);
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
                                        let objValues:any[] = []
                                        for (let obj of parsed.result) {
                                            if(obj.hasOwnProperty("Subject")) {
                                                let name = id + "_dept";
                                                objValues.push({name: obj["Subject"]});
                                            }
                                            else {
                                                console.log("Hello");
                                            }
                                        } 
                                    }
                                }
                                catch (err) {
                                    reject({ code: 400, body: { 'error': 'files include invalid JSON(s)' } });
                                    throw err;

                                }

                                return parsed;
                            });

                            processList.push(promise);
                        })
                        Promise.all(processList).then(function (arrayOfStrings: any) {
                            fs.writeFileSync(dataPath + id, arrayOfStrings);
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

        });



    }

    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            if (ids.includes(id)) {
                // remove dataset associated with the id
                fs.unlinkSync(dataPath + id);
                for (var i = ids.length - 1; i--;) {            // delete the id from ids
                    if (ids[i] === id) ids.splice(i, 1);
                }

                fulfill({ code: 204, body: {} });
            }
            else (reject({ code: 404, body: { 'error': 'The id does not exist' } }));
        });
    }



    performQuery(query: QueryRequest): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            //check if query is valid
            if (query == null || !('WHERE' in query) || !('OPTIONS' in query)) {
                reject({ code: 400, body: { 'error': 'The query is invalid' } });
            }

            try { JSON.parse(query.toString()) }
            catch (err) { reject({ code: 400, body: { 'error': 'The query is not a valid JSON' } }); }

            // check if the dataset exists, !!!this is only of D1!!!
            if (ids.includes('courses') == false) {
                reject({ code: 424, body: { 'missing': ['courses'] } });
            }

            try {

                if (Object.keys(query.WHERE).length > 0) {
                    for (let filter of Object.keys(query.WHERE)) {
                        this.whereParser(query.WHERE, filter);
                    }

                }
                else (reject({ code: 424, body: { 'missing': ['courses'] } }));
            }
            catch (err) { }


            //cached.file('courses'). ... ; get the data here somehow




        });
    }


    // helper function to parse WHERE in query
    private whereParser(where: any, filter: string) {
        if (filter == 'AND' || filter == 'OR') {
            whereFilters.push(filter);
            for (let subFilter of where[filter]) {
                this.whereParser(Object.keys(where), subFilter);
            }
        }
        else if (filter == 'LT' || filter == 'GT' || filter == 'EQ') {
            whereFilters.push(filter);
            let itemToFilter = JSON.parse(JSON.stringify(where[filter]));
            mToFilter.push(itemToFilter);

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
