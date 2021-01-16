import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PetNavbar = () => {
	return (
		<Navbar collapseOnSelect className="pcDarkGreen px-5 w-100">
			<Navbar.Brand href="#home">PETREP</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto ">
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/home">Home</NavDropdown.Item>
						<NavDropdown.Item href="/">Landing Page</NavDropdown.Item>
						<NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

// return (
// 	<nav className="navbar pcDarkGreen ">
// 		<Link to="/">
// 			<span className="navbar-brand pcTextYellow mb-0 h1">PETREP</span>
// 		</Link>
// 		<div className="ml-auto">
// 			<Link to="/demo">
// 				<button className="btn btn-primary">Check the Context in action</button>
// 			</Link>
// 		</div>
// 	</nav>
// );
