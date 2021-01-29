// import fire from "../../firebase";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: "",
			fullName: "",
			emailError: "",
			passwordError: "",
			emailSent: "",
			petfinder_token: "",
			login_token: "",
			url: "https://3000-dd56cdb1-af4d-43bb-bb6b-ed4132109aff.ws-us03.gitpod.io/",
			//url: "https://3000-bb954a08-1134-4c45-bb4c-b81574018d42.ws-us03.gitpod.io/",
			habitatList: [],
			petList: [],
			calendarList: [],
			adoptablePets: [],
			lostPets: null,
			foundPets: null
		},
		actions: {
			getAdoptablePets: () => {
				fetch("https://api.petfinder.com/v2/animals?type=dog&page=2", {
					headers: {
						Authorization: "Bearer " + getStore().petfinder_token
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ adoptablePets: data.animals });
					})
					.catch(err => console.log("Following errors has occurred: ", err));
			},
			getApiToken: () => {
				fetch("https://api.petfinder.com/v2/oauth2/token", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						grant_type: "client_credentials",
						client_id: "0PjeCX5aqMkV0dApIVx5Ne3wn1gokANETjuY80Rsk0wdFtpfeh",
						client_secret: "4NpBhqb0kHhhBeVclmtUldqwnBD1fERELKYuCwi1"
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						setStore({ petfinder_token: jsonifiedResponse.access_token });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
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
				fetch(getStore().url + "calendar")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ calendarList: jsonifiedResponse }))
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
				setStore({ login_token: token });
			},

			setUser: userInfo => {
				setStore({ user: userInfo });
			},

			handleLogOut: () => {
				setStore({ login_token: "" });
				setStore({ user: "" });
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
			},

			deletePost: id => {
				fetch(getStore().url + "posts/" + id, {
					method: "DELETE"
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

			updateUserProfile: (name, email, id) => {
				fetch(getStore().url + "user/" + id, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						username: name,
						email: email
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
						fetch(getStore().url + "user/" + id)
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ user: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addCalendar: data => {
				console.log(data);
				fetch(getStore().url + "calendar", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						title: data.title,

						endDate: data.endDate,
						startDate: data.startDate,
						habitatId: data.habitatId,
						notes: data.notes,
						pets: data.pets
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
						fetch(getStore().url + "calendar")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ calendarList: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			updateCalendar: (data, id) => {
				console.log("updateCalendar Data: ", data);
				fetch(getStore().url + "calendar/" + id, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						title: data.title,

						endDate: data.endDate,
						startDate: data.startDate,
						habitatId: data.habitatId,
						notes: data.notes,
						pets: data.pets,
						id: data.id
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
						fetch(getStore().url + "calendar")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ calendarList: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			deleteCalendar: id => {
				fetch(getStore().url + "calendar/" + id, {
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
						fetch(getStore().url + "calendar")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ calendarListcalendar: jsonifiedResponse }))
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
