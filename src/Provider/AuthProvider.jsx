import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import apps from "../Firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const auth = getAuth(apps);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // Google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  // User create email and  password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // const update profile
  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // logOUt
  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
 if (currentUser) {
   axios
     .post("http://localhost:5000/jwt-token", {
       email: currentUser.email,
     })
     .then((data) => {
       localStorage.setItem("access-token", data.data.token);
       setLoader(false);
     });
 } else {
   localStorage.removeItem("access-token");
 }
     
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    updateUserProfile,
    logoutUser,
    googleLogin,
    loader,
    setLoader,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
