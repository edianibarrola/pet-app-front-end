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
		<div className="bgLanding">
			<div style={{ padding: "30px" }} />

			<div className="main-header w-100">
				<div>
					Welcome {store.user.username},<div>How are you today?</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div className="row">
				<div className="col overviewcard boxShadow">
					<div className="circle blue">
						<i className="fas fa-bone" />
					</div>
					<div className="cardFont" onClick={() => history.push("/pets")}>
						Your Pets
					</div>
				</div>
				<div className="col overviewcard boxShadow">
					<div className="circle green">
						<i className="fas fa-globe-americas" />
					</div>
					<div className="cardFont" onClick={() => history.push("/habitats")}>
						Habitats
					</div>
				</div>
				<div className="col overviewcard boxShadow">
					<div className="circle red">
						<i className="far fa-calendar-alt" />
					</div>
					<div className="cardFont" onClick={() => history.push("/calendar")}>
						Calendar
					</div>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
			<div className="row">
				<div className="col overviewcard boxShadow">
					<div className="circle yellow">
						<i className="fas fa-paw" />
					</div>
					<div className="cardFont" onClick={() => history.push("/lostpets")}>
						Lost Pets
					</div>
				</div>
				<div className="col overviewcard boxShadow">
					<div className="circle orange">
						<i className="fas fa-paw" />
					</div>
					<div className="cardFont" onClick={() => history.push("/foundpets")}>
						Found Pets
					</div>
				</div>
				<div className="col overviewcard boxShadow">
					<div className="circle purple">
						<i className="fas fa-user-circle" />
					</div>
					<div className="cardFont" onClick={() => history.push("/profile")}>
						Profile
					</div>
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
							<div className="overviewcard boxShadow">
								<div className="circle yellow">
									<i className="fas fa-paw" />
								</div>
								<div className="cardFont" onClick={() => history.push("/adoptpage")}>
									Adopt A Pet!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
