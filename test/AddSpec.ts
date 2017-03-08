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

    it.skip("should load courses.zip", function () {
        let fs = require("fs");
        let data = fs.readFileSync("courses.zip", "base64");
        return insF.addDataset("courses", data).then(function (value: any) {
            expect(value).to.deep.equal({ code: 204, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });


    it("Testing Invalid Zip base64 to fail", function () {
        let fs = require("fs");
        let data = fs.readFileSync("invalidJSON.zip", "base64");
        return insF.addDataset("invalidJSON", data).then(function () {
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.deep.equal({ code: 400, body: { 'error': 'the id is not valid' } });
        })
    });

    it("Testing for Query (loading 3 files)", function () {
        let fs = require("fs");
        let data = fs.readFileSync("test3files.zip", "base64");
        return insF.addDataset("courses", data).then(function (value: any) {
            expect(value).to.deep.equal({ code: 204, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });

    it("Testing for Query (loading 3 files) BUT files already exists", function () {
        let fs = require("fs");
        let data = fs.readFileSync("test3files.zip", "base64");
        return insF.addDataset("courses", data).then(function (value: any) {
            expect(value).to.deep.equal({ code: 201, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });




    it("Testing for new Room (loading files)", function () {
        let fs = require("fs");
        let data = fs.readFileSync("rooms.zip", "base64");

        if (fs.existsSync("./cachedDatasets/rooms")) {
            fs.unlinkSync("./cachedDatasets/rooms");
        }

        return insF.addDataset("rooms", data).then(function (value: any) {
            expect(value).to.deep.equal({ code: 204, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });



    it("Testing Remove Dataset", function () {
        let fs = require("fs");

        return insF.removeDataset("rooms").then(function (value: any) {
            expect(value).to.deep.equal({ code: 204, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });

    it("Testing Remove Dataset when already removed", function () {
        let fs = require("fs");

        return insF.removeDataset("rooms").then(function (value: any) {
            expect.fail()
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.deep.equal({ code: 404, body: { 'error': 'The id does not exist' } })
        })
    });


    it("Readding Room for query tests", function () {
        let fs = require("fs");
        let data = fs.readFileSync("rooms.zip", "base64");

        return insF.addDataset("rooms", data).then(function (value: any) {
            expect(value).to.deep.equal({ code: 204, body: {} })
        }).catch(function (err) {
            Log.test(err);
            expect.fail();
        })
    });

    it("Testing for ID with nothing", function () {
        let fs = require("fs");
        let data = fs.readFileSync("test3files.zip", "base64");
        return insF.addDataset("", data).then(function (value: any) {
            expect.fail()
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.deep.equal({ code: 400, body: { "error": "No id was provided." } })
        })
    });



});