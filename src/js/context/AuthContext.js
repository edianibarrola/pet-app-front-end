// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../../firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
// 	return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
// 	const [currentUser, setCurrentUser] = useState();
// 	const [loading, setLoading] = useState(true);

// 	function signup(email, password) {
// 		return auth.createUserWithEmailAndPassword(email, password);
// 	}
// 	useEffect(() => {
// 		const unsubscribe = auth.onAuthStateChanged(user => {
// 			setCurrentUser(user);
// 			setloading(false);
// 		});
// 		return unsubscribe;
// 	}, []);

// 	const value = {
// 		currentUser,
// 		signup
// 	};
// 	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// }
import React, { useContext, useState, useEffect } from "react";
import fire from "../../firebase";
import Login from "../views/login"
import { LandingPage } from "./views/landingPage";

const AppCon = () =>{
    const [user, setUser] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ emailError, setEmailError] = useState("");
    const [ passwordError, setPasswordError] = useState("");
    const [ hasAccount, setHasAccount] = useState(false);

    const clearInputs = () =>{
        setEmail("");
        setPassword("")
    }

    const clearErrors = () =>{
        setEmailError("");
        setPasswordError("")
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err )=> {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break
                    
                }
            });
    };

    const handleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err )=> {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break
                }
            });
    }

    const handleLogOut = () =>{
        fire.auth().signOut();
    }

    useEffect(() =>{
        authListener();
    }, [])

    const authListener = () => {
        fire.auth().onAuthStateChanged(user =>{
            if(user){
                clearInputs();
                setUser(user);
            }
            else{
                setUser("");
            }
        })
    }

    return(
        <div>
        {user ? (<LandingPage/>) : 
        (<div>
            <Login
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleLogin = {handleLogin}
            handleSignUp = {handleSignUp}
            hasAccount = {hasAccount}
            setHasAccount = {setHasAccount}
            emailError = {emailError}
            passwordError = {passwordError}
            />
        </div>)}
        </div>
    );
}

export default AppCon