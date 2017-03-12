import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse, QueryRequest } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";


describe("Transformation Tests", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    });


    it("should work for queryB example", () => {
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
                    "rooms_furniture", "rooms_shortname"
                ],
                "ORDER": "rooms_furniture",
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_furniture", "rooms_shortname"],
                "APPLY": []
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": []
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

    it("should work for queryB example", () => {
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
                        "SUM": "rooms_seats"
                    }
                }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": []
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

    it("should work for queryB example", () => {
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
                        "MIN": "rooms_seats"
                    }
                }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": []
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
    it("should work for queryB example", () => {
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
                        "AVG": "rooms_seats"
                    }
                }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": []
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

    it("should work for queryB example", () => {
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
                    "rooms_furniture", "rooms_shortname", "countType", "avgSeats"

                ],
                "ORDER": "rooms_furniture",
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_furniture", "rooms_shortname"],
                "APPLY": [{
                    "countType": {
                        "COUNT": "rooms_number"
                    }

                },
                {
                    "avgSeats": {
                        "AVG": "rooms_seats"
                    }
                }
                ]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": []
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


    it("Should sort in ascending order (Testing for OPTION-> ORDER-> DIR-> UP)", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [{
                    "IS": {
                        "rooms_furniture": "*Tables*"
                    }
                }, {
                    "GT": {
                        "rooms_seats": 300
                    }
                }]
            },
            "OPTIONS": {
                "COLUMNS": [
                    "rooms_shortname",
                    "maxSeats"
                ],
                "ORDER": {
                    "dir": "UP",
                    "keys": ["maxSeats"]
                },
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_shortname"],
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
                "result": [{"rooms_shortname":"LSC","maxSeats":350},{"rooms_shortname":"HEBB","maxSeats":375},{"rooms_shortname":"OSBO","maxSeats":442}]
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


        it("Testing for basic DOWN ", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [{
                    "IS": {
                        "rooms_furniture": "*Tables*"
                    }
                }, {
                    "GT": {
                        "rooms_seats": 300
                    }
                }]
            },
            "OPTIONS": {
                "COLUMNS": [
                    "rooms_shortname",
                    "maxSeats"
                ],
                "ORDER": {
                    "dir": "DOWN",
                    "keys": ["maxSeats"]
                },
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_shortname"],
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
                "result": [{"rooms_shortname":"OSBO","maxSeats":442},{"rooms_shortname":"HEBB","maxSeats":375},{"rooms_shortname":"LSC","maxSeats":350}]
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



       it("Testing for multiple APPLY and multiple order keys", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [{
                    "IS": {
                        "rooms_furniture": "*Tables*"
                    }
                }, {
                    "GT": {
                        "rooms_seats": 300
                    }
                }]
               
            },
            "OPTIONS": {
                "COLUMNS": [
                    "rooms_shortname",
                    "countType",
                    "avgSeats"
                
                ],
                "ORDER": {
                    "dir": "UP",
                    "keys": ["countType","avgSeats"]
                },
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_shortname"],
                "APPLY": [{
                    "avgSeats": {
                        "AVG": "rooms_seats"
                    }
                },
                {
                    "countType": {
                        "COUNT": "rooms_number"
                    }
                }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": [{"rooms_shortname":"LSC","maxSeats":350},{"rooms_shortname":"HEBB","maxSeats":375},{"rooms_shortname":"OSBO","maxSeats":442}]
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