import React from "react";
import logo from "../assets/header/logo.png";
import "../assets/css/Header.css";

export const Header = () => {
  return (
    <div className="header__global">
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
    </div>
  );
};
