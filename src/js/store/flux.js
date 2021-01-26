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
			petList: null,
			getPetUrl: "https://3000-bb954a08-1134-4c45-bb4c-b81574018d42.ws-us03.gitpod.io/pet"
		},
		actions: {
			loadInitialData: () => {
				fetch(getStore().getPetUrl)
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

			// handleResetPassword: userEmail => {
			// 	//Sends an email that resets the user's password if the email exists in the database
			// 	if (userEmail != "") {
			// 		fire.auth()
			// 			.sendPasswordResetEmail(userEmail)
			// 			.then(() =>
			// 				setStore({
			// 					emailSent: "An email has been sent to the provided email with further instructions."
			// 				})
			// 			)
			// 			.catch(err => {
			// 				switch (err.code) {
			// 					case "auth/invalid-email":
			// 						setStore({ emailError: err.message });
			// 						break;
			// 					case "auth/user-not-found":
			// 						setStore({ emailError: err.message });
			// 						break;
			// 				}
			// 			});
			// 	}
			// },
			// handleLogin: (userEmail, userPassword) => {
			// 	let store = getStore();
			// 	fetch(store.url + "login", {
			// 		method: "POST",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({ email: userEmail, password: userPassword })
			// 	})
			// 		.then(function(response) {
			// 			if (!response.ok) {
			// 				throw Error(response.statusText);
			// 			}
			// 			return response.json();
			// 		})
			// 		.then(token => {
			// 			if (token.msg) {
			// 				throw Error(token.msg);
			// 			} else {
			// 				setStore({ token: token.access_token });
			// 			}
			// 		})
			// 		.catch(function(error) {
			// 			console.log("Looks like there was a problem: \n", error);
			// 		});
			// },

			// handleLogOut: () => {
			// 	//Logs the user out
			// 	fire.auth().signOut();
			// },

			// authListener: () => {
			// 	//Authenticates the user when the user signs in, is only ran once in the layout.js file, useEffect();
			// 	fire.auth().onAuthStateChanged(user => {
			// 		if (user) {
			// 			setStore({ user: user });
			// 		} else {
			// 			setStore({ user: "" });
			// 		}
			// 	});
			// },
			updatePetList: pet => {
				const newPetList = getStore().petList.map((input, index) => {
					if (input.id == pet.id) {
						input.name = pet.name;
						return input;
					} else {
						return input;
					}
				});
				setStore({ petList: newPetList });
			}
		}
	};
};
export default getState;
