import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// const adoptable = {
// 	Name: "Meeshka",
// 	PetType: "Dog",
// 	Sex: "Female",
// 	Color: "Yellowish"
// };
export class AdoptCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			petInfo: this.pet,
			val0: null,
			val1: null,
			val2: null,
			val3: null,
			val4: null,
			val5: null,
			val6: null,
			val7: null
		};
	}
	componentDidMount() {
		this.setState({
			//petInfo: jsonified results from api call,
			val0: this.props.propObj.species,
			val1: this.props.propObj.breeds.primary,
			val2: this.props.propObj.name,
			val3: this.props.propObj.url,
			val4: this.props.propObj.primary_photo_cropped
				? this.props.propObj.primary_photo_cropped.medium
				: "https://via.placeholder.com/150",
			val5: this.props.propObj.contact.address.city,
			val6: this.props.propObj.contact.address.postcode,
			val7: this.props.propObj.contact.address.state
		});
	}
	render() {
		return (
			<Accordion defaultActiveKey="0">
				<div className="p-4 m-4 pcGradientDarkGreen minw-20 pcLightGreenBorderSmall">
					<Card style={{ width: "auto" }}>
						<Accordion.Toggle as={Card.Header} eventKey="0" className="pcGradientLightGreen">
							<div className="d-flex justify-content-center ">
								<Image src={this.state.val4} roundedCircle fluid />
							</div>
							<div className=" text-center">
								<h3>{this.state.val2}</h3>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<div className="container text-nowrap">
									{" "}
									<h3> Species: {this.state.val0}</h3> <h3> Breed: {this.state.val1} </h3>
									<h3>
										{" "}
										Location: {this.state.val5}, {this.state.val7} {this.state.val6}
									</h3>
								</div>
								<a
									role="button"
									href={this.state.val3}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary">
									Learn More!
								</a>
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

AdoptCard.propTypes = {
	propObj: PropTypes.object
};
