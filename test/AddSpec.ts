import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("AddSpec", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    })
/*
    it("Testing Load Zip base64 1 file in zip", function (done) {
        let fs = require("fs");
        fs.readFile("test.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                insF.addDataset("courses", data).then(function () {

                }).then(() => done(), done);
            }
        })
    })



    it("Testing Load Zip base64 more than 1 file in zip", function (done) {
        let fs = require("fs");
        fs.readFile("test2.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                insF.addDataset("cafe", data).then(function () {

                }).then(() => done(), done);
            }
        })
    });

    it("Testing with invalid JSON files", function (done) {
        let fs = require("fs");
        fs.readFile("testJSON.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                insF.addDataset("invalidJSON", data).then(function () {

                }).then(() => done(), done);
            }
        })
    });*/

        it("Testing Load Zip base64 1 file in zip", function (done) {
        let fs = require("fs");
        fs.readFile("testOBJ.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                insF.addDataset("obj", data).then(function () {

                }).then(() => done(), done);
            }
        })
    })








})