import fire from "../../firebase";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: "",
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

			clearErrors: () => {
				//Clears the error messages when signing up or logging in is successful
				setStore({ emailError: "" });
				setStore({ passwordError: "" });
			},

			handleLogin: (userEmail, userPassword) => {
				//Logins the user if the user is in the database, if not it will provide an error message as to why you cannot login
				getActions().clearErrors();
				fire.auth()
					.signInWithEmailAndPassword(userEmail, userPassword)
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
				fire.auth()
					.createUserWithEmailAndPassword(userEmail, userPassword)
					.catch(err => {
						switch (err.code) {
							case "auth/weak-password":
								setStore({ passwordError: err.message });
								break;
							case "auth/email-already-in-use":
								setStore({ emailError: err.message });
								break;
							case "auth/invalid-email":
								setStore({ emailError: err.message });
								break;
						}
					});
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
				//Authenticates the user
				fire.auth().onAuthStateChanged(user => {
					if (user) {
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
