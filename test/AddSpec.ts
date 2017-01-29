import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("AddSpec", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    })

    it("Testing Load Zip base64 1 file in zip", function () {
        let fs = require("fs");
        fs.readFile("test.zip", "base64", function (err: any, data: any) {
            if (err) {
                return err;
            } else {
                return insF.addDataset("courses", data);
            }
        })
    });

    it("Testing Load Zip base64 more than 1 file in zip", function () {
        let fs = require("fs");
        fs.readFile("test2.zip", "base64", function (err: any, data: any) {
            if (err) {
                return err;
            } else {
                return insF.addDataset("courses", data);
            }
        })
    });







})