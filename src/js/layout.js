import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Dashboard } from "./views/dashboard";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import SignUp from "./views/signUp";
import injectContext from "./store/appContext";
import { LandingPage } from "./views/landingPage";
import { Calendar } from "./views/calendar";
import { PetNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import fire from "../firebase";
import Login from "./views/login";
import React, { useEffect, useContext } from "react";
import { Context } from "../js/store/appContext";
import ResetPassword from "./views/resetPassword";
import UserProfile from "./views/userProfile";
import { AdoptPage } from "./views/adoptPage";

const Layout = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.authListener();
	}, []);

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div>
			{store.user ? (
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<PetNavbar />
						<Switch>
							<Route exact path="/dashboard">
								<Dashboard />
							</Route>
							<Route exact path="/calendar">
								<Calendar />
							</Route>
							<Route exact path="/profile">
								<UserProfile />
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
								<Route exact path="/login">
									<Login />
								</Route>
								<Route exact path="/signup">
									<SignUp />
								</Route>
								<Route exact path="/reset">
									<ResetPassword />
								</Route>
								<Route exact path="/demo">
									<Demo />
								</Route>
								<Route exact path="/adoptpage">
									<AdoptPage />
								</Route>
								<Route exact path="/single/:theid">
									<Single />
								</Route>

								<Route exact path="/calendar">
									<Calendar />
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
