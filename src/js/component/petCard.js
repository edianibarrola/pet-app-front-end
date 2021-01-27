import React, { useState, useEffect, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PetModal } from "./petModal";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
// const adoptable = {
// 	Name: "Meeshka",
// 	PetType: "Dog",
// 	Sex: "Female",
// 	Color: "Yellowish"
// };

export const PetCard = props => {
	const { store, actions } = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const [toggleModal, setToggleModal] = useState(false);
	const info = store.petList.find(element => element.id == props.pet_prop.id);
	const currentPetId = props.pet_prop.id;
	// componentDidMount() {
	// 	this.setState({
	// 		//petInfo: jsonified results from api call,
	// 		// key0: "Name: ",
	// 		// key1: "Pet Type: ",
	// 		// key2: "Sex: ",
	// 		// key3: "Color: ",

	// 	});
	// }

	return (
		<Accordion defaultActiveKey="0">
			<div className="p-4 m-4 pcGradientDarkGreen minw-20 pcLightGreenBorderSmall">
				<Card style={{ width: "18rem" }}>
					<Accordion.Toggle as={Card.Header} eventKey="0" className="pcGradientLightGreen">
						<div className="d-flex justify-content-center ">
							<Image src="https://picsum.photos/150" roundedCircle fluid />
						</div>
						<div className=" text-center">
							<h2>{info.name}</h2>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<div className="container text-nowrap">
								<li>
									{" Pet Type "}
									{info.pet_type}{" "}
								</li>
								<li>
									{" sex "}
									{info.sex}
								</li>
								<li>
									{" color "}
									{info.color}
								</li>
							</div>
							<Button onClick={() => actions.deletePet(currentPetId)}>
								<i className="far fa-trash-alt" />
							</Button>
							Edit:
							<PetModal show={isOpen} onClose={toggleModal} petValues={info} />
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</div>
		</Accordion>

		// <>
		// 	<div className="card cardSmall m-4 p-4 col-3" style={{ width: "auto" }}>
		// 		<div className="cardBGSmall">
		// 			<div className="d-flex no-wrap card-bodySmall align-items-center">
		// 				<img className="card-img-left m-4" src="https://via.placeholder.com/150" alt="Card image" />
		// 				<h4 className="card-title">{this.state.val0}</h4>
		// <div className="container">
		// 	<li>
		// 		{this.state.key1}
		// 		{this.state.val1}{" "}
		// 	</li>
		// 	<li>
		// 		{" "}
		// 		{this.state.key2} {this.state.val2}
		// 	</li>
		// 	<li>
		// 		{" "}
		// 		{this.state.key3} {this.state.val3}
		// 	</li>
		// </div>

		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
};

PetCard.propTypes = {
	pet_prop: PropTypes.object
};
