// import firebase from "firebase/app";
// import "firebase/auth";

// const app = firebase.initializeApp({
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

// export const auth = app.auth();
// export default app;
import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyABFnRlibXGPrvqmyxxEXLplxQ-D4-kzNA",
	authDomain: "petapp-development.firebaseapp.com",
	projectId: "petapp-development",
	storageBucket: "petapp-development.appspot.com",
	messagingSenderId: "644174518604",
	appId: "1:644174518604:web:ab674ccfa99f76cd5f97e9"
};

const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, fire as default };
//export default fire;
