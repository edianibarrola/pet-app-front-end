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
