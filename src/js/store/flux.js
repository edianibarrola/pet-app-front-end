import fire from "../../firebase";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: "",
			fullName: "",
			emailError: "",
			passwordError: "",
			emailSent: "",
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
			petList: [
				{
					petId: 0,
					name: "Meesh",
					petType: "Dog",
					sex: "Female",
					petColor: "Yellowish"
				},
				{
					petId: 1,
					name: "Taika",
					petType: "Tortoise",
					sex: "Unknown",
					petColor: "Red/Black"
				},
				{
					petId: 2,
					name: "Buxy",
					petType: "Cat",
					sex: "Male",
					petColor: "White/Gray"
				},
				{
					petId: 3,
					name: "Apopis",
					petType: "Snake",
					sex: "Unknown",
					petColor: "Red/Black"
				}
			]
		},
		actions: {
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

			handleResetPassword: userEmail => {
				//Sends an email that resets the user's password if the email exists in the database
				if (userEmail != "") {
					fire.auth()
						.sendPasswordResetEmail(userEmail)
						.then(() =>
							setStore({
								emailSent: "An email has been sent to the provided email with further instructions."
							})
						)
						.catch(err => {
							switch (err.code) {
								case "auth/invalid-email":
									setStore({ emailError: err.message });
									break;
								case "auth/user-not-found":
									setStore({ emailError: err.message });
									break;
							}
						});
				}
			},

			handleLogOut: () => {
				//Logs the user out
				fire.auth().signOut();
			},

			authListener: () => {
				//Authenticates the user when the user signs in, is only ran once in the layout.js file, useEffect();
				fire.auth().onAuthStateChanged(user => {
					if (user) {
						setStore({ user: user });
					} else {
						setStore({ user: "" });
					}
				});
			},
			updatePetList: pet => {
				const newPetList = getStore().petList.map((input, index) => {
					if (index == pet.petId) {
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
