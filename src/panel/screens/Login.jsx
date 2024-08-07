import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/API";
import { Err } from "../../config/Errs";
import Cookies from "js-cookie";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const router = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const changeHandler = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API}/signin`, formData);
      if (res.status === 200) {
        toast.success("Login");
        Cookies.set("auth", res?.data.token, { expires: 3 });
        setAuth({ ...auth, token: res?.data.token });
        router("/");
      }
    } catch (error) {
      Err(error);
    } finally {
      setLoading(false);
    }
  };

  if (auth?.token && auth?.user) {
    router(`/`);
  }

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <div className="p-6">
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-left">
                <div className="grid grid-cols-1">
                  <div className="mb-4 ltr:text-left rtl:text-right">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      value={formData.email}
                      name="email"
                      onChange={changeHandler}
                      id="LoginEmail"
                      type="email"
                      className="form-input mt-3 rounded-md"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-4 ltr:text-left rtl:text-right">
                    <label className="font-semibold" htmlFor="LoginPassword">
                      Password:
                    </label>
                    <input
                      value={formData.password}
                      name="password"
                      onChange={changeHandler}
                      id="LoginPassword"
                      type="password"
                      className="form-input mt-3 rounded-md"
                      placeholder="Password:"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      onClick={submitHandler}
                      type="submit"
                      className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                      value={loading ? "....." : "Login / Sign in"}
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">Back to</span>{" "}
                    <Link to="/" className="text-black dark:text-white font-bold">
                      Home
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
