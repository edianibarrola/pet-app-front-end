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
		<div className="m-5 p-4  habitatBG boxShadow">
			<Card text="dark" style={{ width: "40rem", height: "90%", background: "#005e51" }}>
				<div className="row">
					<div className="col-6 ">
						<Card.Img src="https://picsum.photos/300" className="my-4 " />
					</div>
					<div className="col-6 ">
						<Card.Body>
							<Card.Title>
								<h3>{props.prop_habitat.name}</h3>
							</Card.Title>
							<h6>{props.prop_habitat.habitat_location}</h6>

							<div className="col text-nowrap p-4">
								Pets in Habitat
								{petsInHabitat}
							</div>
						</Card.Body>
					</div>
					{/* <div className="col-12"> */}
					{/* <Card.Body> */}
					{/* <Card.Text> */}
					<div className="row">
						<div className="col-4 mb-auto mx-auto">
							<label> Info:</label>
							<li>{props.prop_habitat.info}</li>
							<br />
						</div>

						<div className="col-4 mb-auto mx-auto">
							<label> Supplies:</label>
							<li>{props.prop_habitat.habitat_supplies}</li>
							<br />
						</div>

						<div className="col-4 mb-auto mx-auto">
							<label> Equipment:</label>
							<li>{props.prop_habitat.habitat_equipment}</li>
						</div>
					</div>
					{/* </Card.Text> */}
					{/* </Card.Body> */}
					{/* </div> */}

					<div className="col-12 d-flex mt-auto justify-content-between align-items-end">
						<div className="col-6 d-flex float-left">
							<Button
								className="mb-3"
								variant="danger"
								onClick={() => actions.deleteHabitat(currentHabitatId)}>
								<i className="far fa-trash-alt " />
							</Button>
						</div>
						<div className="col-6 d-flex float-right">
							<HabitatModal show={isOpen} onClose={toggleModal} habitat={props.prop_habitat} />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

HabitatCard.propTypes = {
	prop_habitat: PropTypes.object
};
