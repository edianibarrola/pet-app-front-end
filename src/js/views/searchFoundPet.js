//Be able to view as a unregistered and registered user
//User must exist
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FoundPetCard } from "../component/foundPetCard";

export const SearchFoundPet = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	const handleChange = e => {
		setSearch(e.target.value);
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-primary" to="/postfoundpet">
						Post Found Pet
					</Link>
				</p>
				<div>
					<input
						className="list-group-item"
						type="text"
						value={search}
						onChange={handleChange}
						placeholder="Search for a found pet..."
					/>
				</div>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.foundPets
							? store.foundPets.map((pet, index) => {
									if (
										pet.name.toLowerCase().includes(search.toLowerCase()) ||
										pet.lastSeen.toLowerCase().includes(search.toLowerCase()) ||
										pet.petType.toLowerCase().includes(search.toLowerCase())
									) {
										return <FoundPetCard key={index} propPet={pet} />;
									} else if (search == "") {
										return <FoundPetCard key={index} propPet={pet} />;
									}
							  })
							: null}
					</ul>
				</div>
			</div>
		</div>
	);
};
