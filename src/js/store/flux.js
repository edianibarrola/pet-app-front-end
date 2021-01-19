import fire from "../../firebase";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: "",
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			emailError: "",
			passwordError: "",
			emailSent: ""
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			clearInputs: () => {
				//Clears the input fields when signing up or logging in
				setStore({ email: "" });
				setStore({ password: "" });
				setStore({ firstName: "" });
				setStore({ lastName: "" });
			},

			clearErrors: () => {
				//Clears the error messages when signing up or logging in is successful
				setStore({ emailError: "" });
				setStore({ passwordError: "" });
			},

			handleLogin: (userEmail, userPassword) => {
				//Logins the user if the user is in the database, if not it will provide an error message as to why you cannot login
				getActions().clearErrors();
				let store = getStore();
				setStore({ email: userEmail });
				setStore({ password: userPassword });
				fire.auth()
					.signInWithEmailAndPassword(store.email, store.password)
					// .then(() => {
					// 	history.push("/dashboard");
					// })
					.catch(err => {
						switch (err.code) {
							case "auth/invalid-email":
							case "auth/user-disabled":
							case "auth/user-not-found":
								setStore({ emailError: err.message });
								break;
							case "auth/wrong-password":
								setStore({ passwordError: err.message });
								break;
						}
					});
			},

			handleSignUp: (userEmail, userPassword) => {
				//Signs up the user if the user is not in the database, if not it will provide an error message as to why you cannot signup
				getActions().clearErrors();
				let store = getStore();
				setStore({ email: userEmail });
				setStore({ password: userPassword });
				fire.auth()
					.createUserWithEmailAndPassword(store.email, store.password)
					.catch(err => {
						switch (err.code) {
							case "auth/email-already-in-use":
							case "auth/invalid-email":
								setStore({ emailError: err.message });
								break;
							case "auth/weak-password":
								setStore({ passwordError: err.message });
								break;
						}
					});
			},
			handleResetPassword: userEmail => {
				let store = getStore();
				if (userEmail != "") {
					setStore({ email: userEmail });
					fire.auth()
						.sendPasswordResetEmail(store.email)
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
				//Authenticates the user
				fire.auth().onAuthStateChanged(user => {
					if (user) {
						getActions().clearInputs();
						setStore({ user: user });
					} else {
						setStore({ user: "" });
					}
				});
			}
		}
	};
};

export default getState;
