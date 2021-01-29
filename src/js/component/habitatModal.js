import React, { useEffect, useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function HabitatModal(props) {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);
	console.log(props.petValues);
	//const info = store.petList.find(element => element.petId == props.petId);
	const [habitat, setHabitat] = useState({
		id: props.habitat.id,
		name: props.habitat.name,
		pet_in_habitat_id: props.habitat.pet_in_habitat_id,
		info: props.habitat.info,
		habitat_location: props.habitat.habitat_location,
		habitat_supplies: props.habitat.habitat_supplies,
		habitat_equipment: props.habitat.habitat_equipment
	});
	const handleClose = () => {
		setShow(false);
	};

	const handleShow = () => setShow(true);
	const handleChange = e => {
		setHabitat({ ...habitat, [e.target.name]: e.target.value });
	};
	return (
		<>
			<Button className="btn pcGradientLightGreen m-3  mx-auto " onClick={handleShow}>
				<i className="fas fa-edit mx-auto fa-1x " />
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.habitat.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<label>
							Name:
							<input type="text" value={habitat.name} onChange={handleChange} name="name" />
						</label>
						<label>
							Info:
							<input type="text" value={habitat.info} onChange={handleChange} name="info" />
						</label>
						<label>
							Location:
							<input
								type="text"
								value={habitat.habitat_location}
								onChange={handleChange}
								name="habitat_location"
							/>
						</label>
						<label>
							Supplies:
							<input
								type="text"
								value={habitat.habitat_supplies}
								onChange={handleChange}
								name="habitat_supplies"
							/>
						</label>
						<label>
							Equipment:
							<input
								type="text"
								value={habitat.habitat_equipment}
								onChange={handleChange}
								name="habitat_equipment"
							/>
						</label>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							if (props.habitat) {
								actions.updateHabitat(habitat);

								setShow(false);
							} else {
								actions.addHabitat(habitat);
								setShow(false);
							}
						}}>
						{/* onClose={() => actions.updatePetList(pet)} */}
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

HabitatModal.propTypes = {
	habitat: PropTypes.object
};
