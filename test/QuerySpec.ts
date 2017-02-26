import { expect } from 'chai';
import Log from "../src/Util";
import { InsightResponse, QueryRequest } from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";



describe("QuerySpec", function () {

    let insF: InsightFacade = null;

    beforeEach(function () {
        insF = new InsightFacade();
    });


    it("Testing for Basic Parsing to output (GT) correct format", () => {
        let queryR: QueryRequest = {
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'cell', courses_avg: 89.6 },
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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


    it("Testing for Basic Parsing to output (EQ) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "EQ": {
                    "courses_avg": 85.4
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'dent', courses_avg: 85.4 }
                    ]
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

    it("Testing for Basic Parsing to output (LT) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "LT": {
                    "courses_avg": 76.49
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'elec', courses_avg: 76.48 },
                        { courses_dept: 'elec', courses_avg: 76.48 }
                    ]
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



    it("Testing for (NOT) complex Parsing to output (GT) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "NOT": {
                    "GT": {
                        "courses_avg": 76.49
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'elec', courses_avg: 76.48 },
                        { courses_dept: 'elec', courses_avg: 76.48 }
                    ]
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







    it("Testing for Basic Parsing to output (IS) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_dept": "cell"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                [
                    { courses_dept: 'cell', courses_avg: 89.6 },
                    { courses_dept: 'cell', courses_avg: 89.6 }

                    ]
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

    it("Testing for NOT with Basic Parsing to output (IS) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "NOT": {
                    "IS": {
                        "courses_dept": "cell"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'elec', courses_avg: 76.48 },
                        { courses_dept: 'elec', courses_avg: 76.48 },
                        { courses_dept: 'dent', courses_avg: 82.5 },
                        { courses_dept: 'dent', courses_avg: 82.5 },
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'dent', courses_avg: 85.4 }

                    ]
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

    it("Testing for DOUBLE NOT with Basic Parsing to output (IS) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "NOT": {
                    "NOT": {
                        "IS": {
                            "courses_dept": "cell"
                            }
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 },
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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

    it("Testing for AND with Basic Parsing to output (IS) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [
                    {
                        "IS": {
                            "courses_dept": "cell"
                        }
                    },
                    {
                        "EQ": {
                            "courses_avg": 89.6
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 },
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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
    })



    it("Testing for Basic Parsing to output (IS) correct format for instructor", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_instructor": "o'connor, timothy"
                }
            },
            "OPTIONS": {
                "COLUMNS": [
                    "courses_dept",
                    "courses_avg",
                    "courses_instructor"
                ],
                "ORDER": "courses_avg",
                "FORM": "TABLE"
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6, courses_instructor: "o'connor, timothy" }

                    ]
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



    it("Testing for Basic Parsing to output (IS) correct format for partial name instructor not formatted correctly", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_instructor": "o'connor"
                }
            },
            "OPTIONS": {
                "COLUMNS": [
                    "courses_dept",
                    "courses_avg",
                    "courses_instructor"
                ],
                "ORDER": "courses_avg",
                "FORM": "TABLE"
            }
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                    ]
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



    it("Testing for Basic Parsing to output (IS) correct format for course instructor verbatim", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_instructor": "o'connor, timothy"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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



    it("Testing for Basic Parsing to output (IS) correct format for partial course instructor beginning" +
        "has star", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_instructor": "*o'connor, timothy"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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

    it("Testing for Basic Parsing to output (IS) correct format for partial course instructor end" +
        "has star", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_instructor": "o'connor, timothy*"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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


    it("Testing for Basic Parsing to output (IS) correct format for partial course instructor begin and end" +
        "has star", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_instructor": "*o'connor, timothy*"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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

    it("Testing for Basic Parsing to output (IS) correct format for course title", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "IS": {
                    "courses_title": "molec embryology"
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'cell', courses_avg: 89.6 },
                        { courses_dept: 'cell', courses_avg: 89.6 }

                    ]
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


    it("Testing for AND with Complex Parsing to output (AND), (EQ), (GT) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [
                    {
                        "EQ": {
                            "courses_pass": 5
                        }
                    },
                    {
                        "GT": {
                            "courses_avg": 85.3
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'cell', courses_avg: 89.6 },
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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

    it("Testing for OR with Complex Parsing to output (OR), (EQ), (GT) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "OR": [
                    {
                        "NOT": {
                            "IS": {
                                "courses_dept": "cell"
                            }
                        }
                    },
                    {
                        "LT": {
                            "courses_avg": 85.3
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'elec', courses_avg: 76.48 },
                        { courses_dept: 'elec', courses_avg: 76.48 },
                        { courses_dept: 'dent', courses_avg: 82.5 },
                        { courses_dept: 'dent', courses_avg: 82.5 },
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'dent', courses_avg: 85.4 }
                    ]
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
    })


    it("Testing for AND with Complex Parsing to output (AND), (EQ), (GT) correct format", () => {
        let queryR: QueryRequest = {
            "WHERE": {
                "AND": [
                    {
                        "AND": [
                            {
                                "IS": {
                                    "courses_dept": "cell"
                                }
                            },
                            {

                                "GT": {
                                    "courses_avg": 89.5
                                }

                            }
                        ]
                    },
                    {
                        "LT": {
                            "courses_avg": 50
                        }
                    },
                    {
                        "NOT": {
                            "IS" : {
                                "courses_dept": "cell"
                            }
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
        };
        let queryROutput: InsightResponse = {
            code: 200,
            body: {
                render: 'TABLE',
                result:
                    [
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'dent', courses_avg: 85.4 },
                        { courses_dept: 'cell', courses_avg: 89.6 },
                        { courses_dept: 'cell', courses_avg: 89.6 }
                    ]
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






});