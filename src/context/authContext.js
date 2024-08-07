import React, { useState, useEffect, useContext, createContext } from "react";

import axios from "axios";
import Cookies from "js-cookie";
import { API } from "../config/API";
import { Err } from "../config/Errs";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cookie = Cookies.get("auth");
    if (cookie) {
      setLoading(false);
      setAuth((prevAuth) => ({ ...prevAuth, token: cookie }));
    }
  }, []);

  const currentUser = async () => {
    try {
      const { data } = await axios.get(`${API}/current-user`);
      setLoading(false);
      setAuth((prevAuth) => ({ ...prevAuth, user: data._user }));
    } catch (error) {
      setLoading(false);
      Err(error);
    }
  };

  useEffect(() => {
    if (auth?.token) currentUser();
  }, [auth?.token]);

  axios.defaults.headers.common["Cookies"] = auth && auth?.token;

  return <AuthContext.Provider value={[auth, setAuth, loading]}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
