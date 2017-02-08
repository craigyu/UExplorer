import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("AddSpec", function () {
    let fs = require("fs");
    let twocourses: any;
    let test3files: any;

    let insF: InsightFacade = null;


    // files needed encoded in base 64
    fs.readFile("twocourses.zip", "base64", (err:any ,data:any) => {
        if (err) {
            console.log(err);
        } else {
            twocourses = data;
        }
    })

    fs.readFile("test3files.zip", "base64",  (err: any, data: any) => {
        if (err) {
            console.log(err);
        } else {
            test3files = data;
        }
    })

    // files encoding ends here


    beforeEach(function () {
        insF = new InsightFacade();
    })


    it("Testing Load Zip base64 2 file in zip", function () {
        return insF.addDataset("courses", twocourses)
            .then(function (value: any) {
                expect(value).to.deep.equal({ code: 204, body: {} });
            })
            .catch(function (err: any) {
                Log.test(err);
                console.log(err);
                expect.fail();
            })

    })

    it("Testing Load Zip with course deletion", function () {
        if (fs.existsSync("./cachedDatasets/courses")) {
            fs.unlinkSync("./cachedDatasets/courses")
        }
        return insF.addDataset("courses", twocourses)
            .then(function (value: any) {
                expect(value).to.deep.equal({ code: 204, body: {} });
            })
            .catch(function (err: any) {
                Log.test(err);
                console.log(err);
                expect.fail();
            })

    })

    it("Testing Load Zip with More Files", function () {
        return insF.addDataset("courses_2", test3files)
            .then(function (value: any) {
                expect(value).to.deep.equal({ code: 204, body: {} });
            })
            .catch(function (err: any) {
                Log.test(err);
                console.log(err);
                expect.fail();
            })

    })


})