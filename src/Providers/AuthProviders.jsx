import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProviders({ children }) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => { 
      const userEmail = currentUser?.email || users?.email;
      const loggedUser = { email: userEmail };
      setUsers(currentUser);
      // console.log("current user", currentUser);
      setLoading(false);
      if (currentUser) {
        
        axios.post("https://testing-sand-phi.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then(res=> {
            console.log('token response',res.data);
          });
      }
      else {
        axios.post("https://testing-sand-phi.vercel.app/logout", loggedUser, {
          withCredentials: true
        })
          .then(res => {
          // console.log(res.data)
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    users,
    loading,
    createUser,
    SignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
export default AuthProviders;
