import React, { useEffect, useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function PetModal(props) {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);
	console.log(props.petValues);
	const currentPetId = props.petId;
	const [habitatValue, setHabitatValue] = useState("");
	// const availableHabitats = store.habitatList.map(e => {
	// 	console.log(e);
	// 	if (currentPetId == e.habitat_id) {
	// 		return <li>{e.name}</li>;
	// 	} else {
	// 		console.log("not in");
	// 	}
	// });

	//const info = store.petList.find(element => element.petId == props.petId);
	const [pet, setPet] = useState({
		id: props.petValues.id,
		name: props.petValues.name,
		pet_type: props.petValues.pet_type,
		sex: props.petValues.sex,
		color: props.petValues.color,
		dob: props.petValues.dob,
		habitat_id: props.petValues.habitat_id,
		note: props.petValues.note
	});
	const handleClose = () => {
		setShow(false);
	};

	const handleShow = () => setShow(true);
	const handleChange = e => {
		setPet({ ...pet, [e.target.name]: e.target.value });
	};
	return (
		<>
			<Button className="btn pcGradientLightGreen m-3 mx-auto " onClick={handleShow}>
				<i className="fas fa-edit mx-auto fa-1x " />
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.petValues.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<label>
							Name:
							<input type="text" value={pet.name} onChange={handleChange} name="name" />
						</label>
						<label>
							Pet Type:
							<input type="text" value={pet.pet_type} onChange={handleChange} name="pet_type" />
						</label>
						<label>
							Sex:
							<input type="text" value={pet.sex} onChange={handleChange} name="sex" />
						</label>
						<label>
							Color:
							<input type="text" value={pet.color} onChange={handleChange} name="color" />
						</label>
						<label>
							Date of birth:
							<input type="text" value={pet.dob} onChange={handleChange} name="dob" />
						</label>
						<label>
							Habitat:
							<select
								id="Select a Habitat"
								name="habitat_id"
								onChange={handleChange}
								value={habitatValue}>
								<option value="" />
								{store.habitatList.map((habitat, index) => {
									console.log(habitatValue);
									return (
										<option
											key={index}
											value={habitat.id}
											onClick={e => {
												setHabitatValue(e.target.value);
											}}>
											{habitat.name}
										</option>
									);
								})}
							</select>
							{/* <input type="text" value={pet.habitat_id}  name="habitat_id" /> */}
						</label>
						<label>
							Note:
							<input type="text" value={pet.note} onChange={handleChange} name="note" />
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
							if (props.petValues) {
								actions.updatePet(pet);

								setShow(false);
							} else {
								actions.addPet(pet);
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

PetModal.propTypes = {
	petValues: PropTypes.object,
	petId: PropTypes.number
};
