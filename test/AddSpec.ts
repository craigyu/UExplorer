import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse } from "../src/controller/IInsightFacade";
import  InsightFacade  from "../src/controller/InsightFacade";



describe("AddSpec", function () {

    let insF:InsightFacade = null;

    beforeEach(function() {
        insF = new InsightFacade();
    })

    function encodeZip():any {
        let fs = require("fs");
        fs.readFile("courses.zip", "base64", function (err: any, data: any) {
            if (err) {
                return err;
            } else {
                return data;
            }
        })

    }

    it("Testing Load Zip base64", function () {
        let fs = require("fs");
        fs.readFile("test.zip", "base64", function(err:any, data: any) {
            if(err) {
                return err;
            } else {
                insF.addDataset("course",data);
            }
        })




    });







})