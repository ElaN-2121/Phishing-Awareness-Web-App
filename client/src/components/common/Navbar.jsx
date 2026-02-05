import React from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "./Button.jsx";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="PhishWise Logo" className="logo-image" />
        <span className="logo-text">PhishWise</span>
      </Link>

      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Learn
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Quizes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>

      <Button className="theme-btn" onClick={toggleTheme}>
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </nav>
  );
};

export default Navbar;
