import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export class HabitatCard extends React.Component {
	constructor(props) {
		super(props);
	}
	// this.state = {

	// };
	render() {
		return (
			<div className="mx-auto">
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src="https://picsum.photos/150" />
					<Card.Body>
						<Card.Title>{this.props.propObj.habitatName}</Card.Title>
						<Card.Text>
							<li>Information</li>
							<li>Information</li>
							<li>List of current pets set to this habitat</li>
						</Card.Text>
						<Button variant="primary">Edit Habitat</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
HabitatCard.propTypes = {
	propObj: PropTypes.object
};
