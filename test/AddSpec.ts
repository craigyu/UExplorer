import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("AddSpec", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    })


    it("Testing Load Zip base64 1 file in zip", function (done) {
        let fs = require("fs");
        fs.readFile("test.zip", "base64", function (err: any, data: any) {
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
                        done();
                    })

            }
        })
    })



    it("Testing Load Zip base64 more than 1 file in zip", function () {
        let fs = require("fs");
        fs.readFile("test2.zip", "base64", function (err: any, data: any) {
            if (err) {
                console.log(err);
            } else {
                return insF.addDataset("cafe", data).then(function () {

                })
                    .catch(function (err: any) {
                        Log.test(err);
                        console.log(err);
                        expect(err).to.equal({ "code": 400, "body": { "error": "No useful data provided" } }
                        )
                    })
            }
        })
    });

    it("Testing with invalid JSON files", function () {
        let fs = require("fs");
        fs.readFile("testJSON.zip", "base64", function (err: any, data: any) {
            if (err) {
                console.log(err);
            } else {
                return insF.addDataset("invalidJSON", data).then(function () {
                    expect.fail();
                })
                    .catch(function (err: any) {
                        Log.test(err);
                        console.log(err);
                        expect(err).to.equal({ "code": 400, "body": { "error": "No useful data provided" } }
                        )
                    })
            }
        })
    });




        it("This file is needed for query Testing", function () {
        let fs = require("fs");
        fs.readFile("twocourses.zip", "base64", function (err: any, data: any) {
            if (err) {
                console.log(err);
            } else {
                return insF.addDataset("courses", data).then(function () {
                    expect.fail();
                })
                    .catch(function (err: any) {
                        Log.test(err);
                        console.log(err);
                        expect.fail()
                    })
            }
        })
    });







})