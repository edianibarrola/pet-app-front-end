import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
//npm install --save google-map-react
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: "100vh", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyB2ot_ToPoOFGYON7yjbNLywYVdtHAYMiI" }}
					// defaultCenter={this.props.center}
					// defaultZoom={this.props.zoom}
				/>
			</div>
		);
	}
}

export default SimpleMap;
