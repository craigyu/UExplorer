import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example"),
);

const ubcIn = <h2> This is UBC Insight </h2>;
ReactDOM.render(
    ubcIn,
    document.getElementById("ubcin")
);


ReactDOM.render(
   <img src="https://leahhanvey.files.wordpress.com/2015/07/ubc-header-official.png" />,
    document.getElementById("headimg")
);


