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


const { render } = ReactDOM;

render(
    <div>{title_image}</div>,
    document.getElementById("react-container"),
);

//render(<Query fields={fields} combinators={combinators} operators={operators}/>, document.querySelector('.container'));


var onSubmit = function (data, buttonValue, errors) {
    if(buttonValue == "Submit"){
        var query = {};
        if(Object.keys(errors).length != 0){
            alert( 'Errors: ' + JSON.stringify(errors))
        }
        else {
            var queryWhere = data.WHERE;
            var filter, second;
            if(queryWhere.WHERE == "Empty"){
                queryWhere = {};
            }
            else{
                let wKeys = Object.keys(queryWhere);
                queryWhere = queryWhere[wKeys[1]];
                if(Array.isArray(queryWhere)){
                    let fistItem = queryWhere[0];
                    let filters = Object.keys(fistItem);
                    let len = filters.length;
                    filter = filters[0];
                    let arr = new Array();
                    for(let i = 0; i < len; i++){
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
                    alert(JSON.stringify(queryWhere));
                }
                else{
                    let filters = Object.keys(queryWhere);
                     filter = filters[0];
                     second = {[filters[1]] : queryWhere[filters[1]]};
                     queryWhere = {[filter] : second};
                }
            }
            Object.assign(query, {"WHERE": queryWhere});
            alert('Data  : ' + JSON.stringify(query));
        }
    }

    // alert('Data  : ' + JSON.stringify(data) + '\n' +
    //     'Button: ' + buttonValue + '\n' +
    //     'Errors: ' + JSON.stringify(errors));
};

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
    </TabPanel>
    ,
    document.getElementById("query"));
