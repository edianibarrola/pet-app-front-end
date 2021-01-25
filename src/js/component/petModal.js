import React, { useEffect, useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function PetModal(props) {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="btn pcGradientLightGreen float-right mb-3" onClick={handleShow}>
				<i className="fas fa-edit mr-auto fa-1x " />
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.petValues.val0}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
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
