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

    it.only("Test", function (done) {
        var hello = fs.readFileSync("courses.zip", "base64");
        insF.addDataset("courses",hello)
        done();
    })



    it("Test Print", function () {
        console.log("Hello");
    })
})