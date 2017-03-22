import * as React from "react";
import * as ReactDOM from "react-dom";
import { title_image } from "./images";
import { title, course } from "./lib";
import { Query, fields, combinators, operators } from "./Querybuilder";
import QueryBuilder from 'react-querybuilder';

const { render } = ReactDOM;


render(
    <div>{title_image}</div>,
    document.getElementById("react-container"),
);

render(<Query fields={fields} combinators={combinators} operators={operators}/>, document.querySelector('.container'));


