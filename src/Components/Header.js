import React from "react";
import "../Styles/App.css";
import logo from "../Assets/find-a-pop-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default Header;
