//Make a button that takes you to another webpage
import React from "react";
import { AdoptCard } from "../component/adoptCard";
import ReactDOM from "react-dom";

const adoptableList = [
	{
		adoptId: 0,
		Name: "Meeshka",
		PetType: "Dog",
		Sex: "Female",
		Color: "Yellowish"
	},
	{
		adoptId: 1,
		Name: "Taika",
		PetType: "Tortoise",
		Sex: "Unknown",
		Color: "Red/Black"
	},
	{
		adoptId: 2,
		Name: "Sir Buckley",
		PetType: "Cat",
		Sex: "Male",
		Color: "White/Gray"
	},
	{
		adoptId: 3,
		Name: "Apopis",
		PetType: "Snake",
		Sex: "Unknown",
		Color: "Red/Black"
	}
];
export const AdoptPage = () => {
	return (
		<div className="mx-auto m-4 p-4 pcGradientDarkGreen ">
			{adoptableList.map((pet, index) => {
				console.log("Adoptable Pet ID", pet, "end");
				return <AdoptCard key={pet.adoptId} propObj={pet} />;
			})}
		</div>
	);
};
