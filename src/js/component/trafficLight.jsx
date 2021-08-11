import React from "react";
import PropTypes from "prop-types";

//rendering
const TrafficLight = props => {
	return (
		<div
			className={"light ".concat(props.color)}
			onClick={() => {
				props.clickChange(props.color);
			}}></div>
	);
};

TrafficLight.propTypes = {
	color: PropTypes.string,
	clickChange: PropTypes.func
};

export default TrafficLight;
