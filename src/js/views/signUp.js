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
		<div className="d-flex align-items-center justify-content-center bgLanding" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "800px" }}>
				<div>
					<div className="row mx-auto boxShadow">
						<div className="col-8 loginAndSignUpForm">
							<h2 className="text-center mb-4">Sign Up</h2>
							<Form>
								<Form.Group id="fullName">
									<Form.Label>Full Name</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setFullName(e.target.value)}
										value={fullName}
										required
									/>
								</Form.Group>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										onChange={e => setEmail(e.target.value)}
										value={email}
										required
									/>
								</Form.Group>
								<p>{store.emailError}</p>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										onChange={e => setPassword(e.target.value)}
										value={password}
										required
									/>
								</Form.Group>
								<p>{store.passwordError}</p>
							</Form>
							<div>
								<Button
									className="w-100 text-center mt-2"
									onClick={() => {
										handleSignUp(email, password, fullName);
										actions.clearErrors();
									}}>
									Sign Up
								</Button>
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
	);
};

export default SignUp;
