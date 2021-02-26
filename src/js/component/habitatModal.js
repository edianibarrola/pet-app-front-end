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
			<Button className="btn pcGradientLightGreen mb-3  mx-auto " onClick={handleShow}>
				<i className="fas fa-edit mx-auto fa-1x " />
			</Button>
			<Modal show={show} size="lg" onHide={handleClose}>
				<Modal.Header className="pcDarkGreen" closeButton>
					<Modal.Title>{props.habitat.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="pcLightGreen ">
					<form>
						<div className="row">
							<div className="col-12 mx-auto modalStyle ">
								<div className="d-flex justify-content-between px-4">
									<label>Name:</label>

									<input
										type="text"
										size="inherit"
										value={habitat.name}
										onChange={handleChange}
										name="name"
										className="boxShadow"
									/>
								</div>

								<br />

								<div className="d-flex justify-content-between px-4">
									<label>Info:</label>
									<input
										type="text"
										size="inherit"
										value={habitat.info}
										onChange={handleChange}
										name="info"
										className="boxShadow"
									/>
								</div>

								<br />

								<div className="d-flex justify-content-between px-4">
									<label>Location:</label>
									<input
										type="text"
										size="inherit"
										value={habitat.habitat_location}
										onChange={handleChange}
										name="habitat_location"
										className="boxShadow"
									/>
								</div>

								<br />

								<div className="d-flex justify-content-between px-4">
									<label>Supplies:</label>
									<input
										type="text"
										size="inherit"
										value={habitat.habitat_supplies}
										onChange={handleChange}
										name="habitat_supplies"
										className="boxShadow"
									/>
								</div>

								<br />

								<div className="d-flex justify-content-between px-4">
									<label>Equipment: </label>
									<input
										type="text"
										size="inherit"
										value={habitat.habitat_equipment}
										onChange={handleChange}
										name="habitat_equipment"
										className="boxShadow"
									/>
								</div>
							</div>
							<br />
						</div>
						{/* <label>
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
						</label> */}
					</form>
				</Modal.Body>
				<Modal.Footer className="pcDarkGreen">
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
