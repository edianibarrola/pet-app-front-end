//User must exist
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FoundPetCard } from "../component/foundPetCard";

export const ReportFoundPet = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	const handleChange = e => {
		setSearch(e.target.value);
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-primary" to="/addfoundpet">
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
						{store.foundPet
							? store.foundPet.map((pet, index) => {
									if (
										pet.name.toLowerCase().includes(search.toLowerCase()) ||
										pet.lastSeen.includes(search) ||
										pet.color.includes(search) ||
										pet.petType.includes(search)
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
