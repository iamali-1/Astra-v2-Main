import Cookies from "js-cookie";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const _useCommon = () => {
  const [auth, setAuth] = useAuth();
  const router = useNavigate();

  const logout = () => {
    Cookies.remove("auth");

    setAuth({ user: null, token: "" });
    router("/");
  };

  return { logout };
};
