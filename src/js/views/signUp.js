import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleSignUp = (email, password, fullName) => {
		actions.clearErrors();
		fetch(store.url + "signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email, password: password, username: fullName })
		})
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				if (data.id) {
					history.push("/login");
					console.log(data);
				}
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	};

	return (
		//////////////////////////////////////////////////////////////////////Desktop Signup//////////////////////////////////////////////////////////////////////////////////////////////
		<section>
			<div className="desktop-signup bgLanding " style={{ height: "100vh" }}>
				<div className="w-100 input-forms ml-5 mr-5">
					<div>
						<div className="row mx-auto boxShadow">
							<div className="col-8 cardForm">
								<h1 className="text-center mb-4">Sign Up</h1>
								<Form>
									<Form.Group id="fullName">
										<Form.Label>Full Name</Form.Label>
										<Form.Control
											type="text"
											className="postInput"
											onChange={e => setFullName(e.target.value)}
											value={fullName}
											placeholder="Name"
											required
										/>
									</Form.Group>
									<Form.Group id="email">
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											className="postInput"
											onChange={e => setEmail(e.target.value)}
											value={email}
											placeholder="Email"
											required
										/>
									</Form.Group>
									<p>{store.emailError}</p>
									<Form.Group id="password">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											className="postInput"
											onChange={e => setPassword(e.target.value)}
											value={password}
											placeholder="Password"
											required
										/>
									</Form.Group>
									<p>{store.passwordError}</p>
								</Form>
								<div>
									<button
										className="w-100 text-center mt-2 postButton"
										onClick={() => {
											handleSignUp(email, password, fullName);
											actions.clearErrors();
										}}>
										Sign Up
									</button>
								</div>
								<div className="w-100 text-center mt-2">
									<>
										<p>
											Have an account?{" "}
											<Link
												to="/login"
												onClick={() => {
													actions.clearErrors();
												}}>
												Sign in
											</Link>
										</p>
									</>
								</div>
							</div>
							<div className="col-4 signUpPicture" />
						</div>
					</div>
				</div>
			</div>
			{/* ==================================================================Mobile Signup ========================================================================================*/}
			<div className="mobile-signup bgLanding" style={{ height: "100vh" }}>
				<div className="w-100 input-forms ml-5 mr-5">
					<div>
						<div className="row mx-auto">
							<div className="col cardForm">
								<h1 className="text-center mb-4">Sign Up</h1>
								<Form>
									<Form.Group id="fullName">
										<Form.Label>Full Name</Form.Label>
										<Form.Control
											type="text"
											className="postInput"
											onChange={e => setFullName(e.target.value)}
											value={fullName}
											placeholder="Name"
											required
										/>
									</Form.Group>
									<Form.Group id="email">
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											className="postInput"
											onChange={e => setEmail(e.target.value)}
											value={email}
											placeholder="Email"
											required
										/>
									</Form.Group>
									<p>{store.emailError}</p>
									<Form.Group id="password">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											className="postInput"
											onChange={e => setPassword(e.target.value)}
											value={password}
											placeholder="Password"
											required
										/>
									</Form.Group>
									<p>{store.passwordError}</p>
								</Form>
								<div>
									<button
										className="w-100 text-center mt-2 postButton"
										onClick={() => {
											handleSignUp(email, password, fullName);
											actions.clearErrors();
										}}>
										Sign Up
									</button>
								</div>
								<div className="w-100 text-center mt-2">
									<>
										<p>
											Have an account?{" "}
											<Link
												to="/login"
												onClick={() => {
													actions.clearErrors();
												}}>
												Sign in
											</Link>
										</p>
									</>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
