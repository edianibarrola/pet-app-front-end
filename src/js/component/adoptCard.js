import React from "react";

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
			<div>
				<div className="card cardSmall m-4 p-4" style={{ width: "auto" }}>
					<div className="cardBGSmall">
						<div className="d-flex no-wrap card-bodySmall align-items-center">
							<img className="card-img-left m-4" src="https://via.placeholder.com/150" alt="Card image" />
							<h4 className="card-title">{this.state.val0}</h4>
							<div className="container">
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
							{/* <Link
									to={{
										pathname: "/detailsview/" + this.props.propUid,
										state: this.state
									}}>
									<button className="btn btn-secondary float-right">More Info</button>
								</Link> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

AdoptCard.propTypes = {
	propObj: PropTypes.object
};
