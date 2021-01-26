import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dashboard.scss";
import { Calendar } from "../views/calendar";
//import { Link } from "react-router-dom";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="row">
				<div className="col">
					<div className="main-header">
						<div>
							Welcome {store.user.username},<div>How are you today?</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col overviewcard">
					<div className="circle blue">
						<i className="fas fa-paw" />
					</div>
					<div className="cardFont">Notifications</div>
				</div>
				<div className="col overviewcard">
					<div className="circle red">
						<i className="far fa-calendar-alt" />
					</div>
					<div className="cardFont">Upcoming Events</div>
				</div>
				<div className="col overviewcard">
					<div className="circle green">
						<i className="far fa-envelope" />
					</div>
					<div className="cardFont">Inbox</div>
				</div>
			</div>
			{/* It stops here */}
			<div>
				<div className="row">
					<div className="col">
						<div className="card text-center">
							<div className="card-header">Your Events</div>
							<div className="card-body">
								<Calendar />
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card text-center">
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
						<div className="card text-center">
							<div className="card-header">Your Pets</div>
							<div className="card-body" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
