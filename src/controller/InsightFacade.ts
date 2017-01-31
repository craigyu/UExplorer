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

        });
    }
}
