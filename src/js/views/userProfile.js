import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const UserProfile = () => {
	const { store, actions } = useContext(Context);

	const availableHabitats = store.habitatList.map(e => {
		if (e.name) {
			return <li>{e.name}</li>;
		}
	});
	const availablePets = store.petList.map(e => {
		if (e.name) {
			return <li>{e.name}</li>;
		}
	});

	return (
		<div className="bgSearch">
			<div
				className="container d-flex align-items-center justify-content-center bgLanding"
				style={{ minHeight: "100vh" }}>
				<div className="w-100" style={{ maxWidth: "800px" }}>
					<div>
						<div className="card profileBG">
							<div className="card-body">
								<div className="d-flex justify-content-center ">
									<Image
										src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
										roundedCircle
										fluid
										style={{ height: "200px", width: "200px" }}
									/>
								</div>
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
								<div className="d-flex justify-content-around">
									<div className="">
										<h3>Pets: </h3>
										{availablePets}
									</div>
									<div className="">
										<h3>Habitats:</h3> {availableHabitats}
									</div>
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
