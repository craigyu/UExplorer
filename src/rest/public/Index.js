import * as React from "react";
import * as ReactDOM from "react-dom";

import { title_image } from "./images";
import { title, course } from "./lib";
import { schema } from "./Querybuilder";
import { room_schema } from "./Rqb";
import TabPanel, { TabStrip } from 'react-tab-panel'
import styles from './stylesheets/tab.css';
import qStyles from './stylesheets/queryStyle.css';
import Form from "react-formzilla";
import JsonTable from "react-json-table";
import "./stylesheets/table.css";
import GoogleMapReact from 'google-map-react';
const { render } = ReactDOM;


render(
    <div>{title_image}</div>,
    document.getElementById("react-container"),
);

//render(<Query fields={fields} combinators={combinators} operators={operators}/>, document.querySelector('.container'));


function queryAsyncRequest(query) {
    let request = require("superagent");
    request.post("http://localhost:4321/query")
        .send(query)
        .end((err,res) => {
            if(err) {
                alert(err)
            }
            alert(res.text);
        });

}


var onSubmit = function (data, buttonValue, errors) {
    if (buttonValue == "Submit") {
        var query = {};
        if (Object.keys(errors).length != 0) {
            alert('Errors: ' + JSON.stringify(errors))
        }
        else {
            var queryWhere = data.WHERE;
            var filter, second;
            if (queryWhere.WHERE == "Empty") {
                queryWhere = {};
            }
            else {
                let wKeys = Object.keys(queryWhere);
                queryWhere = queryWhere[wKeys[1]];
                if (Array.isArray(queryWhere)) {
                    let fistItem = queryWhere[0];
                    let filters = Object.keys(fistItem);
                    let len = filters.length;
                    filter = filters[0];
                    let arr = new Array();
                    for (let i = 0; i < len; i++) {
                        let obj = queryWhere[i];
                        let objKeys = Object.keys(obj);
                        let tempFilter = objKeys[1];
                        let val = obj[tempFilter];
                        let valKeys = Object.keys(val);
                        let filterKey = valKeys[1];
                        let filterVal = val[filterKey];
                        let filterObj = {[filterKey]: filterVal};
                        let realFilter = {[tempFilter]: filterObj};
                        arr.push(realFilter);
                    }
                    queryWhere = {[filter]: arr};
                }
                else {
                    let filters = Object.keys(queryWhere);
                    filter = filters[0];
                    second = {[filters[1]]: queryWhere[filters[1]]};
                    queryWhere = {[filter]: second};
                }
            }
            Object.assign(query, {"WHERE": queryWhere});
            let queryOption = data.OPTIONS;
            if ("TRANSFORMATIONS" in data) {
                let queryTrans = data.TRANSFORMATIONS.TRANSFORMATIONS;
                let trans = {};
                switch (queryTrans) {
                    case "Highest Average":
                        trans = {
                            "GROUP": ["courses_dept", "courses_id"],
                            "APPLY": [{
                                "maxAverage": {
                                    "MAX": "courses_avg"
                                }
                            }]
                        };
                        queryOption.COLUMNS.unshift("maxAverage");
                        if ("ORDER" in queryOption) {
                            queryOption.ORDER.keys.unshift("maxAverage");
                        }
                        break;

                    case "Lowest Average":
                        trans = {
                            "GROUP": ["courses_dept", "courses_id"],
                            "APPLY": [{
                                "minAverage": {
                                    "MIN": "courses_avg"
                                }
                            }]
                        };
                        queryOption.COLUMNS.unshift("minAverage");
                        if ("ORDER" in queryOption) {
                            queryOption.ORDER.keys.unshift("minAverage");
                        }
                        break;

                    case "Most Sections":
                        trans = {
                            "GROUP": ["courses_dept", "courses_id"],
                            "APPLY": [{
                                "maxSections": {
                                    "COUNT": "courses_uuid"
                                }
                            }]
                        };
                        queryOption.COLUMNS.unshift("maxSections");
                        if ("ORDER" in queryOption) {
                            queryOption.ORDER.keys.unshift("maxSections");
                        }
                        if (query.WHERE == {}) {
                            query.WHERE = {"NOT": {"EQ": {"courses_year": 1900}}}
                        }
                        else {
                            let filters = Object.keys(query.WHERE);
                            let filter = filters[0];
                            if (filter == "AND" || filter == "OR") {
                                query.WHERE.filter.push({"NOT": {"EQ": {"courses_year": 1900}}})
                            }
                            else {
                                let temp = query.WHERE;
                                query.WHERE = {"AND": [temp, {"NOT": {"EQ": {"courses_year": 1900}}}]}
                            }
                        }
                        break;

                    case "Most Passes":
                        trans = {
                            "GROUP": ["courses_dept", "courses_id"],
                            "APPLY": [{
                                "mostPasses": {
                                    "MAX": "courses_pass"
                                }
                            }]
                        };
                        queryOption.COLUMNS.unshift("mostPasses");
                        if ("ORDER" in queryOption) {
                            queryOption.ORDER.keys.unshift("mostPasses");
                        }
                        if (query.WHERE == {}) {
                            query.WHERE = {"NOT": {"EQ": {"courses_year": 1900}}}
                        }
                        else {
                            let filters = Object.keys(query.WHERE);
                            let filter = filters[0];
                            if (filter == "AND" || filter == "OR") {
                                query.WHERE.filter.push({"NOT": {"EQ": {"courses_year": 1900}}})
                            }
                            else {
                                let temp = query.WHERE;
                                query.WHERE = {"AND": [temp, {"NOT": {"EQ": {"courses_year": 1900}}}]}
                            }
                        }
                        break;

                    case "Most Fails":
                        trans = {
                            "GROUP": ["courses_dept", "courses_id"],
                            "APPLY": [{
                                "mostFails": {
                                    "MAX": "courses_fail"
                                }
                            }]
                        };
                        queryOption.COLUMNS.unshift("mostFails");
                        if ("ORDER" in queryOption) {
                            queryOption.ORDER.keys.unshift("mostFails");
                        }
                        if (query.WHERE == {}) {
                            query.WHERE = {"NOT": {"EQ": {"courses_year": 1900}}}
                        }
                        else {
                            let filters = Object.keys(query.WHERE);
                            let filter = filters[0];
                            if (filter == "AND" || filter == "OR") {
                                query.WHERE.filter.push({"NOT": {"EQ": {"courses_year": 1900}}})
                            }
                            else {
                                let temp = query.WHERE;
                                query.WHERE = {"AND": [temp, {"NOT": {"EQ": {"courses_year": 1900}}}]}
                            }
                        }
                        break;

                    default:
                        alert("Something's wrong, please refresh the page");

                }
                Object.assign(query, {"TRANSFORMATIONS": trans});
            }
            Object.assign(query, {"OPTIONS": queryOption});
            // alert('Data  : ' + JSON.stringify(query));
            queryAsyncRequest(query);


        }
    }
};



