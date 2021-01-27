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
				<Card style={{ width: "30rem", maxHeight: "20rem" }}>
					<div className="row">
						<div className="col-4 ">
							<Card.Img src="https://picsum.photos/150" className="m-4 " />
						</div>
						<div className="col-8">
							<Card.Body>
								<Card.Title>{this.props.propObj.habitatName}</Card.Title>
								<Card.Text>
									<li>Information</li>
									<li>Information</li>
									<li>List of current pets set to this habitat</li>
								</Card.Text>
							</Card.Body>
						</div>

						<div className="col text-nowrap p-4">
							<li>Information</li>
							<li>Information</li>
							<li>List of current pets set to this habitat</li>
						</div>
						<div className="col d-flex m-auto align-content-center">
							<Button variant="primary">Edit Habitat</Button>
						</div>
					</div>
				</Card>
			</div>
		);
	}
}
HabitatCard.propTypes = {
	propObj: PropTypes.object
};
