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
			passwordError: ""
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			clearInputs: () => {
				setStore({ email: "" });
				setStore({ password: "" });
				setStore({ firstName: "" });
				setStore({ lastName: "" });
			},

			clearErrors: () => {
				setStore({ emailError: "" });
				setStore({ passwordError: "" });
			},

			handleLogin: (userEmail, userPassword) => {
				getActions().clearErrors();
				let store = getStore();
				setStore({ email: userEmail });
				setStore({ password: userPassword });
				fire.auth()
					.signInWithEmailAndPassword(store.email, store.password)
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

			handleLogOut: () => {
				fire.auth().signOut();
			},

			authListener: () => {
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
