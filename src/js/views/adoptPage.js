//Make a button that takes you to another webpage
import { AdoptCard } from "../component/adoptCard";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AdoptPage = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="row align-items-center justify-content-around">
			<div className=" m-4 p-4 scrollWrapper  ">
				{store.adoptablePets.map((pet, index) => {
					console.log("Adoptable Pet ID", pet, "end");
					if (pet.contact.address.state == "FL") {
						return <AdoptCard key={pet.adoptId} propObj={pet} />;
					}
				})}
			</div>
		</div>
	);
};
