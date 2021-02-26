import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleLogin = (userEmail, userPassword) => {
		actions.clearErrors();
		fetch(store.url + "login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: userEmail, password: userPassword })
		})
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(token => {
				if (token.msg) {
					throw Error(token.msg);
				} else {
					history.push("/dashboard");
					actions.setToken(token.access_token);
					console.log(token);
					fetch(store.url + "user/" + token.id)
						.then(function(response) {
							if (!response.ok) {
								throw Error(response.statusText);
							}
							return response.json();
						})
						.then(jsonifiedResponse => actions.setUser(jsonifiedResponse))
						.catch(function(error) {
							console.log("Looks like there was a problem: \n", error);
						});
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
						<div className="col-8 cardForm">
							<h1 className="text-center mb-4">Log In</h1>
							<Form>
								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										className="postInput"
										onChange={e => setEmail(e.target.value)}
										value={email}
										placeholder="Enter Email"
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
									onClick={() => handleLogin(email, password)}>
									Sign in
								</button>
							</div>
							<div className="w-100 text-center mt-2">
								<>
									<p>
										Don&apos;t have an account?{" "}
										<Link
											to="/signup"
											onClick={() => {
												actions.clearErrors();
											}}>
											Sign up
										</Link>
									</p>
								</>
							</div>
						</div>
						<div className="col-4 loginPicture" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
