import {expect} from 'chai';
import Log from "../src/Util";
import {InsightResponse, QueryRequest} from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";


describe("Transformation Tests", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    });


    it.skip("testing for stress test apply", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [
                    {
                        "IS": {
                            "courses_title": "*op*"
                        }
                    },
                    {
                        "EQ": {
                            "courses_year": 2016
                        }
                    }
                ]
            },
            "OPTIONS": {
                "COLUMNS": [
                    "courses_title",
                    "courses_uuid",
                    "courses_year"
                ],
                "ORDER": "courses_uuid",
                "FORM": "TABLE"
            }
        }
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": [{"rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs", "rooms_shortname": "HEBB"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs", "rooms_shortname": "IBLC"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs", "rooms_shortname": "LSK"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "LSC"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "ANGU"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "DMP"}, {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "CHBE"
                    },
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "FRDM"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "PHRM"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "SWNG"},
                    {"rooms_furniture": "Classroom-Movable Tables & Chairs", "rooms_shortname": "OSBO"}, {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs", "rooms_shortname": "SRC"
                    }]

            }
        };


        return insF.performQuery(queryR).then(function (value: any) {
            let fs = require('fs');
            fs.writeFileSync("./cachedDatasets/test", JSON.stringify(value));

            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    });

    it("testing for basic group", () => {
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
                "result": [{"rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs", "rooms_shortname": "HEBB"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs", "rooms_shortname": "IBLC"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs", "rooms_shortname": "LSK"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "LSC"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "ANGU"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "DMP"}, {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "CHBE"
                    },
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "FRDM"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "PHRM"},
                    {"rooms_furniture": "Classroom-Fixed Tables/Movable Chairs", "rooms_shortname": "SWNG"},
                    {"rooms_furniture": "Classroom-Movable Tables & Chairs", "rooms_shortname": "OSBO"}, {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs", "rooms_shortname": "SRC"
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

    it("Testing for two groups and one apply", () => {
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
                "result": [{
                    "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                    "rooms_shortname": "HEBB", "maxSeats": 375
                },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "IBLC", "maxSeats": 154
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "LSK", "maxSeats": 388
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "LSC", "maxSeats": 700
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "ANGU", "maxSeats": 260
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "DMP", "maxSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "CHBE", "maxSeats": 200
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "FRDM", "maxSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "PHRM", "maxSeats": 403
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "SWNG", "maxSeats": 755
                    },
                    {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs",
                        "rooms_shortname": "OSBO", "maxSeats": 442
                    },
                    {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs",
                        "rooms_shortname": "SRC", "maxSeats": 897
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

    it("Testing for MIN", () => {
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
                "result": [{
                    "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                    "rooms_shortname": "HEBB",
                    "maxSeats": 375
                }
                    , {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "IBLC",
                        "maxSeats": 154
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "LSK",
                        "maxSeats": 183
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "LSC",
                        "maxSeats": 350
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "ANGU",
                        "maxSeats": 260
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "DMP",
                        "maxSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "CHBE",
                        "maxSeats": 200
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "FRDM",
                        "maxSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "PHRM",
                        "maxSeats": 167
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "SWNG",
                        "maxSeats": 187
                    },
                    {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs",
                        "rooms_shortname": "OSBO",
                        "maxSeats": 442
                    },
                    {"rooms_furniture": "Classroom-Movable Tables & Chairs", "rooms_shortname": "SRC", "maxSeats": 299}]

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

    it("Testing for AVG", () => {
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
                "result": [{
                    "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                    "rooms_shortname": "HEBB",
                    "maxSeats": 375
                }
                    , {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "IBLC",
                        "maxSeats": 154
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "LSK",
                        "maxSeats": 194
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "LSC",
                        "maxSeats": 350
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "ANGU",
                        "maxSeats": 260
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "DMP",
                        "maxSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "CHBE",
                        "maxSeats": 200
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "FRDM",
                        "maxSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "PHRM",
                        "maxSeats": 201.5
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "SWNG",
                        "maxSeats": 188.75
                    },
                    {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs",
                        "rooms_shortname": "OSBO",
                        "maxSeats": 442
                    },
                    {"rooms_furniture": "Classroom-Movable Tables & Chairs", "rooms_shortname": "SRC", "maxSeats": 299}]

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

    it("Testing for two apply keys", () => {
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
                "result": [{
                    "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                    "rooms_shortname": "HEBB",
                    "countType": 1,
                    "avgSeats": 375
                },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "IBLC",
                        "countType": 1,
                        "avgSeats": 154
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Fixed Chairs",
                        "rooms_shortname": "LSK",
                        "countType": 2,
                        "avgSeats": 194
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "LSC",
                        "countType": 2,
                        "avgSeats": 350
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "ANGU",
                        "countType": 1,
                        "avgSeats": 260
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "DMP",
                        "countType": 1,
                        "avgSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "CHBE",
                        "countType": 1,
                        "avgSeats": 200
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "FRDM",
                        "countType": 1,
                        "avgSeats": 160
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "PHRM",
                        "countType": 2,
                        "avgSeats": 201.5
                    },
                    {
                        "rooms_furniture": "Classroom-Fixed Tables/Movable Chairs",
                        "rooms_shortname": "SWNG",
                        "countType": 4,
                        "avgSeats": 188.75
                    },
                    {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs",
                        "rooms_shortname": "OSBO",
                        "countType": 1,
                        "avgSeats": 442
                    },
                    {
                        "rooms_furniture": "Classroom-Movable Tables & Chairs",
                        "rooms_shortname": "SRC",
                        "countType": 3,
                        "avgSeats": 299
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
                "result": [{"rooms_shortname": "LSC", "maxSeats": 350}, {
                    "rooms_shortname": "HEBB",
                    "maxSeats": 375
                }, {"rooms_shortname": "OSBO", "maxSeats": 442}]
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
                "result": [{"rooms_shortname": "OSBO", "maxSeats": 442}, {
                    "rooms_shortname": "HEBB",
                    "maxSeats": 375
                }, {"rooms_shortname": "LSC", "maxSeats": 350}]
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


    it.only("Testing for multiple APPLY and multiple order keys", () => {
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
                    "keys": ["countType", "avgSeats"]
                },
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_shortname"],
                "APPLY": [{
                    "countType": {
                        "COUNT": "rooms_furniture"
                    }
                },
                    {
                        "sumSeats": {
                            "SUM": "rooms_seats"
                        }
                    },
                    {
                        "avgSeats": {
                            "AVG": "rooms_seats"
                        }
                    }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": [{"rooms_shortname": "HEBB", "countType": 1, "avgSeats": 375},
                    {"rooms_shortname": "OSBO", "countType": 1, "avgSeats": 442},
                    {"rooms_shortname": "LSC", "countType": 2, "avgSeats": 350}]
            }
        };


        return insF.performQuery(queryR).then(function (value: any) {
            console.log(JSON.stringify(value.body.result));
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    });


    it("Testing for multiple APPLY and ordering with String", () => {
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
                    "countType"

                ],
                "ORDER": {
                    "dir": "UP",
                    "keys": ["countType"]
                },
                "FORM": "TABLE"
            },
            "TRANSFORMATIONS": {
                "GROUP": ["rooms_shortname"],
                "APPLY": [
                    {
                        "countType": {
                            "COUNT": "rooms_furniture"
                        }
                    }]
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                "render": "TABLE",
                "result": [{"rooms_shortname": "HEBB", "countType": 1},
                    {"rooms_shortname": "LSC", "countType": 1},
                    {"rooms_shortname": "OSBO", "countType": 1}]
            }
        };


        return insF.performQuery(queryR).then(function (value: any) {
            console.log(JSON.stringify(value.body.result));
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    });


})