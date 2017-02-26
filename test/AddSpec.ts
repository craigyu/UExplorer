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

    it.skip("Testing Load Zip base64 more than 1 file in zip", function () {
        let fs = require("fs");
        let data = fs.readFileSync("courses.zip", "base64");

        return insF.addDataset("courses", data).then(function (value:any) {
            expect(value).to.deep.equal({ code: 201, body: {} })
        }).catch(function (err) {
            Log.test(err);
        })
    });

    it("Testing Invalid Zip base64 to fail", function () {
        let fs = require("fs");
        let data = fs.readFileSync("invalidJSON.zip", "base64");

        return insF.addDataset("invalidJSON", data).then(function () {
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.deep.equal({code: 400, body: {'error': 'file include invalid JSON(s)'}});
        })
    });

    it("Testing for Query (loading 3 files)", function () {
        let fs = require("fs");
        let data = fs.readFileSync("test3files.zip", "base64");

        return insF.addDataset("courses", data).then(function (value:any) {
            expect(value).to.deep.equal({ code: 201, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });



});