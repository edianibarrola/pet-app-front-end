import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="firstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								onChange={e => setFirstName(e.target.value)}
								value={firstName}
								required
							/>
						</Form.Group>
						<Form.Group id="lastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								onChange={e => setLastName(e.target.value)}
								value={lastName}
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
							onClick={() => actions.handleSignUp(email, password)}>
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
								// actions.clearInputs();
							}}>
							<a>Sign in</a>
						</Link>
					</p>
				</>
			</div>
		</div>
	);
};

export default SignUp;
