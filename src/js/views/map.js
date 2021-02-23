<<<<<<< HEAD
import React, { Component } from "react";
import Iframe from "react-iframe";
//npm i react-iframe
export const Map = () => (
	<div className="mt-5 pt-5">
		<h1>map</h1>
		<Iframe
			url="https://www.yelp.com/search?find_desc=vet&find_loc=miami"
			width="100%"
			height="600px"
			id="myId"
			className="myClassname"
			display="initial"
			position="relative"
		/>
	</div>
);
=======
// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// //npm install --save google-map-react
// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
// 	static defaultProps = {
// 		center: {
// 			lat: 59.95,
// 			lng: 30.33
// 		},
// 		zoom: 11
// 	};

// 	render() {
// 		return (
// 			// Important! Always set the container height explicitly
// 			<div style={{ height: "100vh", width: "100%" }}>
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: "AIzaSyB2ot_ToPoOFGYON7yjbNLywYVdtHAYMiI" }}
// 					// defaultCenter={this.props.center}
// 					// defaultZoom={this.props.zoom}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default SimpleMap;
>>>>>>> cb010b1651ea27bc494aabcfbf465d8663d264df
