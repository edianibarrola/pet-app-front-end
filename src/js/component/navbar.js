//import React, { Component } from "react";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PetNavbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.user ? (
				<Navbar className="pcDarkGreen px-5 w-100">
					<Navbar.Brand href="/dashboard">PETREP</Navbar.Brand>
					<Nav className="ml-auto">
						<Nav.Link>
							<Link to="/dashboard">Dashboard </Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/services">Services</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/lostpets">Lost Pets</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/foundpets">Found Pets</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/pets">Your Pet(s)</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/calendar">Calendar</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/profile">Profile</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/" onClick={actions.handleLogOut}>
								Log Out
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar>
			) : (
				<Navbar collapseOnSelect className="pcDarkGreen px-5 w-100">
					<Navbar.Brand href="/home">PETREP</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto ">
							<NavDropdown title="Menu" id="collasible-nav-dropdown">
								<NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
								<NavDropdown.Item href="/">Landing Page</NavDropdown.Item>
								<NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)}
		</div>
	);
};
