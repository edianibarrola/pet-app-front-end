import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = props => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignUp,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
		setLastName,
		lastName,
		setFirstName,
		firstName
	} = props;
	return (
		<div>
			{hasAccount ? (
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
								<p>{emailError}</p>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										onChange={e => setPassword(e.target.value)}
										value={password}
										required
									/>
								</Form.Group>
								<p>{passwordError}</p>
							</Form>
							<div>
								<Link to="/dashboard">
									<Button className="w-100 text-center mt-2" onClick={handleLogin}>
										Sign in
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-100 text-center mt-2">
						<>
							<p>
								Don&apos;t have an account?{" "}
								<a>
									<span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
								</a>
							</p>
						</>
					</div>
				</div>
			) : (
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
								<p>{emailError}</p>
								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										onChange={e => setPassword(e.target.value)}
										value={password}
										required
									/>
								</Form.Group>
								<p>{passwordError}</p>
							</Form>
							<div>
								<Button className="w-100 text-center mt-2" onClick={handleSignUp}>
									Sign Up
								</Button>
							</div>
						</div>
					</div>
					<div className="w-100 text-center mt-2">
						<>
							<p>
								Have an account? <a onClick={() => setHasAccount(!hasAccount)}>Sign in</a>
							</p>
						</>
					</div>
				</div>
			)}
		</div>
	);
};
Login.propTypes = {
	email: PropTypes.string,
	setEmail: PropTypes.func,
	password: PropTypes.string,
	setPassword: PropTypes.func,
	handleLogin: PropTypes.func,
	handleSignUp: PropTypes.func,
	hasAccount: PropTypes.bool,
	setHasAccount: PropTypes.func,
	emailError: PropTypes.string,
	passwordError: PropTypes.string,
	setLastName: PropTypes.func,
	lastName: PropTypes.string,
	setFirstName: PropTypes.func,
	firstName: PropTypes.string
};
export default Login;
