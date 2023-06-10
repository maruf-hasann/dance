import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import apps from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const auth = getAuth(apps);
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    
    // Google login
    const googleLogin = () => {
           return signInWithPopup(auth, provider);
    }
     
    
    // User create email and  password
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    // const update profile
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL : photo
        })
    }
    // logOUt 
    const logoutUser = () => {
        return signOut(auth)
    }
    useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });
          return () => {
            return unSubscribe();
          };
    },[])

    const authInfo = {
      user,
      createUser,
      loginUser,
      updateUserProfile,
      logoutUser,
      googleLogin,
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;