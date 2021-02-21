import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const LostPetCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex mt-5 align-items-center justify-content-center">
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<div className="lostBG boxShadow p-2 m-4">
					<div className="card">
						<img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
						<div className="card-body text-center">
							<i
								className="far fa-times-circle float-right"
								onClick={() => actions.deletePost(props.propPet.id)}
							/>
							<h2 className="text-center mb-4">Name: {props.propPet.name}</h2>

							<div className="text-center mb-4">
								<div>
									<h2>Type: {props.propPet.pet_type}</h2>
								</div>
								<div>
									<h2>Color: {props.propPet.color}</h2>
								</div>
								<div>
									<h2>Eye Color: {props.propPet.eye_color}</h2>
								</div>
								<div>
									<h2>Last Seen Location: {props.propPet.last_seen}</h2>
								</div>
								<div>
									<h2>Description: {props.propPet.description}</h2>
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
LostPetCard.propTypes = {
	propPet: PropTypes.object
	// id: PropTypes.string,
};

// LostPetCard.defaultProps = {
// 	onDelete: null
// };
