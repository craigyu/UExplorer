import * as React from "react";
import * as ReactDOM from "react-dom";
import { title_image } from "./images";
import { title, course } from "./lib";
import { schema } from "./Querybuilder";
import { room_schema } from "./Rqb";
import { sched_schema } from "./Sched";
import TabPanel, { TabStrip } from 'react-tab-panel'
import styles from './stylesheets/tab.css';
import qStyles from './stylesheets/queryStyle.css';
import Form from "react-formzilla";
import JsonTable from "react-json-table";
import "./stylesheets/table.css";
import GoogleMapReact from 'google-map-react';
import { latlon } from "./Latlon"

const { render } = ReactDOM;
var Promise = require("promise");

render(
    <div>{title_image}</div>,
    document.getElementById("react-container"),
);

//render(<Query fields={fields} combinators={combinators} operators={operators}/>, document.querySelector('.container'));


class SelectTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {row: false, cell: false, sort: false};
        this.onClickCell = this.onClickCell.bind(this);
    }


    render() {
        let items = this.props.rows.slice();

        return (<JsonTable
            rows={items}
            onClickCell={ () => this.onClickCell(items) }/>);
    }



    onClickCell(items) {
        var hello = latlon[items[0].rooms_shortname]
        var hello2 = hello.rooms_lat + " " +  hello.rooms_lon;

        alert(hello2);
        this.setState({cell: true});
    }
}







function queryAsyncRequest(query) {
    return new Promise((fulfill, reject) => {
        let request = require("superagent");
        request.post("http://localhost:4321/query")
            .send(query)
            .end((err, res) => {
                if (err) {
                    reject(err);
                }
                fulfill(res.body.result);
            });
    })
}

