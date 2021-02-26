import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/dashboard.scss";
import { Calendar } from "../views/calendar";
import { useHistory } from "react-router-dom";
//import { Link } from "react-router-dom";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		actions.getApiToken();
		actions.getAdoptablePets();
	}, []);

	return (
		<div className="bgLanding" style={{ height: "auto" }}>
			<div style={{ padding: "40px" }} />

			<div className="main-header w-100">
				<div className="pottaOne">
					Welcome {store.user.username},<div>How are you today?</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div className="row">
				<div className="col overviewcard boxShadow" onClick={() => history.push("/pets")}>
					<div className="circle blue">
						<i className="fas fa-bone align-middle" />
					</div>
					<div className="cardFont">Your Pets</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/habitats")}>
					<div className="circle green">
						<i className="fas fa-globe-americas align-middle" />
					</div>
					<div className="cardFont">Habitats</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/calendar")}>
					<div className="circle red">
						<i className="far fa-calendar-alt align-middle" />
					</div>
					<div className="cardFont">Calendar</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div className="row">
				<div className="col overviewcard boxShadow" onClick={() => history.push("/lostpets")}>
					<div className="circle yellow">
						<i className="fas fa-paw align-middle" />
					</div>
					<div className="cardFont">Lost Pets</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/foundpets")}>
					<div className="circle orange">
						<i className="fas fa-paw align-middle" />
					</div>
					<div className="cardFont">Found Pets</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/profile")}>
					<div className="circle purple">
						<i className="fas fa-user-circle align-middle" />
					</div>
					<div className="cardFont">Profile</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div>
				<div className="row">
					<div className="col">
						<div className="card text-center ">
							<div className="card-header">Your Events</div>
							<div className="card-body">
								<Calendar />
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card text-center ">
							<div className="card-header">Your Latest Messages</div>
							<div className="card-body darkerGreen">
								{/* starts here */}
								<div className="card text-center">
									<div className="card-header">From Vivian</div>
									<div className="card-body" style={{ background: "white", color: "black" }}>
										<p className="card-text">
											Hey, I believe you found my dog! Can you call me at ###-###-####? Thanks!
										</p>
										<a href="#" className="btn btn-primary">
											Go to your conversation with Vivian!
										</a>
									</div>
								</div>
								{/* ends here */}
								{/* starts here */}
								<div className="card text-center">
									<div className="card-header">From Vivian</div>
									<div className="card-body" style={{ background: "white", color: "black" }}>
										<p className="card-text">
											Hey, I believe you found my dog! Can you call me at ###-###-####? Thanks!
										</p>
										<a href="#" className="btn btn-primary">
											Go to your conversation with Vivian!
										</a>
									</div>
								</div>
								{/* ends here */}
								{/* starts here */}
								<div className="card text-center">
									<div className="card-header">From Vivian</div>
									<div className="card-body" style={{ background: "white", color: "black" }}>
										<p className="card-text">
											Hey, I believe you found my dog! Can you call me at ###-###-####? Thanks!
										</p>
										<a href="#" className="btn btn-primary">
											Go to your conversation with Vivian!
										</a>
									</div>
								</div>
								{/* ends here */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row ">
				<div className="col">
					<div className="card text-center ">
						<div className="card-header">Services</div>
						<div className="card-body">
							<div className="overviewcard boxShadow" onClick={() => history.push("/adoptpage")}>
								<div className="circle pink">
									<i className="fas fa-paw align-middle" />
								</div>
								<div className="cardFont">Adopt A Pet!</div>
							</div>
							<div className="overviewcard boxShadow" onClick={() => history.push("/map")}>
								<div className="circle brown">
									<i className="fas fa-map align-middle" />
								</div>
								<div className="cardFont">Map</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
