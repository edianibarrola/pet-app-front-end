import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import fire from "../../firebase";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleSignUp = (email, password) => {
		//Signs up the user if the user is not in the database, if not it will provide an error message as to why you cannot signup
		actions.clearErrors();
		fire.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				let getUser = fire.auth().currentUser;
				getUser.updateProfile({
					displayName: fullName
				});
				history.push("/dashboard");
			})
			.catch(err => {
				switch (err.code) {
					case "auth/weak-password":
						actions.changePasswordError(err.message);
						break;
					case "auth/email-already-in-use":
						actions.changeEmailError(err.message);
						break;
					case "auth/invalid-email":
						actions.changeEmailError(err.message);
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
										handleSignUp(email, password);
										actions.clearErrors();
									}}>
									Sign Up
								</Button>
							</div>
						</div>
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
									<a>Sign in</a>
								</Link>
							</p>
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
