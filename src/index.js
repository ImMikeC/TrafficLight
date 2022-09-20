//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.scss";

//import your own components
import TrafficLight from "./App";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));