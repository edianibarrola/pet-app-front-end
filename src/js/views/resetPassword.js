import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h2 className="text-center mb-4">Reset Password</h2>
					{store.emailSent ? <Alert variant="success">{store.emailSent}</Alert> : null}
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
					</Form>
					<div>
						<Button className="w-100 text-center mt-2" onClick={() => actions.handleResetPassword(email)}>
							Reset Password
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
							<a>Login</a>
						</Link>
					</p>
				</>
			</div>
		</div>
	);
};

export default ResetPassword;
