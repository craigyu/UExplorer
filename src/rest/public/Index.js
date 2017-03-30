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
                        let filterObj = { [filterKey]: filterVal };
                        let realFilter = { [tempFilter]: filterObj };
                        arr.push(realFilter);
                    }
                    queryWhere = { [filter]: arr };
                }
                else {
                    let filters = Object.keys(queryWhere);
                    filter = filters[0];
                    second = { [filters[1]]: queryWhere[filters[1]] };
                    queryWhere = { [filter]: second };
                }
            }
            Object.assign(query, { "WHERE": queryWhere });
            alert('Data  : ' + JSON.stringify(query));
        }
    }
};



function roomSchedule(courses,rooms) {
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
    for(let i = 0; i < allCourses.length(); i++) {
        let acc = 0;

        if(switching % 2 == 0) { // if even #: treat as MWF
             acc = 100;
        } else if (switching % 2 == 1) { // if odd #: treat as T TH
            acc = 130;
        }
        // two cases: before 1700 or after 1700
        if(switching >= 2) {
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

        if(startTime == 1700 && !hasSwapped) { // this is to check for normal scheduling
            switching++;
        } else if (startTime == 2300 && hasSwapped) { // this is for compensating scheduling
            switching++
        } else { // we cant schedule anymore, not enough time slots for the given courses
            break;
        }
    }



    // check for duplicates that have the same startTime

    let toSearchDuplicatedScheduled = finalProduct.filter((value) => {
        return duplicatedCourses.includes(value.course); // not sure if this works, checking to see if it includes my course object
    });


    for(let i = 0; i < toSearchDuplicatedScheduled; i++) {
        for(let j = 0; j < toSearchDuplicatedScheduled; j++) {

            if(toSearchDuplicatedScheduled[i].time == toSearchDuplicatedScheduled[j].time
            && toSearchDuplicatedScheduled[i].day == toSearchDuplicatedScheduled[j].day) {



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
        <div>
            <div tabTitle="Rooms Scheduling">
            </div>
        </div>
    </TabPanel>
    ,
    document.getElementById("query"));

var result = [
    { courses_dept: 'elec', courses_avg: 76.48 },
    { courses_dept: 'elec', courses_avg: 76.48 },
    { courses_dept: 'dent', courses_avg: 82.5 },
    { courses_dept: 'dent', courses_avg: 82.5 },
    { courses_dept: 'dent', courses_avg: 85.4 },
    { courses_dept: 'dent', courses_avg: 85.4 }
];



render(
    <JsonTable rows={result} />,
    document.getElementById("table")
)

render(
      <GoogleMapReact
        defaultCenter={{lat: 49.2606052, lng: -123.2459939}}
        defaultZoom={13}
      >
      </GoogleMapReact>,
      document.getElementById("map")
)

