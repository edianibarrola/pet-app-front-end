import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const AddFoundPet = () => {
	const [name, setName] = useState("");
	const [petType, setPetType] = useState("");
	const [color, setColor] = useState("");
	const [eyeColor, setEyeColor] = useState("");
	const [lastSeen, setLastSeen] = useState("");
	const [description, setDescription] = useState("");
	const status = "found";
	const history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex align-items-center mt-5 justify-content-center bgFound" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "800px" }}>
				<div>
					<div className="row mx-auto boxShadow">
						<div className="col-8 postCards">
							<h2 className="text-center mb-4">Post a Found Pet</h2>
							<Form className="text-center">
								<Form.Group id="name">
									<Form.Label>Name, if applicable</Form.Label>
									<Form.Control
										className="w-75 mx-auto"
										type="text"
										onChange={e => setName(e.target.value)}
										value={name}
									/>
								</Form.Group>
								<Form.Group id="petType">
									<Form.Label>What type of animal?</Form.Label>
									<Form.Control
										className="w-75 mx-auto"
										type="text"
										onChange={e => setPetType(e.target.value)}
										value={petType}
										required
									/>
								</Form.Group>
								<Form.Group id="color">
									<Form.Label>Color of the animal</Form.Label>
									<Form.Control
										className="w-75 mx-auto"
										type="text"
										onChange={e => setColor(e.target.value)}
										value={color}
										required
									/>
								</Form.Group>
								<Form.Group id="eyeColor">
									<Form.Label>Eye color</Form.Label>
									<Form.Control
										className="w-75 mx-auto"
										type="text"
										onChange={e => setEyeColor(e.target.value)}
										value={eyeColor}
										required
									/>
								</Form.Group>
								<Form.Group id="lastSeen">
									<Form.Label>
										Where was it last seen? Or are you currently housing the animal?
									</Form.Label>
									<Form.Control
										className="w-75 mx-auto"
										type="text"
										onChange={e => setLastSeen(e.target.value)}
										value={lastSeen}
										required
									/>
								</Form.Group>
								<Form.Group id="description">
									<Form.Label>Description</Form.Label>
									<Form.Control
										className="w-75 mx-auto"
										type="text"
										onChange={e => setDescription(e.target.value)}
										value={description}
									/>
								</Form.Group>
							</Form>
							<div className="text-center">
								<Button
									className="w-75 text-center mt-2"
									onClick={() => {
										actions.addToFound(
											name,
											petType,
											color,
											eyeColor,
											lastSeen,
											description,
											status
										);
										history.push("/foundpets");
									}}>
									Submit Post
								</Button>
							</div>
							<div className="w-100 text-center mt-2">
								<>
									<p>
										Want to go back to found pet search? <Link to="/foundpets">Click here</Link>
									</p>
								</>
							</div>
						</div>
						<div className="col-4 foundPicture" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddFoundPet;
