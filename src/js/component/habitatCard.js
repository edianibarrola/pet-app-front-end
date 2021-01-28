import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { HabitatModal } from "./habitatModal";

import { Context } from "../store/appContext";

export const HabitatCard = props => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const [toggleModal, setToggleModal] = useState(false);
	const info = store.habitatList.find(element => element.id == props.prop_habitat.id);
	const currentHabitatId = props.prop_habitat.id;
	const petsInHabitat = store.petList.map(e => {
		console.log(e);
		if (currentHabitatId == e.habitat_id) {
			return <li>{e.name}</li>;
		} else {
			console.log("not in");
		}
	});

	console.log(petsInHabitat);
	return (
		<div className="mx-auto">
			<Card style={{ width: "30rem", maxHeight: "auto" }}>
				<div className="row">
					<div className="col-4 ">
						<Card.Img src="https://picsum.photos/150" className="m-4 " />
					</div>
					<div className="col-8">
						<Card.Body>
							<Card.Title>{props.prop_habitat.name}</Card.Title>
							<h6>{props.prop_habitat.habitat_location}</h6>
							<Card.Text>
								<label> Info:</label>
								<li>{props.prop_habitat.info}</li>

								<label> Supplies:</label>
								<li>{props.prop_habitat.habitat_supplies}</li>

								<label> Equipment:</label>
								<li>{props.prop_habitat.habitat_equipment}</li>
							</Card.Text>
						</Card.Body>
					</div>

					<div className="col text-nowrap p-4">
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Add pet to Habitat
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">pet 1</Dropdown.Item>
								<Dropdown.Item href="#/action-2">pet 2</Dropdown.Item>
								<Dropdown.Item href="#/action-3">pet 3</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						{petsInHabitat}
					</div>
					<div className="col d-flex m-auto align-content-center">
						<Button onClick={() => actions.deleteHabitat(currentHabitatId)}>
							<i className="far fa-trash-alt" />
						</Button>
						Edit Habitat:
						<HabitatModal show={isOpen} onClose={toggleModal} habitat={props.prop_habitat} />
					</div>
				</div>
			</Card>
		</div>
	);
};

HabitatCard.propTypes = {
	prop_habitat: PropTypes.object
};
