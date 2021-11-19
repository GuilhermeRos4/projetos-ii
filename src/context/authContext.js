/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { auth, userService } from "../services";

const AuthContext = React.createContext(); // cria o contexto

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // we use useEffect because we don't want to use it every time the component is rendered, only when it is mounted.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        userService
          .getUser()
          .then((data) => setCurrentUser(data))
          .catch((erro) => global.alert(erro))
          .finally(() => setLoading(false));
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* if the loading is false, then we render the children */}
    </AuthContext.Provider>
  );
}
