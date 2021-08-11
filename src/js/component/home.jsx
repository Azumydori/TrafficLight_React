import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficLight.jsx";

//create your first component
const Home = () => {
	const [color, setColor] = useState({
		redLight: "stop",
		yellowLight: "warning",
		greenLight: "go"
	});

	const changeColor = () => {};

	return (
		<Fragment>
			<div className="lightBox">
				<div className="lights">
					<TrafficLight
						color={color.redLight}
						clickChange={() => {
							setColor({
								redLight: "stop glow",
								yellowLight: "warning",
								greenLight: "go"
							});
						}}
					/>

					<TrafficLight
						color={color.yellowLight}
						clickChange={() => {
							setColor({
								redLight: "stop",
								yellowLight: "warning glow",
								greenLight: "go"
							});
						}}
					/>

					<TrafficLight
						color={color.greenLight}
						clickChange={() => {
							setColor({
								redLight: "stop",
								yellowLight: "warning",
								greenLight: "go glow "
							});
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};
export default Home;
