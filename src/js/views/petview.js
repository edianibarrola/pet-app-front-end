//Make a button that makes you generates a petInfo card
//Make a function that enables the user to edit with a modal
//Make a delete pet function
//Make a button that takes you to another webpage
import React from "react";
import { PetCard } from "../component/petCard";
import ReactDOM from "react-dom";

const petList = [
	{
		petId: 0,
		Name: "Meeshka",
		PetType: "Dog",
		Sex: "Female",
		Color: "Yellowish"
	},
	{
		petId: 1,
		Name: "Taika",
		PetType: "Tortoise",
		Sex: "Unknown",
		Color: "Red/Black"
	},
	{
		petId: 2,
		Name: "Buxy",
		PetType: "Cat",
		Sex: "Male",
		Color: "White/Gray"
	},
	{
		petId: 3,
		Name: "Apopis",
		PetType: "Snake",
		Sex: "Unknown",
		Color: "Red/Black"
	}
];
export const PetView = () => {
	return (
		<div className="row align-items-center justify-content-around">
			<div className=" m-4 p-4 scrollWrapper  ">
				{petList.map((pet, index) => {
					console.log("Pet ID", pet, "end");
					return <PetCard key={pet.petId} propObj={pet} />;
				})}
			</div>
			<button className="btn pcButton">Add new pet</button>
		</div>
	);
};
