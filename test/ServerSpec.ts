import { expect } from 'chai';
import Log from "../src/Util";
import Server from "../src/rest/Server";
var fs = require("fs");
var chai = require('chai'), chaiHttp = require('chai-http'); chai.use(chaiHttp);


describe.only("ServerSpec", function () {
    var s: Server = new Server(1234);

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


    it("PUT description", function () {

        return chai.request('http://localhost:4321')
            .put('/dataset/rooms')
            .attach("body", fs.readFileSync("./rooms.zip"), "rooms.zip")
            .then(function (res: Response) {
                Log.trace('then:' + res);
                expect(res.body).to.deep.equal({ code: 200, body: {} })
            })
            .catch(function (err: any) {
                Log.trace('catch:' + err);
                // some assertions
                expect.fail();
            });
    });


})
