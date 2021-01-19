import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<Link to="/">
				<button onClick={actions.handleLogOut}>Log Out</button>
			</Link>
		</div>
	);
};
