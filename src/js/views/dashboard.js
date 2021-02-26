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
				<div className="pottaOne ml-5">
					Welcome {store.user.username},<div>How are you today?</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div className="row">
				<div className="col overviewcard boxShadow " onClick={() => history.push("/pets")}>
					<div className="circle blue ottoBox">
						<i className="fas fa-bone align-middle otto" />
					</div>
					<div className="cardFont otto">Your Pets</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/habitats")}>
					<div className="circle green ottoBox">
						<i className="fas fa-globe-americas align-middle otto" />
					</div>
					<div className="cardFont otto">Habitats</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/calendar")}>
					<div className="circle red ottoBox">
						<i className="far fa-calendar-alt align-middle otto" />
					</div>
					<div className="cardFont otto">Calendar</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div className="row">
				<div className="col overviewcard boxShadow" onClick={() => history.push("/lostpets")}>
					<div className="circle yellow ottoBox">
						<i className="fas fa-exclamation align-middle otto" />
					</div>
					<div className="cardFont otto">Lost Pets</div>
				</div>
				<div className="col overviewcard boxShadow " onClick={() => history.push("/foundpets")}>
					<div className="circle orange ottoBox">
						<i className="far fa-bell align-middle otto" />
					</div>
					<div className="cardFont otto">Found Pets</div>
				</div>
				<div className="col overviewcard boxShadow" onClick={() => history.push("/profile")}>
					<div className="circle purple ottoBox">
						<i className="fas fa-user-circle align-middle otto" />
					</div>
					<div className="cardFont otto">Profile</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div>
				<div className="row">
					<div className="col">
						<div className="card text-center boxShadow ">
							<div className="card-header otto">Your Events</div>
							<div className="card-body ">
								<Calendar />
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card text-center boxShadow">
							<div className="card-header otto">Your Latest Messages</div>
							<div className="card-body darkerGreen">
								{/* starts here */}
								<div className="card text-center">
									<div className="card-header otto">From Vivian</div>
									<div className="card-body" style={{ background: "white", color: "black" }}>
										<p className="card-text">
											Hey, I believe you found my dog! Can you call me at ###-###-####? Thanks!
										</p>
										<a href="#" className="postButton">
											Go to your conversation with Vivian!
										</a>
									</div>
								</div>
								{/* ends here */}
								{/* starts here */}
								<div className="card text-center">
									<div className="card-header otto">From Timothy</div>
									<div className="card-body" style={{ background: "white", color: "black" }}>
										<p className="card-text">
											Hey, I believe you found my cat! Can you call me at ###-###-####? Thanks!
										</p>
										<a href="#" className="postButton">
											Go to your conversation with Timothy!
										</a>
									</div>
								</div>
								{/* ends here */}
								{/* starts here */}
								<div className="card text-center">
									<div className="card-header otto">From Carl</div>
									<div className="card-body" style={{ background: "white", color: "black" }}>
										<p className="card-text">
											Hey, I believe you found my cat! Can you call me at ###-###-####? Thanks!
										</p>
										<a href="#" className="postButton">
											Go to your conversation with Carl!
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
					<div className="card text-center boxShadow ">
						<div className="card-header otto">Services</div>
						<div className="card-body">
							<div className="overviewcard boxShadow" onClick={() => history.push("/adoptpage")}>
								<div className="circle pink ottoBox">
									<i className="fas fa-paw align-middle otto" />
								</div>
								<div className="cardFont otto">Adopt A Pet!</div>
							</div>
							<div className="overviewcard boxShadow" onClick={() => history.push("/map")}>
								<div className="circle brown ottoBox">
									<i className="fas fa-map align-middle otto" />
								</div>
								<div className="cardFont otto">Map</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
