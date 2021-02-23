import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const FoundPetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container d-flex justify-content-center align-items-center">
			<div className="w-100" style={{ maxWidth: "600px" }}>
				<div className="foundBG boxShadow p-2 m-4">
					<div className="card">
						<img className="card-img-top" src={props.propPet.post_picture} alt="Card image cap" />
						<div className="card-body">
							<i
								className="far fa-times-circle float-right"
								onClick={() => actions.deletePost(props.propPet.id)}
							/>
							<h4 className="mb-4">Name: {props.propPet.name}</h4>

							<div className="mb-4">
								<div>
									<h4>Type of Animal: {props.propPet.pet_type}</h4>
								</div>
								<div>
									<h4>Color: {props.propPet.color}</h4>
								</div>
								<div>
									<h4>Eye Color: {props.propPet.eye_color}</h4>
								</div>
								<div>
									<h4>Last Seen: {props.propPet.last_seen}</h4>
								</div>
								<div>
									<h4>Description: {props.propPet.description}</h4>
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
