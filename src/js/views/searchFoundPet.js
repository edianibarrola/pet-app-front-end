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
		<div className="bgSearch">
			<div className="container bgLanding">
				<div style={{ padding: "50px" }} />
				<div>
					<p className="justify-content-center d-flex">
						<Link className="postButton w-50 text-center" to="/postfoundpet">
							Post Found Pet
						</Link>
					</p>
					<div className="justify-content-center d-flex">
						<input
							className="list-group-item w-50"
							type="text"
							value={search}
							onChange={handleChange}
							placeholder="Search for a found pet by name, zipcode, or species..."
						/>
					</div>
					<div>
						{store.foundPets
							? store.foundPets.map((pet, index) => {
									if (
										pet.name.toLowerCase().includes(search.toLowerCase()) ||
										pet.last_seen.toLowerCase().includes(search.toLowerCase()) ||
										pet.pet_type.toLowerCase().includes(search.toLowerCase())
									) {
										return <FoundPetCard key={index} propPet={pet} />;
									} else if (search == "") {
										return <FoundPetCard key={index} propPet={pet} />;
									}
							  })
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};
