import React, { useContext } from "react";
import { HabitatCard } from "../component/habitatCard";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";

export default class HabitatView extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<button className="btn pcButton  mt-5">Add New Habitat</button>
							<div className=" m-4 p-4 scrollWrapper  ">
								{store.habitatList
									? store.habitatList.map((habitat, index) => {
											console.log(habitat);
											return <HabitatCard key={habitat.habitatId} propObj={habitat} />;
									  })
									: "getting data"}
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
