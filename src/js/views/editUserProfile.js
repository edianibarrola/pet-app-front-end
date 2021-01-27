import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditUserProfile = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(store.user.username);
	const [email, setEmail] = useState(store.user.email);
	const [id, setId] = useState(store.user.id);

	return (
		<div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<div>
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4">Edit Profile</h2>
							<Form>
								<Form.Group id="name">
									<Form.Label>Name:</Form.Label>
									<Form.Control type="text" onChange={e => setName(e.target.value)} value={name} />
								</Form.Group>
								<Form.Group id="email">
									<Form.Label>Email:</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setEmail(e.target.value)}
										value={email}
										required
									/>
								</Form.Group>
							</Form>
							<div>
								<Button
									className="w-100 text-center mt-2"
									onClick={() => {
										actions.updateUserProfile(name, email, id);
									}}>
									Finish Editing
								</Button>
							</div>
						</div>
					</div>
					<div className="w-100 text-center mt-2">
						<>
							<p>
								Want to go back to your profile? <Link to="/profile">Click here</Link>
							</p>
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUserProfile;
