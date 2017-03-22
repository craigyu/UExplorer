import * as React from "react";
var text = require('./lib.json');

export const title = (
    <h1 id = "title"
        className = "header"
        style ={{backgroundImage: "https://leahhanvey.files.wordpress.com/2015/07/ubc-header-official.png", color: "white", fontWeight: 'bold'}}>
        {text.title}
        </h1>
)

export const course = (
    <h1 id = "course"
        className = "header"
        style ={{backgroundColor: "#012144", color: "white", fontWeight: 200, font: "arial", allowFontScaling: false, fontFamily: "arial", display: "block", border:0, margin: 0}}>
        {text.course}
        </h1>
)

