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
import landingSignUp from "../../img/landing-signup.jpg";
export const LandingPage = () => (
	<>
		{/* ========================================================================Header========================================================================================= */}
		<section className="bgLanding pt-3" id="home">
			<div className="row">
				<div className="mx-auto text-center h-100 pt-5">
					<div className="h-100 inline-block mt-5 whiteText otto">
						<h1>PETREP</h1>
						<h3>We Represent Pets</h3>
					</div>
				</div>
			</div>
			{/* ==========================================================Desktop Display for the Sign Up on the Landing Page ==============================================================*/}
			<div className="card mt-2 mx-auto text-center h-100 desktop" style={{ width: "35%" }}>
				<div className="landingSignUp-bg">
					<div>
						<img className="card-img-top" src={landingSignUp} />
					</div>
					<div className="card-body whiteText otto">
						<p>We know you </p>
						<p>love your pets</p>
						<p>Give them the care they deserve </p>
						<p>effortlessly with PETREP </p>
						<Link to="/signup">
							<button className="btn pcButton">Sign Up Today!</button>
						</Link>
					</div>
				</div>
			</div>

			{/*=========================================================== Mobile Display for the Sign Up on the Landing Page ================================================================*/}
			<div className="mx-auto text-center h-100 mobile w-100">
				<div className="whiteText otto">
					<div className="mb-5">
						<h4>We know you </h4>
						<h4>love your pets</h4>
						<h4>Give them the care they deserve </h4>
						<h4>effortlessly with PETREP </h4>
					</div>
					<Link to="/signup">
						<button className="btn pcButton">Sign Up Today!</button>
					</Link>
				</div>
			</div>

			{/* =======================================================================About Us============================================================================================ */}
			<section id="about">
				<div className=" row banner whiteText w-100 ">
					<div className="col h-50 px-3">
						<div className="landingRoundImg mx-auto">
							{/* <Image src={taikaImg} roundedCircle style={{ height: "250px", width: "250" }} /> */}
							<img src={taikaImg} className="features-img" />
						</div>
						<br />
						<h2 className="text-center">About Us!</h2>
						<p>
							At PETREP, we love pets. We know there is nothing else like the amazing bonds we build with
							our creature companions.
							<br />
							We want to do everything in our power to help people provide the ultimate level of care for
							their furry, scaled and feathered friends.
							<br />
							{/* Whether you have one pet friend, or a whole zoo, PETREP helps you keep track of all your
						animals, their dietary needs, their habitats and supplies. Make use of our integrated calendar
						to set reminders or schedule important events for your pets, like birthdays and vet checkups.{" "} */}
						</p>
					</div>
				</div>
			</section>

			{/* =================================================================Features "Your Pet" ========================================================================================*/}
			<div className=" row  banner whiteText px-5 w-100 ">
				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto ">
						{/* <Image src={meeshkaImg} roundedCircle style={{ height: "250px", width: "250px" }} /> */}
						<img src={meeshkaImg} className="features-img" />
					</div>
				</div>
				<div className="col h-50 float-right px-3">
					<h2 className="text-center">Your Pets</h2>
					<p>Record information about your pets and store that information at your convenience. </p>
					<p>Log special details for your pet, like dietary needs or medications. </p>
					<p>Never miss a checkup or a playdate again! Set reminders and alerts for each pet!</p>
				</div>
			</div>

			{/* ===============================================================Features "Your Habitats" ========================================================================================*/}
			<div className=" row banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h2 className="text-center">Your Habitats</h2>
					<p>
						Record information about your Habitats (enclosures) and store that information at your
						convenience.{" "}
					</p>
					<p>Efficiently track supplies and material so you always have everything your pet needs.</p>
					<p>Keep your Habitats in pristine condition by setting cleaning days</p>
				</div>
				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto">
						{/* <Image src={habitatImg} roundedCircle style={{ height: "250px", width: "250px" }} /> */}
						<img src={habitatImg} className="features-img" />
					</div>
				</div>
			</div>

			{/* =================================================================Features "Calendar" ===============================================================================================*/}
			<div className=" row banner whiteText px-5 w-100  ">
				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto">
						{/* <Image src={calendarImg} roundedCircle style={{ height: "250px", width: "250px" }} /> */}
						<img src={calendarImg} className="features-img" />
					</div>
				</div>
				<div className="col h-50 float-right px-3">
					<h2 className="text-center">Calendar</h2>
					<p>
						Stay up to date with all your pet-related activities! Get notifications when you have an
						activity coming up.
					</p>
				</div>
			</div>

			{/*====================================================================Features Services =============================================================================================*/}
			<div className=" row banner whiteText px-5 w-100  ">
				<div className="col h-50 float-right px-3">
					<h2 className="text-center">Services</h2>
					<p>
						We provide nearby services in order to accomodate for the needs of your pets. Ex: Veterinarians
					</p>
				</div>
				<div className="h-50 col float-left px-3">
					<div className="landingRoundImg mx-auto">
						{/* <Image src={mapImg} roundedCircle style={{ height: "250px", width: "250px" }} /> */}
						<img src={mapImg} className="features-img" />
					</div>
				</div>
			</div>

			{/* ===============================================================Features Services Continued =====================================================================================*/}
			<div className="features row banner whiteText px-5 w-100 h-100  ">
				<div className="col h-50 ">
					<h2 className="text-center">Lost</h2>
					<p>Lost your pet? Our lost pet feature will alert other users in the area to Be On The Lookout!!</p>
				</div>
				<div className="h-50 col ">
					<div className="landingRoundImg lostFoundIcon mx-auto">
						<i className="fas fa-paw fa-5x" />
					</div>
				</div>
				<div className="col h-50">
					<h2 className="text-center">Found</h2>
					<p>
						Found an animal? Our found pet feature will help reunite lost pets by notifying other pet owners
						in the neighborhood.
					</p>
				</div>
			</div>
		</section>
	</>
);
