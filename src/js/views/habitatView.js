import React, { useContext } from "react";
import { HabitatCard } from "../component/habitatCard";
import { HabitatModal } from "../component/habitatModal";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";

export default class HabitatView extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							Add new Habitat
							<HabitatModal show={this.state.isOpen} onClose={this.toggleModal} habitat={""} />
							<div className=" m-4 p-4 scrollWrapper  ">
								{store.habitatList
									? store.habitatList.map((habitat, index) => {
											console.log(habitat);
											return <HabitatCard key={habitat.id} prop_habitat={habitat} />;
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
