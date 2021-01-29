import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const UserProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="bgSearch">
			<div
				className="container d-flex align-items-center justify-content-center bgLanding"
				style={{ minHeight: "100vh" }}>
				<div className="w-100" style={{ maxWidth: "800px" }}>
					<div>
						<div className="card">
							<div className="card-body">
								<div className="profileImg" />
								<h2 className="text-center mb-4">Profile</h2>
								<div>
									<div className="float-right">
										<Link to="/profile/edit">
											<i className="fas fa-pencil-alt mr-3" />
										</Link>
									</div>
									<h2>Full Name: {store.user.username}</h2>
									<h2>Email: {store.user.email}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
