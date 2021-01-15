import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => (
	<div className=" text-center pcGradientLightGreen h-100">
		<div className="h-50 inline-block">
			<h1>PETREP</h1>
			<h6>We Represent Pets</h6>
		</div>

		<div className="h-50 inline-block">
			<Link to="/signup">
				<button className="btn pcButton">Sign Up</button>
			</Link>
		</div>
	</div>
);
