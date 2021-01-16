import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => (
	<>
		<div className="row">
			<div className=" col-12 mx-auto text-center pcGradientLightGreen h-100 p-5">
				<div className="h-100 inline-block m-5">
					<h1 className="m-4">PETREP</h1>
					<h6 className="mb-5">We Represent Pets</h6>
				</div>

				<div className="h-100 inline-block mx-auto">
					<Link to="/signup">
						<button className="btn pcButton m-5">Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
		{/* 2nd block on landing page */}

		<div className=" row align-items-center text-center pcGradientDarkGreen p-5 h-100 ">
			<div className="h-50 col float-left px-3">
				<img src="https://via.placeholder.com/200 " />
			</div>

			<div className="col h-50 float-right px-3">
				<h4>Cool Info!</h4>
				<p>So cool! I like it all, tell me more!</p>
			</div>
		</div>

		{/* 3rd block on landing page */}

		<div className=" row align-items-center text-center pcGradientDarkGreenReverse p-5 h-100 ">
			<div className="col h-50 float-right px-3">
				<h4>Cool Info!</h4>
				<p>So cool! I like it all, tell me more!</p>
			</div>

			<div className="h-50 col float-left px-3">
				<img src="https://via.placeholder.com/200 " />
			</div>
		</div>

		{/* 4th block on landing page */}

		<div className=" row align-items-center text-center pcGradientLightGreen p-5 h-100 ">
			<div className="col h-50 float-right px-3">
				<h4>Lost!</h4>
				<p>So cool! I like it all, tell me more!</p>
			</div>

			<div className="h-50 col px-3">
				<img src="https://via.placeholder.com/200 " />
			</div>

			<div className="col h-50 float-left px-3">
				<h4>Found!</h4>
				<p>So cool! I like it all, tell me more!</p>
			</div>
		</div>
	</>
);
