import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaGraduationCap,
  FaSun,
  FaMoon,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Header.css";

const Header = ({ toggleTheme, theme }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/dashboard" className="logo-link">
          <FaGraduationCap /> attendify
        </Link>

        {user ? (
          <div className="user-nav">
            <span className="welcome-text">
              Hello, {user.username}
            </span>

            <button
              onClick={toggleTheme}
              className="btn icon-btn"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            <Link
              to="/profile"
              className="btn icon-btn"
            >
              <FaUser />
            </Link>

            <button
              onClick={handleLogout}
              className="btn icon-btn"
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <div className="auth-nav">
            <button
              onClick={toggleTheme}
              className="btn icon-btn"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <Link
              to="/login"
              className="btn login-btn"
            >
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
