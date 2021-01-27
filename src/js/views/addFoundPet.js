import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Button } from "react-bootstrap";

const AddFoundPet = () =>{
    const [name, setName] = useState("");
    const [petType, setPetType] = useState("");
    const [color, setColor] = useState("");
    const [eyeColor, setEyeColor] = useState("");
    const [lastSeen, setLastSeen] = useState("");
    const [description, setDescription] = useState("");
    const { store, actions } = useContext(Context);
    
    return(
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<div>
					<div className="card">
						<div className="card-body">
							<h2 className="text-center mb-4">Post a Found Pet</h2>
							<Form>
								<Form.Group id="name">
									<Form.Label>Name, if applicable</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setName(e.target.value)}
										value={name}
									/>
								</Form.Group>
								<Form.Group id="petType">
									<Form.Label>What type of animal?</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setPetType(e.target.value)}
										value={petType}
										required
									/>
								</Form.Group>
                                <Form.Group id="color">
									<Form.Label>Color of the animal</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setColor(e.target.value)}
                                        value={color}
                                        required
									/>
								</Form.Group>
                                <Form.Group id="eyeColor">
									<Form.Label>Eye color</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setEyeColor(e.target.value)}
                                        value={eyeColor}
                                        required
									/>
								</Form.Group>
                                <Form.Group id="lastSeen">
									<Form.Label>Where was it last seen? Or are you currently housing the animal?</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setLastSeen(e.target.value)}
                                        value={lastSeen}
                                        required
									/>
								</Form.Group>
                                <Form.Group id="description">
									<Form.Label>Description</Form.Label>
									<Form.Control
										type="text"
										onChange={e => setDescription(e.target.value)}
										value={description}
									/>
								</Form.Group>
							</Form>
							<div>
								<Button className="w-100 text-center mt-2" >
									Submit Post
								</Button>
							</div>
						</div>
					</div>
					{/* <div className="w-100 text-center mt-2">
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
							<p>
								Forgot your password?{" "}
								<Link
									to="/reset"
									onClick={() => {
										actions.clearErrors();
									}}>
									Click here
								</Link>
							</p>
						</>
					</div> */}
				</div>
			</div>
		</div>
    )
}

export default AddFoundPet