import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Dashboard = ({ handleLogOut }) => (
	<div className="text-center mt-5">
		<button onClick={handleLogOut}>Log Out</button>
	</div>
);

Dashboard.propTypes = {
	handleLogOut: PropTypes.funct
};
