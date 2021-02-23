import React, { Component } from "react";
import Iframe from "react-iframe";
//npm i react-iframe
export const Map = () => (
	<div className="bgLanding">
		<div className="row">
			<div className=" col mx-auto text-center pt-4">
				<div className="inline-block m-5">
					<h1 className="m-4 whiteText">Find Services Near You!</h1>
				</div>
			</div>
		</div>
		<div className="row">
			{/* <div className="mt-5 pt-5"> */}
			<div className="col">
				<Iframe
					url="https://www.yelp.com/search?find_desc=vet&find_loc=miami"
					width="100%"
					height="800px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
				/>
			</div>
		</div>
	</div>
);
