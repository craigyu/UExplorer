import * as React from "react";
import * as ReactDOM from "react-dom";
import { title_image } from "./images";
import { title, course } from "./lib";
import { schema } from "./Querybuilder";
//import QueryBuilder from 'react-querybuilder';
import Form from "react-formzilla";

const { render } = ReactDOM;

render(
    <div>{title_image}</div>,
    document.getElementById("react-container"),
);

//render(<Query fields={fields} combinators={combinators} operators={operators}/>, document.querySelector('.container'));


var onSubmit = function(data, buttonValue, errors) {
  alert('Data  : '+JSON.stringify(data)+'\n'+
        'Button: '+buttonValue+'\n'+
        'Errors: '+JSON.stringify(errors));
};

render(<Form schema   = {schema}
             onSubmit = {onSubmit} />,
             document.getElementById("query"));
