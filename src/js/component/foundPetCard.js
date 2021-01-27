import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const FoundPetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<div>
					<div className="card">
						<div className="card-body">
							<i
								className="far fa-times-circle float-right"
								onClick={() => actions.deletePost(props.propPet.id)}
							/>
							<h2 className="text-center mb-4">Name: </h2>
							<p>{props.propPet.name}</p>
							<div>
								<div>
									<h2>Type of Animal: </h2>
									<p>{props.propPet.pet_type}</p>
								</div>
								<div>
									<h2>Color: </h2>
									<p>{props.propPet.color}</p>
								</div>
								<div>
									<h2>Eye Color: </h2>
									<p>{props.propPet.eye_color}</p>
								</div>
								<div>
									<h2>Last Seen Location: </h2>
									<p>{props.propPet.last_seen}</p>
								</div>
								<div>
									<h2>Description: </h2>
									<p>{props.propPet.description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
//Passed props in order to display information given from Contacts.js such as name, address, phone, email, and ID. ID was very important in order to pass it as a parameter in
//the onDelete function. Refer to flux.js on how onDelete() works.
FoundPetCard.propTypes = {
	propPet: PropTypes.object
	// id: PropTypes.string,
};

// LostPetCard.defaultProps = {
// 	onDelete: null
// };
