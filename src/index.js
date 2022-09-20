import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./styles/index.scss";

let seg = 0;

setInterval(() => {
	ReactDOM.render(
		<App 
		seg={seg} />,
		document.querySelector("#root")
	);
	seg += 1;
}, 1000);