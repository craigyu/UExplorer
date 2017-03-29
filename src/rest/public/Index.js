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
    alert('Data  : ' + JSON.stringify(data) + '\n' +
        'Button: ' + buttonValue + '\n' +
        'Errors: ' + JSON.stringify(errors));
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
