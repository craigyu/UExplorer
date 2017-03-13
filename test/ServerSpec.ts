import { expect } from 'chai';
import Log from "../src/Util";
import Server from "../src/rest/Server";
var fs = require("fs");
var chai = require('chai'), chaiHttp = require('chai-http'); chai.use(chaiHttp);


describe("ServerSpec", function () {


    var s: Server = new Server(4321);

    before(function() {
        s.start();
    });

    after(function() {
        s.stop();
    });

    let queryJSONObject: any = {
        "WHERE": {
            "GT": {
                "courses_avg": 85.3
            }
        },
        "OPTIONS": {
            "COLUMNS": [
                "courses_dept",
                "courses_avg"
            ],
            "ORDER": "courses_avg",
            "FORM": "TABLE"
        }
    }

    // files needed encoded in base 64
    // files encoding ends here

    it("Testing Stop Server", function () {
        return s.stop().then(function (done) {
            done;
        }).catch(function (err) {
            Log.test(err);
        })
    });

    it("Testing Start Server", function () {
        return s.start().then(function (done) {
            done;
        }).catch(function (err) {
            Log.test(err);
        })
    });


    it("Test add", function () {
        return chai.request("localhost:4321")
            .put('/dataset/rooms')
            .attach("body", fs.readFileSync("./rooms.zip"), "rooms.zip")
            .then(function (res: any) {
                Log.trace('then:');
                expect(res.status).to.equal(201);
            })
            .catch(function (err:any) {
                Log.trace('catch:');
                // some assertions
                expect.fail();
            });
    });

    it("Test Delete", function () {
        return chai.request("localhost:4321")
            .del('/dataset/rooms')
            .then(function (res: any) {
                Log.trace('then:');
                // some assertions
            })
            .catch(function (err: any) {
                Log.trace('catch:');
                // some assertions
                expect.fail();
            });
    });


    it("Test add", function () {
        return chai.request("localhost:4321")
            .put('/dataset/rooms')
            .attach("body", fs.readFileSync("./rooms.zip"), "rooms.zip")
            .then(function (res: any) {
                Log.trace('then:');
                expect(res.status).to.equal(204);
            })
            .catch(function (err:any) {
                Log.trace('catch:');
                // some assertions
                expect.fail();
            });
    });

    it("POST Test Query", function () {
        return chai.request("localhost:4321")
            .post('/query')
            .send(queryJSONObject)
            .then(function (res: any) {
                Log.trace('then:');
                expect(res.status).to.equal(200);
            })
            .catch(function (err: any) {
                Log.trace('catch:');
                // some assertions
                expect.fail();
            });
    });

});
