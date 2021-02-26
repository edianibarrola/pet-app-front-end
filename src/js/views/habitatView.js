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
						<div className="mt-5 pt-5 py-5 px-2 bgLanding  ">
							<div className="row">
								<div className="mx-auto ">
									<button className="btn pcButton mt-5 boxShadow">
										<div className="align-items-center">
											<div>
												<h4>Add new Habitat</h4>
											</div>
											<HabitatModal
												show={this.state.isOpen}
												onClose={this.toggleModal}
												habitat={""}
											/>
										</div>
									</button>
								</div>
							</div>

							<div className=" m-4 p-4 scrollWrapper pt-4 ">
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
