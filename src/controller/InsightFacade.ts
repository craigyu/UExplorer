/**
 * This is the main programmatic entry point for the project.
 */
import { IInsightFacade, InsightResponse, QueryRequest } from "./IInsightFacade";

import Log from "../Util";

export default class InsightFacade implements IInsightFacade {

    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }

    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            var JSZip = require("jszip");
            var zip = new JSZip();
            var options = { base64: true }
            zip.loadAsync(content, options);
        })
    }
    removeDataset(id: string): Promise<InsightResponse> {
        return null;
    }

    performQuery(query: QueryRequest): Promise<InsightResponse> {
        return null;
    }
}
