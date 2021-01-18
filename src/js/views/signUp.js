import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SignUp = props => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleSignUp,
		emailError,
		passwordError,
		setLastName,
		lastName,
		setFirstName,
		firstName,
		clearInputs,
		clearErrors
	} = props;

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
						Have an account?{" "}
						<Link
							to="/login"
							onClick={() => {
								clearErrors();
								clearInputs();
							}}>
							<a>Sign in</a>
						</Link>
					</p>
				</>
			</div>
		</div>
	);
};
SignUp.propTypes = {
	email: PropTypes.string,
	setEmail: PropTypes.func,
	password: PropTypes.string,
	setPassword: PropTypes.func,
	handleSignUp: PropTypes.func,
	emailError: PropTypes.string,
	passwordError: PropTypes.string,
	setLastName: PropTypes.func,
	lastName: PropTypes.string,
	setFirstName: PropTypes.func,
	firstName: PropTypes.string,
	clearErrors: PropTypes.func,
	clearInputs: PropTypes.func
};
export default SignUp;
