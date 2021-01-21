import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import fire from "../../firebase";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleLogin = (email, password) => {
		//Logins the user if the user is in the database, if not it will provide an error message as to why you cannot login
		actions.clearErrors();
		fire.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push("/dashboard");
			})
			.catch(err => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						actions.changeEmailError(err.message);
						break;
					case "auth/wrong-password":
						actions.changePasswordError(err.message);
						break;
				}
			});
	};

	return (
		<div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<div>
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4">Log In</h2>
							<Form>
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
								<Button className="w-100 text-center mt-2" onClick={() => handleLogin(email, password)}>
									Sign in
								</Button>
							</div>
						</div>
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
									<a>Sign up</a>
								</Link>
							</p>
							<p>
								Forgot your password?{" "}
								<Link
									to="/reset"
									onClick={() => {
										actions.clearErrors();
									}}>
									<a>Click here</a>
								</Link>
							</p>
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
