import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse, QueryRequest } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";


describe("Transformation Tests", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    });


    it.only("should work for queryB example", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [{
                    "IS": {
                        "rooms_furniture": "*Tables*"
                    }
                }, {
                    "GT": {
                        "rooms_seats": 150
                    }
                }]
            },
            "OPTIONS": {
                "COLUMNS": [
                    "rooms_furniture", "rooms_shortname", "maxSeats"

                ],
                "ORDER": "rooms_furniture",
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_furniture", "rooms_shortname"],
                "APPLY": [{
                    "maxSeats": {
                        "MAX": "rooms_seats"
                    }
                }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": [{
                    "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs"
                }, {
                    "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs"
                }, {
                    "rooms_furniture": "Classroom-Fixed Tables/Moveable Chairs"
                }, {
                    "rooms_furniture": "Classroom-Fixed Tablets"
                }, {
                    "rooms_furniture": "Classroom-Hybrid Furniture"
                }, {
                    "rooms_furniture": "Classroom-Learn Lab"
                }, {
                    "rooms_furniture": "Classroom-Movable Tables & Chairs"
                }, {
                    "rooms_furniture": "Classroom-Movable Tablets"
                }, {
                    "rooms_furniture": "Classroom-Moveable Tables & Chairs"
                }, {
                    "rooms_furniture": "Classroom-Moveable Tablets"
                }]
            }
        };


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    });

})