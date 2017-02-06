import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("AddSpec", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    })


    it("Testing Load Zip base64 2 file in zip", function (done) {
        let fs = require("fs");
        fs.readFile("twocourses.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                return insF.addDataset("courses", data)
                    .then(function () {
                        done();
                    })
                    .catch(function (err: any) {
                        Log.test(err);
                        console.log(err);
                        expect.fail(err);
                        done();
                    })

            }
        })
    })
    it("Testing Load Zip with course deletion", function (done) {
        let fs = require("fs");
        if (fs.existsSync("./cachedDatasets/courses")) {
            fs.unlinkSync("./cachedDatasets/courses")
        }
        fs.readFile("twocourses.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                return insF.addDataset("courses", data)
                    .then(function () {
                        done();
                    })
                    .catch(function (err: any) {
                        Log.test(err);
                        console.log(err);
                        expect.fail(err);
                        done();
                    })

            }
        })
    })


    it("Testing Load Zip with course deletion", function (done) {
        let fs = require("fs");
        if (fs.existsSync("./cachedDatasets/courses")) {
            fs.unlinkSync("./cachedDatasets/courses")
        }
        fs.readFile("twocourses.zip", "base64", function (err: any, data: any) {
            if (err) {
                done(err);
            } else {
                return insF.addDataset("courses", data)
                    .then(function () {
                        done();
                    })
                    .catch(function (err: any) {
                        Log.test(err);
                        console.log(err);
                        expect.fail(err);
                        done();
                    })

            }
        })
    })



})