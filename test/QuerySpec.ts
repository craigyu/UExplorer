import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse, QueryRequest } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("QuerySpec", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    })

        it("Testing for NOT correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "NOT": {
                    "GT": {
                    "courses_avg": 87
                    }
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    })

            it("Testing for EQ correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "NOT": {
                    "EQ": {
                    "courses_avg": 87
                    }
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect.fail();
        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
        })
    })


    it("Testing for NOT  correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "GT": {
                    "courses_avg": 86
                },
                "NOT": {
                    "EQ": {
                    "courses_avg": 86.83
                    }
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);
            expect.fail()

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
        })
    })

    it("Testing for Basic Parsing to output (GT) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "GT": {
                    "courses_avg": 1
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 },
                { courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    })


    it("Testing for NOT  correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "GT": {
                    "courses_avg": 86
                },
                "NOT": {
                    "EQ": {
                    "courses_avg": 86.83
                    }
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);
            expect.fail()

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
        })
    })

    it("Testing IS with invalid key value correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_dept": "hi"
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 },
                { courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            expect.fail();
        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect(err).to.deep.equal({ code: 400, body: { error: 'invalid keys for logic comparactor' } })
        })
    })

    it("Testing IS with correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_dept": "aanb"
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 },
                { courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }
        


        return insF.performQuery(queryR).then(function (value: any) {
            Log.test("Value: " + value);
            expect(value).to.deep.equal(queryROutput);

        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    })

    it("Testing for LOGIC ORDER (AND)", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "OR": [
                    {
                        "IS": {
                            "courses_dept": "aanb"
                        }
                    },
                    {
                        "GT": {
                            "courses_avg": 87
                        }
                    }]



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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 },
                { courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            expect(value).to.deep.equal(queryROutput)
        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    })
    it("Testing for LOGIC ORDER (AND)", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "OR": [
                    {
                        "IS": {
                            "courses_dept": "aanb"
                        }
                    },
                    {
                        "GT": {
                            "courses_avg": 87
                        }
                    }]



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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'aanb', courses_avg: 86.83 },
                { courses_dept: 'aanb', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            expect(value).to.deep.equal(queryROutput)
        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
            expect.fail();
        })
    })


    it("Testing for LOGIC ORDER (OR WITHIN OR)", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "OR": [
                    {
                        "AND": [
                            {
                                "GT": {
                                    "courses_avg": 88
                                }
                            },
                            {
                                "IS": {
                                    "courses_dept": "cell"
                                }
                            }
                        ]
                    },
                    {
                        "EQ": {
                            "courses_avg": 82.5
                        }
                    }
                ]
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
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [{ courses_dept: 'cell', courses_avg: 86.83 },
                { courses_dept: 'cell', courses_avg: 87.83 }]
            }
        }


        return insF.performQuery(queryR).then(function (value: any) {
            expect.fail();
        }).catch(function (err: any) {
            console.log(err);
            Log.test(err);
        })
    })




})