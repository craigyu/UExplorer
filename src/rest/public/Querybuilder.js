import * as React from "react";
import * as ReactDOM from "react-dom";


export const schema = {
    "title": "Course and Room explorer",
    "id": "query",
    "properties": {
        "WHERE": {
            "id": "where",
            "title": "Add filter(s) here",
            "enum": ["AND", "OR", "IS", "GT", "EQ", "LT", "NOT"],
            "type": "object",
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