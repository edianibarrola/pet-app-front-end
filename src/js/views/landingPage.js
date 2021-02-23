import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import taikaImg from "../../img/taika.jpg";
import babaImg from "../../img/baba.jpg";
import drangusImg from "../../img/drangus.jpg";
import meeshkaImg from "../../img/meeshka.jpg";
import habitatImg from "../../img/habitat.jpg";
import mapImg from "../../img/map.png";
import calendarImg from "../../img/calendar.png";

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
						<div className="container smallIndent ">
							<p>We know you </p>
							<p>love your pets</p>
							<p>Let us help you give them the care they deserve </p>
							<p>effortlessly with PETREP </p>

							<Link to="/signup">
								<button className="btn pcButton m-5">Sign Up Today!</button>
							</Link>
						</div>
					</div>
					<div className="col-6 rightBackground"> </div>
				</div>
			</div>
			{/* 2nd block on landing page */}
			<div className=" row align-items-center text-center banner whiteText w-100  ">
				<div className="col h-50 px-3">
					<div className="landingRoundImg mx-auto">
						<Image src={taikaImg} roundedCircle fluid />
					</div>
					<br />
					<h4>About Us!</h4>
					<p>
						At PETREP, we love pets. We know there is nothing else like the amazing bonds we build with our
						creature companions. We want to do everything in our power to help people provide the ultimate
						level of care for their furry, scaled and feathered friends. Whether you have one pet friend, or
						a whole zoo, PETREP helps you keep track of all your animals, their dietary needs, their
						habitats and supplies. Make use of our integrated calendar to set reminders or schedule
						important events for your pets, like birthdays and vet checkups.{" "}
					</p>
				</div>
			</div>

			{/* 3rd block on landing page */}
			<div className=" row align-items-center text-center banner whiteText px-5 w-100 ">
				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto ">
						<Image src={meeshkaImg} roundedCircle fluid />
					</div>
				</div>

				<div className="col h-50 float-right px-3">
					<h4>Your Pets</h4>
					<p>Record information about your pets and store that information at your convenience. </p>
					<p>Log special details for your pet, like dietary needs or medications. </p>
					<p>Never miss a checkup or a playdate again! Set reminders and alerts for each pet!</p>
				</div>
			</div>

			{/* 4th block on landing page */}

			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h4>Your Habitats</h4>
					<p>
						Record information about your Habitats (enclosures) and store that information at your
						convenience.{" "}
					</p>
					<p>Efficiently track supplies and material so you always have everything your pet needs.</p>
					<p>Keep your Habitats in pristine condition by setting cleaning days</p>
				</div>

				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto">
						<Image src={habitatImg} roundedCircle fluid />
					</div>
				</div>
			</div>

			{/* 5th block on landing page */}
			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto">
						<Image src={calendarImg} roundedCircle fluid />
					</div>
				</div>

				<div className="col h-50 float-right px-3">
					<h4>Calendar</h4>
					<p>
						Stay up to date with all your pet-related activities! Get notifications when you have an
						activity coming up.
					</p>
				</div>
			</div>

			{/* 6th block on landing page */}

			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h4>Services</h4>
					<p>
						We provide nearby services in order to accomodate for the needs of your pets. Ex: Veterinarians
					</p>
				</div>

				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto">
						<Image src={mapImg} roundedCircle fluid />
					</div>
				</div>
			</div>

			{/* 7th block on landing page */}

			<div className=" row align-items-center text-center banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h4>Lost</h4>
					<p>Lost your pet? Our lost pet feature will alert other users in the area to Be On The Lookout!!</p>
				</div>

				<div className="h-50 col px-3">
					<div className="landingRoundImg lostFoundIcon mx-auto">
						<i className="fas fa-paw fa-5x" />
					</div>
				</div>

				<div className="col h-50 float-left px-3">
					<h4>Found</h4>
					<p>
						Found an animal? Our found pet feature will help reunite lost pets by notifying other pet owners
						in the neighborhood.
					</p>
				</div>
			</div>
			<br />
		</div>
	</>
);
