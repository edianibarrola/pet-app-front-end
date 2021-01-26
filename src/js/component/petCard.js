import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PetModal } from "./petModal";
import Button from "react-bootstrap/Button";
// const adoptable = {
// 	Name: "Meeshka",
// 	PetType: "Dog",
// 	Sex: "Female",
// 	Color: "Yellowish"
// };

export class PetCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.pet_prop.name,
			pet_type: this.props.pet_prop.pet_type,
			sex: this.props.pet_prop.sex,
			color: this.props.pet_prop.color
		};
	}
	// componentDidMount() {
	// 	this.setState({
	// 		//petInfo: jsonified results from api call,
	// 		// key0: "Name: ",
	// 		// key1: "Pet Type: ",
	// 		// key2: "Sex: ",
	// 		// key3: "Color: ",

	// 	});
	// }

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
								<h2>{this.state.name}</h2>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<div className="container text-nowrap">
									<li>
										{" Pet Type "}
										{this.state.pet_type}{" "}
									</li>
									<li>
										{" sex "}
										{this.state.sex}
									</li>
									<li>
										{" color "}
										{this.state.pet_color}
									</li>
								</div>

								<PetModal
									show={this.state.isOpen}
									onClose={this.toggleModal}
									petValues={this.props.pet_prop}
								/>
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
	pet_prop: PropTypes.object
};
