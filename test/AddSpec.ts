import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("AddSpec", function () {
    let fs = require("fs");

    let insF: InsightFacade = null;




    // files needed encoded in base 64




    // files encoding ends here


    beforeEach(function () {
        insF = new InsightFacade();
    })

    // it.only("Test", function (done) {
    //     var hello = fs.readFileSync("courses.zip", "base64");
    //     insF.addDataset("courses", hello);
    // })

    it.only("Testing Load Zip base64 more than 1 file in zip", function (done) {
        let fs = require("fs");
        let data = fs.readFileSync("courses.zip", "base64");

        insF.addDataset("courses", data).then(function () {

        }).then(() => done(), done);

    });

    it("Test Print", function () {
        console.log("Hello");
    })
})