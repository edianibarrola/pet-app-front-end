import React, { useEffect, useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function PetModal(props) {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);

	const info = store.petList.find(element => element.petId == props.petId);
	const [pet, setPet] = useState({
		petId: info.petId,
		name: info.name,
		petType: info.petType,
		sex: info.sex,
		petColor: info.petColor
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
			<Button className="btn pcGradientLightGreen float-right mx-auto mb-3" onClick={handleShow}>
				<i className="fas fa-edit mr-auto fa-1x " />
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.petValues.val0}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<label>
							Name:
							<input
								type="text"
								value={pet.name}
								placeholder={props.petValues.val0}
								onChange={handleChange}
								name="name"
							/>
						</label>
						<label>
							Pet Type:
							<input
								type="text"
								value={pet.petType}
								placeholder={props.petValues.val1}
								onChange={handleChange}
								name="petType"
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
							actions.updatePetList(pet);

							setShow(false);
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
