import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// const adoptable = {
// 	Name: "Meeshka",
// 	PetType: "Dog",
// 	Sex: "Female",
// 	Color: "Yellowish"
// };
const EditPetModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo youre reading this text in a modal!</Modal.Body>
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
};
export class PetCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			petInfo: this.pet,
			key0: null,
			key1: null,
			key2: null,
			key3: null,
			val0: null,
			val1: null,
			val2: null,
			val3: null
		};
		this.petApiUrl = "waitingForApiKey";
	}
	componentDidMount() {
		this.setState({
			//petInfo: jsonified results from api call,
			key0: "Name: ",
			key1: "Pet Type: ",
			key2: "Sex: ",
			key3: "Color: ",
			val0: this.props.propObj.Name,
			val1: this.props.propObj.PetType,
			val2: this.props.propObj.Sex,
			val3: this.props.propObj.Color
		});
	}

	render() {
		return (
			<Accordion defaultActiveKey="0">
				<div className="p-4 m-4 pcGradientDarkGreen minw-20 pcLightGreenBorderSmall">
					<Card style={{ width: "18rem" }}>
						<Accordion.Toggle as={Card.Header} eventKey="0" className="pcGradientLightGreen">
							<div className="d-flex justify-content-center ">
								<Image src="https://picsum.photos/150" roundedCircle fluid />
							</div>
							<div className=" text-center">
								<h1>{this.state.val0}</h1>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<div className="container text-nowrap">
									<li>
										{this.state.key1}
										{this.state.val1}{" "}
									</li>
									<li>
										{" "}
										{this.state.key2} {this.state.val2}
									</li>
									<li>
										{" "}
										{this.state.key3} {this.state.val3}
									</li>
								</div>
								<button className="btn pcGradientLightGreen float-right mb-3" onClick={EditPetModal}>
									<i className="fas fa-edit mr-auto fa-1x " />
								</button>
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
	}
}

PetCard.propTypes = {
	propObj: PropTypes.object
};
