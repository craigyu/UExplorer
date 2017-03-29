import * as React from "react";
import * as ReactDOM from "react-dom";


export const room_schema = {
    "title": "Rooms",
    "id": "query",
    "properties": {
        "WHERE": {
            "id": "where",
            "title": "Filter by: ",
            "type": "object",
            // "enum": ["AND", "OR", "IS", "GT", "EQ", "LT", "NOT"],
            "oneOf": [{
                "properties": {
                    "WHERE": { "enum": "" }
                }
            },
            {
                "properties": {
                    "WHERE": {
                        "enum": ["Is"]
                    },
                    "IS": {
                        "type": "object",
                        "title": "String value only",
                        "oneOf": [
                            {},
                            {
                                "properties": {
                                    "IS": {
                                        "enum": ["Building Name"]
                                    },
                                    "rooms_name": {
                                        "type": "string"
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "IS": {
                                        "enum": ["Room Number"],
                                    },
                                    "rooms_number": {

                                        "type": "string"
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "IS": {
                                        "enum": ["Furniture Type"]
                                    },
                                    "rooms_furniture": {
                                        "type": "string"
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "IS": {
                                        "enum": ["Room Type"],
                                    },
                                    "rooms_type": {
                                        "type": "string"
                                    }
                                }
                            }
                        ],
                        "x-hints": {
                            "form": {
                                "selector": "IS",
                            }
                        }
                    }
                }
            },
            {
                "properties": {
                    "WHERE": {
                        "enum": ["Greater than"]
                    },
                    "GT": {
                        "type": "object",
                        "title": "Number value only",
                        "properties": {
                        
                            "rooms_seats": {
                                "type": "number"
                            }
                        }
                    }
                }
            },
            {
                "properties": {
                    "WHERE": {
                        "enum": ["Equal to"]
                    },
                    "EQ": {
                        "type": "object",
                        "title": "Number value only",
                        "properties": {
                            
                            "rooms_seats": {
                                "type": "number"
                            }
                        }
                    }
                }
            },
            {
                "properties": {
                    "WHERE": {
                        "enum": ["Lower than"]
                    },
                    "LT": {
                        "type": "object",
                        "title": "Number value only",
                        "properties": {
                          
                            "rooms_seats": {
                                "type": "number"
                            }
                        }
                    }
                }
            },
            {
                "properties": {
                    "WHERE": {
                        "enum": ["And"],
                    },
                    "AND": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "oneOf": [
                                {
                                    "type": "object",
                                    "properties": {
                                        "IS": {
                                            "type": "object",
                                            "title": "String value only",
                                            "oneOf": [
                                                {},
                                                {
                                                    "properties": {
                                                        "IS": {
                                                            "enum": ["Department"]
                                                        },
                                                        "courses_dept": {
                                                            "type": "string"
                                                        }
                                                    }

                                                },
                                                {
                                                    "properties": {
                                                        "IS": {
                                                            "enum": ["Instructor"],
                                                        },
                                                        "courses_instructor": {
                                                            "title": "search with partial name using * syntax",
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "properties": {
                                                        "IS": {
                                                            "enum": ["Title"]
                                                        },
                                                        "courses_title": {
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                {
                                                    "properties": {
                                                        "IS": {
                                                            "enum": ["ID"],
                                                        },
                                                        "courses_id": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }
                                            ],
                                            "x-hints": {
                                                "form": {
                                                    "selector": "IS",
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "type": "object", "properties": {
                                        "GT": {
                                            "type": "object",
                                            "title": "Number value only",
                                            "oneOf": [{},
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Average"]
                                                    },
                                                    "courses_avg": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Passed"],
                                                    },
                                                    "courses_pass": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Failed"]
                                                    },
                                                    "courses_fail": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Audited"],
                                                    },
                                                    "courses_audit": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Year"],
                                                    },
                                                    "courses_year": {
                                                        "type": "number"
                                                    }
                                                }
                                            }
                                            ],
                                            "x-hints": {
                                                "form": {
                                                    "selector": "GT",
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
            ],
            "x-hints": {
                "form": {
                    "selector": "WHERE",
                }
            },
        },
        "OPTIONS": {
            "title": "Options",
            "id": "options",
            "properties": {
                "COLUMNS": {
                    "id": "columns",
                    "title": "Properties you want to display: e.g. courses_dept",
                    "items": {
                        "description": "Allows anything, and describes nothing.",
                        "minItems": 1,
                        "type": "string"
                    },
                    "type": "array"
                },
                "FORM": {
                    "title": "Display Type: ",
                    "enum": ["TABLE"]
                },
                "ORDER": {
                    "id": "order",
                    "properties": {
                        "dir": {
                            "id": "dir",
                            "type": "string",
                            "title": "Sort direction: ",
                            "enum": ["UP", "DOWN"]
                        },
                        "keys": {
                            "id": "keys",
                            "title": "Sort with these key(s), at least 1",
                            "items": {
                                "description": "Allows anything, and describes nothing.",
                                "minItems": 1,
                                "type": "string"
                            },
                            "type": "array"
                        }
                    },
                    "type": "object"
                }
            },
            "type": "object"
        },
        "TRANSFORMATIONS": {
            "id": "transformations",
            "title": "Advanced search:  default as empty",
            "properties": {
                "APPLY": {
                    "id": "apply",
                    "title": "Custom search terms:  e.g. maxSeats",
                    "items": {
                        "type": "object",
                        "minItems": 0,

                    },

                    "type": "array"
                },
                "GROUP": {
                    "id": "group",
                    "title": "Group results according to the following keys",
                    "items": {
                        "type": "string",
                        "minItems": 1,
                    },
                    "type": "array"
                }
            },
            "type": ["object", "null"]
        }
    },
    "type": "object"
}