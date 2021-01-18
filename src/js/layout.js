import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Dashboard } from "./views/dashboard";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { SignUp } from "./views/signUp";
import injectContext from "./store/appContext";
import { LandingPage } from "./views/landingPage";
import { Calendar } from "./views/calendar";

import { PetNavbar } from "./component/navbar";
import { Footer } from "./component/footer";

//import { AuthProvider } from "./context/AuthContext";

import React, { useContext, useState, useEffect } from "react";
import fire from "../firebase";
import Login from "./views/login";

//create your first component
const Layout = () => {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [hasAccount, setHasAccount] = useState(false);

	const clearInputs = () => {
		setEmail("");
		setPassword("");
		setFirstName("");
		setLastName("");
	};

	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
	};

	const handleLogin = () => {
		clearErrors();
		fire.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
				}
			});
	};

	const handleSignUp = () => {
		clearErrors();
		fire.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(err => {
				switch (err.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
				}
			});
	};

	const handleLogOut = () => {
		fire.auth().signOut();
	};

	useEffect(() => {
		authListener();
	}, []);

	const authListener = () => {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser("");
			}
		});
	};

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			{user ? (
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<PetNavbar />
						<Switch>
							<Route exact path="/dashboard">
								<Dashboard handleLogOut={handleLogOut} />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			) : (
				<div className="d-flex flex-column">
					<BrowserRouter basename={basename}>
						<ScrollToTop>
							<PetNavbar />
							<Switch>
								<Route exact path="/">
									<LandingPage />
								</Route>
								<Route exact path="/signup">
									<div
										className="container d-flex align-items-center justify-content-center"
										style={{ minHeight: "100vh" }}>
										<div className="w-100" style={{ maxWidth: "400px" }}>
											<Login
												email={email}
												setEmail={setEmail}
												password={password}
												setPassword={setPassword}
												handleLogin={handleLogin}
												handleSignUp={handleSignUp}
												hasAccount={hasAccount}
												setHasAccount={setHasAccount}
												emailError={emailError}
												passwordError={passwordError}
												firstName={firstName}
												lastName={lastName}
												setLastName={setLastName}
												setFirstName={setFirstName}
											/>
										</div>
									</div>
								</Route>
								<Route exact path="/calendar">
									<Calendar />
								</Route>
								<Route exact path="/demo">
									<Demo />
								</Route>
								<Route exact path="/dashboard">
									<Dashboard />
								</Route>
								<Route exact path="/single/:theid">
									<Single />
								</Route>
								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
							<Footer />
						</ScrollToTop>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
};

export default injectContext(Layout);
