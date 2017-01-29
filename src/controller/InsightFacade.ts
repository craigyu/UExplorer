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
            //console.log(new Buffer(content, 'base64').toString());
            if (ids.length == 0) {
                
                cached.folder(id).loadAsync(content, options)
                    .then(function (write: any) {
                        ids.push(id);
                        fulfill({ code: 204, body: {} });

                    })

                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString() } });
                    });
            }
            else if (ids.includes(id)) {
                cached.remove(id);       //remove for overwrite 

                cached.folder(id).loadAsync(content, options)
                    .then(function (write: any) {

                        fulfill({ code: 201, body: {} });

                    })

                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString() } });
                    });
            }
            else {
                cached.folder(id).loadAsync(content, options)
                    .then(function (write: any) {
                        ids.push(id);
                        fulfill({ code: 204, body: {} });

                    })

                    .catch(function (err: any) {
                        reject({ code: 400, body: { 'error': err.toString() } });
                    });
            }



        });

    }

    removeDataset(id: string): Promise<InsightResponse> {
        return null;
    }

    performQuery(query: QueryRequest): Promise<InsightResponse> {
        return null;
    }
}
