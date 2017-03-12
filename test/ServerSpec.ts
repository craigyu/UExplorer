import { expect } from 'chai';
import Log from "../src/Util";
import Server from "../src/rest/Server";
var fs = require("fs");
var chai = require('chai'), chaiHttp = require('chai-http'); chai.use(chaiHttp);


describe("ServerSpec", function () {
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





})
