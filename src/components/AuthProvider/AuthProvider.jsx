import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [photoURLUpdated, setPhotoURLUpdated] = useState(false);

    const registerUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLoginUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const facebookLoginUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }


    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);

    }

    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            setUser(currentUser);
            setLoading(false);

            
        });

        return () => {
            unSubscribe();
        }
    },[reload])

    const authInfo = {
        user,
        registerUser,
        loginUser,
        logoutUser,
        loading,
        googleLoginUser,
        facebookLoginUser,
        photoURLUpdated,
        setPhotoURLUpdated,
        setReload,
        reload,
        setUser,
    }
    return (
        <div>
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;