//User must exist
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LostPetCard } from "../component/lostPetCard";

export const SearchLostPet = () => {
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
					<Link className="btn btn-primary" to="/postlostpet">
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
						{store.lostPets
							? store.lostPets.map((pet, index) => {
									if (
										pet.name.toLowerCase().includes(search.toLowerCase()) ||
										pet.lastSeen.toLowerCase().includes(search.toLowerCase()) ||
										pet.petType.toLowerCase().includes(search.toLowerCase())
									) {
										return <LostPetCard key={index} propPet={pet} />;
									} else if (search == "") {
										return <LostPetCard key={index} propPet={pet} />;
									}
							  })
							: null}
					</ul>
				</div>
			</div>
		</div>
	);
};
