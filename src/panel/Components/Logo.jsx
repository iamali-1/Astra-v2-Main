import React from "react";
import logo_web_dark from "../../assets/images/dark_logo.png";

const Logo = ({ fromH }) => {
  return <img src={logo_web_dark} className={`h-${fromH}`} alt="logo" />;
};

export default Logo;
