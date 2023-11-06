import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase/firebase.config";

export const contextProvider = createContext(null);
const Authprovider = ({ children }) => {
  const myTheme = {
    style: {
      border: "1px solid #0B666A",
      padding: "16px",
      color: "#0B666A",
    },
    iconTheme: {
      primary: "#0B666A",
    },
  };
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const providerValue = { user, googleLogin, myTheme, logout, isLoading,createUser,loginUser };
  return (
    <contextProvider.Provider value={providerValue}>
      {children}
    </contextProvider.Provider>
  );
};
Authprovider.propTypes = {
  children: PropTypes.node,
};
export default Authprovider;
