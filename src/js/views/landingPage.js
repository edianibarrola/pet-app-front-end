import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => (
	<>
		<div className="bgLanding">
			<div className="row">
				<div className=" col mx-auto text-center  h-100 p-5">
					<div className="h-100 inline-block m-5">
						<h1 className="m-4 whiteText">PETREP</h1>
						<h6 className="mb-5 whiteText">We Represent Pets</h6>
					</div>
					{/* <div className="h-100 inline-block mx-auto">
					
				</div> */}
				</div>
			</div>
			<div>
				<div className="row mx-auto fullHeaderCard" style={{ maxWidth: "70%", maxHeight: "25%" }}>
					<div className="col-6 leftBackground">
						<div className="container smallIndent pottaOne">
							<p>Life is too dull without </p>
							<p>your furry or scaly friends around! </p>
							<p>Try the one in all </p>
							<p>pet platform today!</p>
							<Link to="/signup">
								<button className="btn pcButton m-5">Sign Up Today!</button>
							</Link>
						</div>
					</div>
					<div className="col-6 rightBackground" />
				</div>
			</div>
			{/* 2nd block on landing page */}
			<div className=" row align-items-center text-center banner whiteText w-100  ">
				<div className="col h-50 px-3">
					<div>
						<img src="https://via.placeholder.com/200 " />
					</div>
					<br />
					<h4>About Us!</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis
						justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim
						eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
						lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
						Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at
						maximus nisl suscipit posuere. Morbi nec enim nunc.{" "}
					</p>
				</div>
			</div>

			{/* 3rd block on landing page */}
			<div className=" row align-items-center text-center banner whiteText px-5 w-100 ">
				<div className="h-50 col float-left px-3">
					<img src="https://via.placeholder.com/200 " />
				</div>

				<div className="col h-50 float-right px-3">
					<h4>Features</h4>
					<p>So cool! I like it all, tell me more!</p>
				</div>
			</div>

			{/* 4th block on landing page */}

			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h4>Your Pets</h4>
					<p>Record information about your pets and store that information at your convenience. </p>
				</div>

				<div className="h-50 col float-left px-3">
					<img src="https://via.placeholder.com/200 " />
				</div>
			</div>

			{/* 5th block on landing page */}
			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="h-50 col float-left px-3">
					<img src="https://via.placeholder.com/200 " />
				</div>

				<div className="col h-50 float-right px-3">
					<h4>Calendar</h4>
					<p>
						Get up to date with all your activities with your pets! Get notifications when you have an
						activity coming up.
					</p>
				</div>
			</div>

			{/* 6th block on landing page */}

			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h4>Services</h4>
					<p>
						We provide nearby services near you in order to accomodate for the needs of your pets. Ex:
						Veterinarians
					</p>
				</div>

				<div className="h-50 col float-left px-3">
					<img src="https://via.placeholder.com/200 " />
				</div>
			</div>

			{/* 7th block on landing page */}

			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h4>Lost</h4>
					<p>Lost your pet? Make posts that allow other users to see if they have found your pet!</p>
				</div>

				<div className="h-50 col px-3">
					<img src="https://via.placeholder.com/200 " />
				</div>

				<div className="col h-50 float-left px-3">
					<h4>Found</h4>
					<p>
						Found an animal? Make posts that allow other users to see if the animal(s) posted are in fact
						theirs!
					</p>
				</div>
			</div>
			<br />
		</div>
	</>
);
