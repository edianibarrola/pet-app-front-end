//User must exist
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LostPetCard } from "../component/lostPetCard";

export const ReportLostPet = () => {
	const { store, actions } = useContext(Context);
	// const [state, setState] = useState({
	// 	id: null
	// });
	const [search, setSearch] = useState("");

	const handleChange = e => {
		setSearch(e.target.value);
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-primary" to="/addlostpet">
						Post Looking For Lost Pet
					</Link>
				</p>
				<div>
					<input
						className="list-group-item"
						type="text"
						value={search}
						onChange={handleChange}
						placeholder="Search for a lost pet..."
					/>
				</div>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.lostPet
							? store.lostPet.map((pet, index) => {
									//Maps through the lostPet in store at flux.js, looks at each content at every index, and displays a ContactCard
									//with information at that specific key.
									if (
										pet.name.toLowerCase().includes(search.toLowerCase()) ||
										pet.lastSeen.includes(search) ||
										pet.color.includes(search) ||
										pet.petType.includes(search)
									) {
										//Displays the contact names if the typed letters in the input matches the contact.full_name
										return <LostPetCard key={index} propPet={pet} />;
									} else if (search == "") {
										//If the user clears the search bar, it will then again display all of the contact cards.
										return (
											<LostPetCard
												key={index}
												propPet={pet}
												// onDelete={() => setState({ showModal: true, id: contact.id })}
											/>
										);
									}
							  })
							: null}
					</ul>
				</div>
			</div>
		</div>
	);
};
