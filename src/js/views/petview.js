//Make a button that makes you generates a petInfo card
//Make a function that enables the user to edit with a modal
//Make a delete pet function
//Make a button that takes you to another webpage
import React, { useContext } from "react";
import { PetCard } from "../component/petCard";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";

export default class PetView extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="align-items-center justify-content-around">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<button className="btn pcButton mt-5">Add new pet</button>
								<div className=" m-4 p-4 scrollWrapper  ">
									{store.petList
										? store.petList.map((pet, index) => {
												console.log(pet);
												return <PetCard key={pet.id} pet_prop={pet} />;
										  })
										: "getting data"}
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
