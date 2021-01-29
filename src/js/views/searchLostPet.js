//User must exist
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LostPetCard } from "../component/lostPetCard";

export const SearchLostPet = () => {
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
						<Link className="btn btn-primary" to="/postlostpet">
							Post Looking For Lost Pet
						</Link>
					</p>
					<div className="justify-content-center d-flex">
						<input
							className="list-group-item w-50"
							type="text"
							value={search}
							onChange={handleChange}
							placeholder="Search for a lost pet by name, zipcode, or species..."
						/>
					</div>
					<div>
						{store.lostPets
							? store.lostPets.map((pet, index) => {
									if (
										pet.name.toLowerCase().includes(search.toLowerCase()) ||
										pet.last_seen.toLowerCase().includes(search.toLowerCase()) ||
										pet.pet_type.toLowerCase().includes(search.toLowerCase())
									) {
										return <LostPetCard key={index} propPet={pet} />;
									} else if (search == "") {
										return <LostPetCard key={index} propPet={pet} />;
									}
							  })
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};