var crOnSubmit = function (data, buttonValue, errors) {
    if (buttonValue == "Submit") {
        if (typeof data == "undefined") {
            alert("stop trolling")
        }
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
                        let obj = queryWhere[i]; let objKeys = Object.keys(obj); let tempFilter = objKeys[1]; let val = obj[tempFilter]; let valKeys = Object.keys(val); let filterKey = valKeys[1]; let filterVal = val[filterKey]; let filterObj = { [filterKey]: filterVal }; let realFilter = { [tempFilter]: filterObj };
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
            let dataKeys = Object.keys(data);
            let queryOption = data.OPTIONS;
            if (dataKeys.includes("TRANSFORMATIONS")) {
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
                            query.WHERE = { "NOT": { "EQ": { "courses_year": 1900 } } }
                        }
                        else {
                            let filters = Object.keys(query.WHERE);
                            let filter = filters[0];
                            if (filter == "AND" || filter == "OR") {
                                query.WHERE.filter.push({ "NOT": { "EQ": { "courses_year": 1900 } } })
                            }
                            else {
                                let temp = query.WHERE;
                                query.WHERE = { "AND": [temp, { "NOT": { "EQ": { "courses_year": 1900 } } }] }
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
                            query.WHERE = { "NOT": { "EQ": { "courses_year": 1900 } } }
                        }
                        else {
                            let filters = Object.keys(query.WHERE);
                            let filter = filters[0];
                            if (filter == "AND" || filter == "OR") {
                                query.WHERE.filter.push({ "NOT": { "EQ": { "courses_year": 1900 } } })
                            }
                            else {
                                let temp = query.WHERE;
                                query.WHERE = { "AND": [temp, { "NOT": { "EQ": { "courses_year": 1900 } } }] }
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
                            query.WHERE = { "NOT": { "EQ": { "courses_year": 1900 } } }
                        }
                        else {
                            let filters = Object.keys(query.WHERE);
                            let filter = filters[0];
                            if (filter == "AND" || filter == "OR") {
                                query.WHERE.filter.push({ "NOT": { "EQ": { "courses_year": 1900 } } })
                            }
                            else {
                                let temp = query.WHERE;
                                query.WHERE = { "AND": [temp, { "NOT": { "EQ": { "courses_year": 1900 } } }] }
                            }
                        }
                        break;

                    default:
                        alert("Something's wrong, please refresh the page");

                }
                Object.assign(query, { "TRANSFORMATIONS": trans });
            }
            Object.assign(query, { "OPTIONS": queryOption });
            //alert('Data  : ' + JSON.stringify(data));
            // alert("it gets here")
            // alert(JSON.stringify(data));
            // special search for rooms
            if (dataKeys.includes("SPECIAL")) {
                let wKeys = Object.keys(query.WHERE);
                if (!wKeys.includes("AND")) {
                    alert("Please follow the rules, refresh and retry")
                }
                let qSpecial = data.SPECIAL.SPECIAL;
                let dist = data.SPECIAL.dist;
                //Earth’s radius, sphere
                let R = 6378137;
                let and = query.WHERE.AND;
                let Z = ""; let index;

                for (let i = 0; i < and.length; i++) {
                    let item = and[i];
                    let keys = Object.keys(item);
                    let key = keys[0];
                    if (key == "IS") {
                        let subObj = item.IS;
                        let subks = Object.keys(subObj);
                        let subk = subks[0];
                        if (subk == "rooms_shortname") {
                            Z = item.IS.rooms_shortname;
                            index = i;
                        }
                    }
                }
                //alert(Z);
                if (Z == "") {
                    alert("Please follow the rules")
                }
                let zLatlon = latlon[Z];
                let zLat = zLatlon["rooms_lat"];
                let zLon = zLatlon["rooms_lon"];
                let selected = [];
                let latlonKeys = Object.keys(latlon);
                //alert(latlonKeys.toString());
                for (let i = 0; i < latlonKeys.length; i++) {
                    let leName = latlonKeys[i];
                    let obj = latlon[leName];
                    let objLat = obj["rooms_lat"];
                    let objLon = obj["rooms_lon"];
                    if (leName == Z) {
                        continue;
                    }
                    else {
                        var dLat = deg2rad(objLat - zLat);  // deg2rad below
                        var dLon = deg2rad(objLon - zLon);
                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(zLat)) * Math.cos(deg2rad(objLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = (R * c)  // Distance in meters
                        if (d < dist) {
                            selected.push(leName);
                        }
                    }
                }
                if (selected == []) alert("Range too small, no result found");
                else {
                    let orArr = [];
                    orArr.push(and[index]);
                    for (let i = 0; i < selected.length; i++) {
                        let name = selected[i];
                        let temp = { "IS": { "rooms_shortname": name } };
                        orArr.push(temp);
                    }
                    query.OPTIONS.COLUMNS.unshift("rooms_name");
                    if ("ORDER" in query.OPTIONS) {
                        query.OPTIONS.ORDER.keys.unshift("rooms_name");
                    }
                    and[index] = { "OR": orArr };
                    query.WHERE.AND = and;
                }
            }
            //alert(JSON.stringify(query));
        }


        queryAsyncRequest(query)
            .then((data) => {
            render(
                <SelectTable rows={data} />,
                document.getElementById("table")
            )
        })
            .catch((err) => {
                alert(err);
            })
        data = {};
        query = {};
    }


};

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function roomSchedule(courses, rooms) {
    // filter out the duplicate sections and deal first
    let allCourses = courses;
    let finalProduct = [];
    // naive approach for pushing duplicated items
    // Proceed with Scheduling, MWF 1 hour block meaning 9 blocks
    // T TH 1.5 hour blocks meaning 6 blocks

    // associate each course to a room with a given time

    // schedule all courses to rooms
    let switching = 0; // max is 1, when two then need to schedule past boundary
    let startTime = 800; // time in 100s
    let hasSwapped = false; // only to keep track of when i switched past boundary
    for (let i = 0; i < allCourses.length; i++) {
        for (let j = 0; j < allCourses[i].length; j++) {
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
                course: courses[i][j],
                room: rooms[j],
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
    }




    // for (let i = 0; i < toSearchDuplicatedScheduled; i++) {
    //     for (let j = 0; j < toSearchDuplicatedScheduled; j++) {
    //         duplicationSearchRecursion(toSearchDuplicatedScheduled[i], toSearchDuplicatedScheduled[j]);
    //
    //
    //         function duplicationSearchRecursion(toSearch1, toSearch2) {
    //             if (toSearch1.time == toSearch2[j].time
    //                 && toSearch1.day == toSearch2.day) {
    //                 // found a duplicate schedule
    //
    //
    //                 let theCulprit = toSearch1;
    //                 let theCulpritTime = toSearch1.time // grabbing the time of duplication
    //                 let theRemedyIndex = finaProduct.indexOf(theCulprit) + 1;
    //                 let theRemedy = finalProduct[theRemedyIndex];
    //                 let theRemedyTime = theRemedy.time // grabbing the time for the +1
    //
    //                 // captured both values: theCulprit is the one coinciding with toSearch2
    //                 // theRemedy is and should be the next time down (ie 9:00 should be 10:00 course)
    //
    //
    //
    //                 // swapping times
    //                 theCulprit.time = theRemedyTime;
    //                 theRemedy.time = theCulpritTime
    //
    //
    //                 finalProduct[theRemedyIndex - 1] = theCulprit;
    //                 finalProduct[theRemedyIndex] = theRemedy;
    //
    //                 // successfully swapped and put back into the array but could be possible the swapped are duplicates
    //
    //
    //
    //                 // finding the next culprit
    //                 theNextCulprit = finalProduct.find((value) => {
    //                     return value.course.courses_id == theRemedy.course.courses_id
    //                         && value.course.courses_dept == theRemedy.course.courses_dept
    //
    //                 });
    //
    //                 if (theNextCulprit != undefined) {
    //                     duplicationSearchRecursion(theRemedy, theNextCulprit)
    //                 }
    //             }
    //         }
    //     }
    // }
}

var schedOnSubmit = function (data, buttonValue, errors) {
    if (buttonValue == "Submit") {
        let courseQuery;
        let roomQuery;
        if (Object.keys(errors).length != 0) {
            alert('Errors: ' + JSON.stringify(errors))
        }
        let cKeys = Object.keys(data.courses);

        if (cKeys.includes("dept") && cKeys.includes("number")) {
            let dept = data.courses.dept;
            let number = data.courses.number;
            courseQuery = {
                "WHERE": {
                    "AND": [
                        { "IS": { "courses_dept": dept } },
                        { "IS": { "courses_id": number } },
                        { "EQ": { "courses_year": 2014 } }
                    ]
                },
                "OPTIONS": {
                    "FORM": "TABLE",
                    "COLUMNS": ["courses_dept", "courses_id"]
                }
            }
        }
        else if (cKeys.includes("dept") && (!cKeys.includes("number"))) {
            let dept = data.courses.dept;
            courseQuery = {
                "WHERE": {
                    "AND": [
                        { "IS": { "courses_dept": dept } },
                        { "EQ": { "courses_year": 2014 } }
                    ]
                },
                "OPTIONS": {
                    "FORM": "TABLE",
                    "COLUMNS": ["courses_dept", "courses_id"]
                }
            }
        }
        else if (cKeys.includes("number") && (!cKeys.includes("dept"))) {
            let number = data.courses.number;
            courseQuery = {
                "WHERE": {
                    "AND": [
                        { "IS": { "courses_id": number } },
                        { "EQ": { "courses_year": 2014 } }
                    ]
                },
                "OPTIONS": {
                    "FORM": "TABLE",
                    "COLUMNS": ["courses_dept", "courses_id"]
                }
            }
        }

        let type = data.rooms.build.build;

        if (type == "One building") {
            let building = data.rooms.build.buildarr;
            roomQuery = {
                "WHERE": {
                    "IS": { "rooms_shortname": building }
                },
                "OPTIONS": {
                    "FORM": "TABLE",
                    "COLUMNS": ["rooms_name"]
                }
            }
        }
        else {
            let building = data.rooms.build.thebuild;
            let dist = data.rooms.build.dist;
            let bLatLon = latlon[building];
            let bLat = bLatLon["rooms_lat"];
            let bLon = bLatLon["rooms_lon"];
            let latlonKeys = Object.keys(latlon);
            let R = 6378137;
            let selected = [];
            for (let i = 0; i < latlonKeys.length; i++) {
                let leName = latlonKeys[i];
                let obj = latlon[leName];
                let objLat = obj["rooms_lat"];
                let objLon = obj["rooms_lon"];
                if (leName == building) {
                    continue;
                }
                else {
                    var dLat = deg2rad(objLat - bLat);  // deg2rad below
                    var dLon = deg2rad(objLon - bLon);
                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(bLat)) * Math.cos(deg2rad(objLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var d = (R * c)  // Distance in meters
                    if (d < dist) {
                        selected.push(leName);
                    }
                }
            }
            if (selected == []) alert("Range too small, no result found");
            else {
                let orArr = [];
                orArr.push({ "IS": { "rooms_shortname": building } })
                for (let i = 0; i < selected.length; i++) {
                    let name = selected[i];
                    let temp = { "IS": { "rooms_shortname": name } };
                    orArr.push(temp);
                }
                roomQuery = {
                    "WHERE": {
                        "OR": orArr
                    },
                    "OPTIONS": {
                        "FORM": "TABLE",
                        "COLUMNS": ["rooms_name"]
                    }
                }
            }
        }
        var promises = []
        promises.push(queryAsyncRequest(courseQuery))
        promises.push(queryAsyncRequest(roomQuery))

        Promise.all(promises)
            .then((data) => {
                let data1 = data[0];
                let data2 = data[1];
                if (data1.length == 0 || data2.length == 0) {
                    alert("Nothing found");
                }
                else {
                    let group = groupParser(["courses_id"], data1);
                    for (let i = 0; i < group.length; i++) {
                        let arr = group[i];
                        let len = arr.length;
                        let num = Math.ceil(len / 3);
                        let dif = len - num;
                        for (let j = 0; j < dif; j++) {
                            group[i].shift();
                        }
                    }
                    let allrooms = [];
                    for(let i = 0; i < data2.length; i++){
                        let temp = data2[i];
                        let name = temp["rooms_name"];
                        allrooms.push(name);
                    }
                    var sched = roomSchedule(group, allrooms);
                    render(
                        <JsonTable rows={sched} />,
                        document.getElementById("table")
                    );
                }
                //alert(JSON.stringify(data));
            })
            .catch((err) => {
                alert(err);
            })

    }
};

function groupParser(group, data) {
    let gLen = group.length;
    let groups = {};
    function groupBy(array, f) {
        array.forEach(function (o) {
            var group = f(o);
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        })
    }

    var result = groupBy(data, function (item) {
        let arr = new Array();
        for (let i = 0; i < gLen; i++) {
            if (typeof item[group[i]] != 'undefined') {
                arr.push(item[group[i]])
            }
        }
        return arr;
    });
    return result;
}
render(
    <TabPanel
        tabAlign="center"
    //try "stretch", "space-between", "start", "end"
    >
        <div tabTitle="Courses Explorer">
            <Form schema={schema}
                onSubmit={crOnSubmit} />
        </div>
        <div tabTitle="Rooms Explorer">
            <Form schema={room_schema}
                onSubmit={crOnSubmit} />
        </div>
        <div tabTitle="Rooms Scheduling">
            <Form schema={sched_schema}
                onSubmit={schedOnSubmit} />
        </div>
    </TabPanel>
    ,
    document.getElementById("query"));



var emptyArr = [];

render(
    <SelectTable rows={emptyArr} />,
    document.getElementById("table")
);

render(
    <GoogleMapReact
        defaultCenter={{ lat: 49.2606052, lng: -123.2459939 }}
        defaultZoom={13}
    >
    </GoogleMapReact>,
    document.getElementById("map")
)