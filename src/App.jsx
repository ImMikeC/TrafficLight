import React from "react";
import PropTypes from "prop-types";
import "./styles/index.scss";


const App = props => {
	const { seg } = props;
	return (
		<div className="reloj">
			<i className="far fa-clock icono"></i>
			{String(seg)
				.padStart(6, "0")
				.split("")
				.map((number, index) => (
					<div className="modulo" key={index}>
						{number}
					</div>
				))}
		</div>
	);
};
App.propTypes = {
	seg: PropTypes.func
};
export default App;