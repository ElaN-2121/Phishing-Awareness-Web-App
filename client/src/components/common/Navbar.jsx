import React from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "./Button.jsx";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="PhishWise Logo" className="logo-image" />
        <span className="logo-text">PhishWise</span>
      </Link>

      <ul className="navbar-links">
        <li>Home</li>
        <li>Learn</li>
        <li>Quizes</li>
        <li>Dashboard</li>
      </ul>

      <Button className="theme-btn" onClick={toggleTheme}>
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </nav>
  );
};

export default Navbar;
