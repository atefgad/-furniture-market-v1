import { useState, useEffect } from "react";
// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

import toast from "react-hot-toast";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //Logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // toast.success("logged out successfully");
      })
      .catch((error) => toast.error(error.message));
  };

  return { user, logout };
};

export default useAuth;