function roomSchedule(courses, rooms) {
    // filter out the duplicate sections and deal first
    allCourses = [];
    nonDuplicatedCourses = [];
    duplicatedCourses = [];
    finalProduct = [];
    // naive approach for pushing duplicated items
    // Proceed with Scheduling, MWF 1 hour block meaning 9 blocks
    // T TH 1.5 hour blocks meaning 6 blocks

    // associate each course to a room with a given time

    // schedule all courses to rooms
    let switching = 0; // max is 1, when two then need to schedule past boundary
    let startTime = 800; // time in 100s
    let hasSwapped = false; // only to keep track of when i switched past boundary
    for (let i = 0; i < allCourses.length(); i++) {
        let acc = 0;

        if (switching % 2 == 0) { // if even #: treat as MWF
            acc = 100;
        } else if (switching % 2 == 1) { // if odd #: treat as T TH
            acc = 130;
        }
        // two cases: before 1700 or after 1700
        if (switching >= 2) {
            startTime = 1700;
            hasSwapped = true;
        }


        let scheduled = {
            course: allCourses[i],
            room: rooms[i],
            time: startTime,
            day: switching % 2 // 0 is mwf 1 is t th
        };
        finalProduct.push(scheduled);
        startTime += acc;

        if (startTime == 1700 && !hasSwapped) { // this is to check for normal scheduling
            switching++;
        } else if (startTime == 2300 && hasSwapped) { // this is for compensating scheduling
            switching++
        } else { // we cant schedule anymore, not enough time slots for the given courses
            break;
        }
    }



    // check for duplicates that have the same startTime

    let toSearchDuplicatedScheduled = finalProduct.filter((value) => {
        // not sure if this works, checking to see if it includes my course object
        return duplicatedCourses.includes(value.course);
    });


    for (let i = 0; i < toSearchDuplicatedScheduled; i++) {
        for (let j = 0; j < toSearchDuplicatedScheduled; j++) {
            duplicationSearchRecursion(toSearchDuplicatedScheduled[i], toSearchDuplicatedScheduled[j]);


            function duplicationSearchRecursion(toSearch1, toSearch2) {
                if (toSearch1.time == toSearch2[j].time
                    && toSearch1.day == toSearch2.day) {
                    // found a duplicate schedule


                    let theCulprit = toSearch1;
                    let theCulpritTime = toSearch1.time // grabbing the time of duplication
                    let theRemedyIndex = finaProduct.indexOf(theCulprit) + 1;
                    let theRemedy = finalProduct[theRemedyIndex];
                    let theRemedyTime = theRemedy.time // grabbing the time for the +1

                    // captured both values: theCulprit is the one coinciding with toSearch2
                    // theRemedy is and should be the next time down (ie 9:00 should be 10:00 course)



                    // swapping times
                    theCulprit.time = theRemedyTime;
                    theRemedy.time = theCulpritTime


                    finalProduct[theRemedyIndex - 1] = theCulprit;
                    finalProduct[theRemedyIndex] = theRemedy;

                    // successfully swapped and put back into the array but could be possible the swapped are duplicates



                    // finding the next culprit
                    theNextCulprit = finalProduct.find((value) => {
                        return value.course.courses_id == theRemedy.course.courses_id
                            && value.course.courses_dept == theRemedy.course.courses_dept

                    });

                    if (theNextCulprit != undefined) {
                        duplicationSearchRecursion(theRemedy, theNextCulprit)
                    }
                }


            }
        }



    }




}

render(
    <TabPanel
        tabAlign="center"
    //try "stretch", "space-between", "start", "end"
    >
        <div tabTitle="Courses Explorer">
            <Form schema={schema}
                onSubmit={onSubmit} />
        </div>
        <div tabTitle="Rooms Explorer">
            <Form schema={room_schema}
                onSubmit={onSubmit} />
        </div>
        <div tabTitle="Rooms Scheduling">
            <h3> put your shit here </h3>
        </div>
    </TabPanel>
    ,
    document.getElementById("query"));

var resultQuery = [];




render(
    <JsonTable rows={resultQuery} />,
    document.getElementById("table")
)

render(
    <GoogleMapReact
        defaultCenter={{ lat: 49.2606052, lng: -123.2459939 }}
        defaultZoom={13}
    >
    </GoogleMapReact>,
    document.getElementById("map")
)

