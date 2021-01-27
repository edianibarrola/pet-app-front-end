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
			url: "https://3000-bb954a08-1134-4c45-bb4c-b81574018d42.ws-us03.gitpod.io/",
			habitatList: null,
			lostPet: [
				{
					name: "Sasha",
					petType: "Cat",
					color: "Orange",
					eyeColor: "Green",
					lastSeen: "34743",
					description: "Please call my number at ###-###-#### if you found my pet!"
				},
				{
					name: "Brutus",
					petType: "Dog",
					color: "Black and white",
					eyeColor: "Blue",
					lastSeen: "34743",
					description: "Please call my number at ###-###-#### if you found my pet!"
				},
				{
					name: "Lily",
					petType: "Ferret",
					color: "Light brown and white",
					eyeColor: "Brown Yellow",
					lastSeen: "34743",
					description: "Please call my number at ###-###-#### if you found my pet!"
				}
			],
			foundPet: [
				{
					name: "Timmy",
					petType: "Cat",
					color: "Orange",
					eyeColor: "Green",
					lastSeen: "34743",
					description: "Please call my number at ###-###-#### if you found my pet!"
				},
				{
					name: "Max",
					petType: "Dog",
					color: "Black and white",
					eyeColor: "Blue",
					lastSeen: "34743",
					description: "Please call my number at ###-###-#### if you found my pet!"
				},
				{
					name: "Bouncer",
					petType: "Ferret",
					color: "Light brown and white",
					eyeColor: "Brown Yellow",
					lastSeen: "34743",
					description: "Please call my number at ###-###-#### if you found my pet!"
				}
			],
			petList: null
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
				fetch(getStore().url + "habitat")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ habitatList: jsonifiedResponse }))
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
			addPet: data => {
				fetch(getStore().url + "pet", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
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
						// console.log(jsonifiedResponse);

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

			updatePet: data => {
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
			deletePet: id => {
				fetch(getStore().url + "pet/" + id, {
					method: "DELETE"
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
								console.log("Looks like there was a problem1: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem2: \n", error);
					});
			},
			addHabitat: data => {
				fetch(getStore().url + "habitat", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						name: data.name,
						pet_in_habitat_id: data.pet_in_habitat_id,
						info: data.info,
						habitat_location: data.habitat_location,
						habitat_supplies: data.habitat_supplies,
						habitat_equipment: data.habitat_equipment
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
						// console.log(jsonifiedResponse);

						fetch(getStore().url + "habitat")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ habitatList: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			updateHabitat: data => {
				fetch(getStore().url + "habitat/" + data.id, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						id: data.id,
						name: data.name,
						pet_in_habitat_id: data.pet_in_habitat_id,
						info: data.info,
						habitat_location: data.habitat_location,
						habitat_supplies: data.habitat_supplies,
						habitat_equipment: data.habitat_equipment
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
						fetch(getStore().url + "habitat")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ habitatList: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			deleteHabitat: id => {
				fetch(getStore().url + "habitat/" + id, {
					method: "DELETE"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						fetch(getStore().url + "habitat")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ habitatList: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem1: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem2: \n", error);
					});
			}
		}
	};
};
export default getState;
