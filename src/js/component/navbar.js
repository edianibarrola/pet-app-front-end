//import React, { Component } from "react";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const PetNavbar = () => {
	const { store, actions } = useContext(Context);
	// const [id, setId] = useState(store.user.id);
	const history = useHistory();
	return (
		<div>
			{store.login_token ? (
				<Navbar className="bannerNav px-5 w-100 fixed-top">
					<Navbar.Brand
						onClick={() => {
							history.push("/dashboard");
						}}>
						<div className="navbarCircle">
							<i className="fas fa-paw " />
						</div>
						<span className="brandLogo">PETREP</span>
					</Navbar.Brand>
					<Nav className="ml-auto navLinkStyle">
						<Nav.Link>
							<span
								style={{ color: "white" }}
								onClick={() => {
									history.push("/dashboard");
								}}>
								Dashboard
							</span>
						</Nav.Link>
						<span className="whiteText">
							<Link to="/" onClick={actions.handleLogOut}>
								<button type="button" className="postButton align-middle">
									Logout
								</button>
							</Link>
						</span>
					</Nav>
				</Navbar>
			) : (
				<Navbar collapseOnSelect className="bannerNav px-5 w-100 fixed-top">
					<Navbar.Brand href="/">
						<div className="navbarCircle">
							<i className="fas fa-paw" />
						</div>
						<span className="brandLogo">PETREP</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto ">
							<span className="whiteText">
								Have an account?{" "}
								<button type="button" className="postButton" onClick={() => history.push("/login")}>
									Login
								</button>
							</span>

							{/* <NavDropdown title="Menu" id="collasible-nav-dropdown">
								<NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
								<NavDropdown.Item href="/pets">Pets</NavDropdown.Item>
								<NavDropdown.Item href="/">Landing Page</NavDropdown.Item>
								<NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
								<NavDropdown.Item href="/adoptpage">Adoptions</NavDropdown.Item>
								<NavDropdown.Item href="/habitats">Habitats</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)}
		</div>
	);
};
