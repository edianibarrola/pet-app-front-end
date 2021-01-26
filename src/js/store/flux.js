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
			}
		}
	};
};
export default getState;
