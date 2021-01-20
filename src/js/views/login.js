import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	return (
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
						<Button className="w-100 text-center mt-2" onClick={() => actions.handleLogin(email, password)}>
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
								// actions.clearInputs();
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
								// actions.clearInputs();
							}}>
							<a>Click here</a>
						</Link>
					</p>
				</>
			</div>
		</div>
	);
};

export default Login;
