//import React, { Component } from "react";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const PetNavbar = () => {
	const { store, actions } = useContext(Context);
	// const [id, setId] = useState(store.user.id);
	// const [menuToggle, setMenuToggle] = useState("");
	const history = useHistory();
	// const menu = () => {
	// 	if ((menuToggle = "menuOpen")) {
	// 		setMenuToggle("menuClosed");
	// 	}
	// 	if ((menuToggle = "menuClosed")) {
	// 		setMenuToggle("menuOpen");
	// 	}
	// };
	return (
		<div>
			{store.login_token ? (
				// <Navbar className="bannerNav px-5 w-100 fixed-top">
				// 	<Navbar.Brand
				// 		onClick={() => {
				// 			history.push("/dashboard");
				// 		}}>
				// 		<div className="navbarCircle otto ottoBox ">
				// 			<i className="fas fa-paw mx-auto" />
				// 		</div>
				// 		<span className="brandLogo otto">PETREP</span>
				// 	</Navbar.Brand>
				// 	<Nav className="ml-auto navLinkStyle">
				// 		<Nav.Link>
				// 			<span
				// 				className="whiteText otto"
				// 				onClick={() => {
				// 					history.push("/dashboard");
				// 				}}>
				// 				Dashboard
				// 			</span>
				// 		</Nav.Link>
				// 		<span className="whiteText">
				// 			<Link to="/" onClick={actions.handleLogOut}>
				// 				<button type="button" className="postButton align-middle">
				// 					Logout
				// 				</button>
				// 			</Link>
				// 		</span>
				// 	</Nav>
				// </Navbar>
				<nav className="navbar navbar-expand-lg bannerNav fixed-top">
					{/* <div className="container"> */}
					<div
						onClick={() => {
							history.push("/dashboard");
						}}>
						<div className="navbarCircle otto ottoBox">
							<i className="fas fa-paw" />
						</div>
						<span className="brandLogo otto" href="/">
							PETREP
						</span>
					</div>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="navbar-collapse collapse" id="navbarCollapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<span
									className="whiteText otto"
									onClick={() => {
										history.push("/dashboard");
									}}>
									Dashboard
								</span>
							</li>
							<li className="nav-item">
								<Link to="/" onClick={actions.handleLogOut}>
									<button type="button" className="postButton align-middle">
										Logout
									</button>
								</Link>
							</li>
						</ul>
					</div>
					{/* </div> */}
				</nav>
			) : (
				<nav className="navbar navbar-expand-lg bannerNav fixed-top">
					<div className="container">
						<div
							onClick={() => {
								history.push("/");
							}}>
							<div className="navbarCircle otto ottoBox">
								<i className="fas fa-paw" />
							</div>
							<span className="brandLogo otto" href="/">
								PETREP
							</span>
						</div>
						<button
							className="navbar-toggler collapsed"
							type="button"
							data-toggle="collapse"
							data-target="#navbarCollapse"
							aria-controls="navbarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div className="navbar-collapse collapse" id="navbarCollapse">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a
										href="#home"
										className="nav-link"
										data-scroll-nav="0"
										onClick={() => {
											history.push("/");
										}}>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a
										href="#about"
										className="nav-link"
										data-scroll-nav="1"
										onClick={() => {
											history.push("/");
										}}>
										About Us
									</a>
								</li>
								{/* <li className="nav-item">
									<a
										href="#services"
										className="nav-link"
										data-scroll-nav="2"
										onClick={() => {
											history.push("/");
										}}>
										Services
									</a>
								</li> */}
								<li className="nav-item">
									<a className="nav-link" onClick={() => history.push("/signup")}>
										Sign Up
									</a>
								</li>
								<li className="nav-item">
									<button type="button" className="postButton" onClick={() => history.push("/login")}>
										Login
									</button>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			)}
		</div>
	);
};
