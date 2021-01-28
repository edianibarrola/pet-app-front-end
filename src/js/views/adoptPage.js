//Make a button that takes you to another webpage
import { AdoptCard } from "../component/adoptCard";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const AdoptPage = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const handleChange = e => {
		setSearch(e.target.value);
	};
	return (
		<div className="bgLanding">
			<div>
				<div>
					<input
						className="list-group-item"
						type="text"
						value={search}
						onChange={handleChange}
						placeholder="Search for an adoptable pet..."
					/>
				</div>
			</div>
			<div className="row align-items-center justify-content-around">
				<div className=" m-4 p-4 scrollWrapper  ">
					{store.adoptablePets.map((pet, index) => {
						// console.log("Adoptable Pet ID", pet, "end");
						if (
							pet.species.toLowerCase().includes(search.toLowerCase()) ||
							pet.contact.address.postcode.toLowerCase().includes(search.toLowerCase()) ||
							pet.contact.address.state.toLowerCase().includes(search.toLowerCase()) ||
							pet.contact.address.city.toLowerCase().includes(search.toLowerCase())
						) {
							return <AdoptCard key={pet.adoptId} propObj={pet} />;
						} else if (search == "") {
							return <AdoptCard key={pet.adoptId} propObj={pet} />;
						}
					})}
				</div>
			</div>
		</div>
	);
};
