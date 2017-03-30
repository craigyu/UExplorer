
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
                                    "rooms_shortname": {
                                        "type": "string",
                                        "enum": ["AERL", "ALRD", "ANGU", "ANSO", "AUDX", "BIOL", "BRKX", "BUCH", "CEME", "CHBE", "CHEM", "CIRS", "DMP", "EOSM", "ESB", "FNH", "FORW", "FRDM", "FSC", "GEOG", "HEBB", "HENN", "IBLC", "IONA", "LASR", "LSC", "LSK", "MATH", "MATX", "MCLD", "MCML", "MGYM", "ORCH", "OSBO", "PCOH", "PHRM", "SCRF", "SOWK", "SPPH", "SRC", "SWNG", "UCLL", "WESB", "WOOD"]
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
                                        "type": "string",
                                        "enum": [
                                            "Classroom-Fixed Tables/Fixed Chairs", "Classroom-Fixed Tables/Movable Chairs", "Classroom-Fixed Tables/Moveable Chairs",
                                            "Classroom-Fixed Tablets", "Classroom-Hybrid Furniture", "Classroom-Learn Lab", "Classroom-Movable Tables & Chairs", "Classroom-Movable Tablets", "Classroom-Moveable Tables & Chairs", "Classroom-Moveable Tablets"
                                        ]
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "IS": {
                                        "enum": ["Room Type"],
                                    },
                                    "rooms_type": {
                                        "type": "string",
                                        "enum": [
                                            "Active Learning", "Case Style", "Open Design General Purpose", "Small Group", "Studio Lab", "TBD", "Tiered Large Group"
                                        ]
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
                        "oneOf": [
                            {},
                            {
                                "properties": {
                                    "GT": {
                                        "enum": ["Room size"]
                                    },
                                    "rooms_seats": {
                                        "type": "number"
                                    }
                                }
                            },
                        ],
                        "x-hints": {
                            "form": {
                                "selector": "GT",
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
                        "oneOf": [
                            {},
                            {
                                "properties": {
                                    "EQ": {
                                        "enum": ["Room size"]
                                    },
                                    "rooms_seats": {
                                        "type": "number"
                                    }
                                }
                            },
                        ],
                        "x-hints": {
                            "form": {
                                "selector": "EQ",
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
                        "oneOf": [
                            {},
                            {
                                "properties": {
                                    "LT": {
                                        "enum": ["Room size"]
                                    },
                                    "rooms_seats": {
                                        "type": "number"
                                    }
                                }
                            },
                        ],
                        "x-hints": {
                            "form": {
                                "selector": "LT",
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
                        "title": "And = ",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "object",
                            "oneOf": [{},
                            {
                                "properties": {
                                    "AND": {
                                        "enum": ["Is"]
                                    },
                                    "IS": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "IS": {
                                                        "enum": ["Building Name"]
                                                    },
                                                    "rooms_shortname": {
                                                        "type": "string",
                                                        "enum": ["AERL", "ALRD", "ANGU", "ANSO", "AUDX", "BIOL", "BRKX", "BUCH", "CEME", "CHBE", "CHEM", "CIRS", "DMP", "EOSM", "ESB", "FNH", "FORW", "FRDM", "FSC", "GEOG", "HEBB", "HENN", "IBLC", "IONA", "LASR", "LSC", "LSK", "MATH", "MATX", "MCLD", "MCML", "MGYM", "ORCH", "OSBO", "PCOH", "PHRM", "SCRF", "SOWK", "SPPH", "SRC", "SWNG", "UCLL", "WESB", "WOOD"]
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
                                                        "type": "string",
                                                        "enum": [
                                                            "Classroom-Fixed Tables/Fixed Chairs", "Classroom-Fixed Tables/Movable Chairs", "Classroom-Fixed Tables/Moveable Chairs",
                                                            "Classroom-Fixed Tablets", "Classroom-Hybrid Furniture", "Classroom-Learn Lab", "Classroom-Movable Tables & Chairs", "Classroom-Movable Tablets", "Classroom-Moveable Tables & Chairs", "Classroom-Moveable Tablets"
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "properties": {
                                                    "IS": {
                                                        "enum": ["Room Type"],
                                                    },
                                                    "rooms_type": {
                                                        "type": "string",
                                                        "enum": [
                                                            "Active Learning", "Case Style", "Open Design General Purpose", "Small Group", "Studio Lab", "TBD", "Tiered Large Group"
                                                        ]
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
                                    "AND": {
                                        "enum": ["Greater than: a number"]
                                    },
                                    "GT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Room size"]
                                                    },
                                                    "rooms_seats": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                        ],
                                        "x-hints": {
                                            "form": {
                                                "selector": "GT",
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "AND": {
                                        "enum": ["Equal to: a number"]
                                    },
                                    "EQ": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "EQ": {
                                                        "enum": ["Room size"]
                                                    },
                                                    "rooms_seats": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                        ],
                                        "x-hints": {
                                            "form": {
                                                "selector": "EQ",
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "AND": {
                                        "enum": ["Lower than: a number"]
                                    },
                                    "LT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Room size"]
                                                    },
                                                    "rooms_seats": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                        ],
                                        "x-hints": {
                                            "form": {
                                                "selector": "LT",
                                            }
                                        }
                                    }
                                }
                            }
                            ],
                            "x-hints": {
                                "form": {
                                    "selector": "AND",
                                }
                            }
                        }
                    }
                }
            },
            {
                "properties": {
                    "WHERE": {
                        "enum": ["Or"],
                    },
                    "OR": {
                        "title": "Or = ",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "object",
                            "oneOf": [{},
                            {
                                "properties": {
                                    "OR": {
                                        "enum": ["Is"]
                                    },
                                    "IS": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "IS": {
                                                        "enum": ["Building Name"]
                                                    },
                                                    "rooms_shortname": {
                                                        "type": "string",
                                                        "enum": ["AERL", "ALRD", "ANGU", "ANSO", "AUDX", "BIOL", "BRKX", "BUCH", "CEME", "CHBE", "CHEM", "CIRS", "DMP", "EOSM", "ESB", "FNH", "FORW", "FRDM", "FSC", "GEOG", "HEBB", "HENN", "IBLC", "IONA", "LASR", "LSC", "LSK", "MATH", "MATX", "MCLD", "MCML", "MGYM", "ORCH", "OSBO", "PCOH", "PHRM", "SCRF", "SOWK", "SPPH", "SRC", "SWNG", "UCLL", "WESB", "WOOD"]
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
                                                        "type": "string",
                                                        "enum": [
                                                            "Classroom-Fixed Tables/Fixed Chairs", "Classroom-Fixed Tables/Movable Chairs", "Classroom-Fixed Tables/Moveable Chairs",
                                                            "Classroom-Fixed Tablets", "Classroom-Hybrid Furniture", "Classroom-Learn Lab", "Classroom-Movable Tables & Chairs", "Classroom-Movable Tablets", "Classroom-Moveable Tables & Chairs", "Classroom-Moveable Tablets"
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "properties": {
                                                    "IS": {
                                                        "enum": ["Room Type"],
                                                    },
                                                    "rooms_type": {
                                                        "type": "string",
                                                        "enum": [
                                                            "Active Learning", "Case Style", "Open Design General Purpose", "Small Group", "Studio Lab", "TBD", "Tiered Large Group"
                                                        ]
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
                                    "OR": {
                                        "enum": ["Greater than: a number"]
                                    },
                                    "GT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Room size"]
                                                    },
                                                    "rooms_seats": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                        ],
                                        "x-hints": {
                                            "form": {
                                                "selector": "GT",
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "OR": {
                                        "enum": ["Equal to: a number"]
                                    },
                                    "EQ": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "EQ": {
                                                        "enum": ["Room size"]
                                                    },
                                                    "rooms_seats": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                        ],
                                        "x-hints": {
                                            "form": {
                                                "selector": "EQ",
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "properties": {
                                    "OR": {
                                        "enum": ["Lower than: a number"]
                                    },
                                    "LT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [
                                            {},
                                            {
                                                "properties": {
                                                    "GT": {
                                                        "enum": ["Room size"]
                                                    },
                                                    "rooms_seats": {
                                                        "type": "number"
                                                    }
                                                }
                                            },
                                        ],
                                        "x-hints": {
                                            "form": {
                                                "selector": "LT",
                                            }
                                        }
                                    }
                                }
                            }
                            ],
                            "x-hints": {
                                "form": {
                                    "selector": "OR",
                                }
                            }
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
            "required": ["COLUMNS"],
            "properties": {
                "COLUMNS": {
                    "id": "columns",
                    "title": "Properties you want to display: min 1",
                    "minItems": 1,
                    "items": {
                        "type": "string",
                        "enum": ["", "rooms_shortname", "rooms_number", "rooms_seats", "rooms_type", "rooms_furniture"],
                        "enumNames": ["Empty", "Building name", "Room number", "Room size", "Room type", "Furniture type"]
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
                            "enum": ["", "UP", "DOWN"]
                        },
                        "keys": {
                            "id": "keys",
                            "title": "Sort with key(s) from columns",
                            "items": {
                                "type": "string",
                                "enum": ["", "rooms_shortname", "rooms_number", "rooms_seats", "rooms_type", "rooms_furniture"],
                                "enumNames": ["Empty", "Building name", "Room number", "Room size", "Room type", "Furniture type"]
                            },
                            "type": "array"
                        }
                    },
                    "type": "object"
                }
            },
            "type": "object"
        },
        "SPECIAL": {
            "id": "special",
            "title": "Advanced search term:  ",

            "oneOf": [
                {},
                {
                    "properties": {
                        "SPECIAL": {
                            "enum": ["Show all rooms over size X within Y meters of building Z"],
                        },
                    }
                },
                {
                    "properties": {
                        "SPECIAL": {
                            "enum": ["Show all rooms with type X within Y meters of building Z"],
                        }
                    }
                },
                {
                    "properties": {
                        "SPECIAL": {
                            "enum": ["Show all rooms with furniture X within Y meters of building Z"],
                        }
                    }
                },
            ],
            "x-hints": {
                "form": {
                    "selector": "SPECIAL",
                }
            },
            "type": "object"
        }
    },
    "type": "object"
}
