import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
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
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const providerValue = { user, googleLogin, myTheme };
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
