import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Dashboard = ({ handleLogOut }) => (
	<div className="text-center mt-5">
		<Link to="/">
			<button onClick={handleLogOut}>Log Out</button>
		</Link>
	</div>
);

Dashboard.propTypes = {
	handleLogOut: PropTypes.funct
};
