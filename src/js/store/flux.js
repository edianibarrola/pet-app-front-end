// import fire from "../../firebase";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: "",
			fullName: "",
			emailError: "",
			passwordError: "",
			emailSent: "",
			token: "",
			url: "https://3000-dd56cdb1-af4d-43bb-bb6b-ed4132109aff.ws-us03.gitpod.io/",
			habitatList: [
				{
					habitatId: 0,
					habitatName: "Outdoor Tort Enclosure 1"
				},
				{
					habitatId: 1,
					habitatName: "Snake Rack 1"
				},
				{
					habitatId: 2,
					habitatName: "Indoor Tort Enclosure 2"
				}
			],
			petList: null,
			lostPets: null,
			foundPets: null
		},
		actions: {
			loadInitialData: () => {
				fetch(getStore().url + "pet")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ petList: jsonifiedResponse }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				fetch(getStore().url + "posts/lost")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ lostPets: jsonifiedResponse }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				fetch(getStore().url + "posts/found")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ foundPets: jsonifiedResponse }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeEmailError: msg => {
				setStore({ emailError: msg });
			},

			changePasswordError: msg => {
				setStore({ passwordError: msg });
			},

			clearErrors: () => {
				//Clears the error messages when signing up or logging in is successful
				setStore({ emailError: "" });
				setStore({ passwordError: "" });
			},
			setToken: token => {
				setStore({ token: token });
			},

			setUser: userInfo => {
				setStore({ user: userInfo });
			},

			handleLogOut: () => {
				setStore({ token: "" });
			},

			updatePetList: data => {
				console.log(data);
				fetch(getStore().url + "pet/" + data.id, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						id: data.id,
						name: data.name,
						pet_type: data.pet_type,
						sex: data.sex,
						color: data.color,
						dob: data.dob,
						habitat_id: data.habitat_id,
						note: data.note
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						fetch(getStore().url + "pet")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ petList: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addToLost: (name, petType, color, eyeColor, lastSeen, description, status) => {
				fetch(getStore().url + "posts/lost", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						pet_type: petType,
						color: color,
						eye_color: eyeColor,
						last_seen: lastSeen,
						description: description,
						status: status
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						fetch(getStore().url + "posts/lost")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ lostPets: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addToFound: (name, petType, color, eyeColor, lastSeen, description, status) => {
				fetch(getStore().url + "posts/found", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						pet_type: petType,
						color: color,
						eye_color: eyeColor,
						last_seen: lastSeen,
						description: description,
						status: status
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						fetch(getStore().url + "posts/found")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ foundPets: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};
export default getState;
