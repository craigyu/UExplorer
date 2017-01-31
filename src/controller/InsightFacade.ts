/**
 * This is the main programmatic entry point for the project.
 */
import { IInsightFacade, InsightResponse, QueryRequest } from "./IInsightFacade";

import Log from "../Util";

var JSZip = require("jszip");
var ids = new Array();
var zip = new JSZip();
var cached = zip.folder("cachedDataset");
var fs = require("fs");
var whereFilters = new Array[];
var toFilter = new Array[];



export default class InsightFacade implements IInsightFacade {

    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }

    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            var options = { base64: true };
            if (id == '') reject({ code: 400, body: { "error": "No id was provided." } });

            // id contains given id
            if (ids.includes(id)) {
                cached.remove(id);       //remove for overwrite 

                cached.folder(id).loadAsync(content, options)
                    .then(function (files: any) {

                        cached.folder(id).forEach(function (relativePath: any, file: any) {
                            var encoded = fs.readFileSync(file, "base64");
                            var decoded = encoded.toString();
                            try {

                                JSON.parse(decoded);
                            }
                            catch (err) {
                                cached.remove(id);
                                reject({ code: 400, body: { 'error': 'Dataset contains an invalid JSON file' } });
                            }
                        });


                        fulfill({ code: 201, body: {} });

                    })

                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    });
            }
            else {
                cached.folder(id).loadAsync(content, options)
                    .then(function (files: any) {
                        cached.folder(id).forEach(function (relativePath: any, file: any) {
                            var encoded = fs.readFileSync(file, "base64");
                            var decoded = encoded.toString();
                            try {

                                JSON.parse(decoded);
                            }
                            catch (err) {
                                cached.remove(id);
                                reject({ code: 400, body: { 'error': 'Dataset contains an invalid JSON file' } });
                            }
                        });
                        ids.push(id);
                        fulfill({ code: 204, body: {} });

                    })

                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString('utf8') } });
                    });
            }



        });

    }

    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            if (ids.includes(id)) {
                cached.remove(id);  // remove dataset associated with the id

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

            //variable to be updated to perform on query
            var isLogic = false;
            var logic = null;
            var isMcomp = false;
            var mcomp = null;
            var isScomp = false;
            var scomp = null;
            var isNeg = false;
            var neg = null;
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
              for(let subFilter of Object.keys(where)){
                  this.whereParser(Object.keys(where), subFilter);
              }
        }
        else if (filter == 'LT' || filter == 'GT' || filter == 'EQ'){
            whereFilters.push(filter);
            var itemToFilter = Object.values(where[filter]);

        } 
        //else if (filter == 'IS'){}
        
    }

}
