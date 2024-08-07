import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../src/assets/css/tailwind.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Toaster position="bottom-center" reverseOrder={false} />
    <App />
  </AuthProvider>
);
