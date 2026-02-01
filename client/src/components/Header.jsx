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

const Header = ({ toggleTheme, theme }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      style={{
        background: "var(--card-bg)",
        borderBottom: "1px solid var(--border-color)",
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "var(--accent-color)",
            textDecoration: "none",
          }}
        >
          <FaGraduationCap /> No-Show
        </Link>

        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span
              style={{
                color: "var(--text-secondary)",
                display: "none",
                md: "block",
              }}
            >
              Hello, {user.username}
            </span>

            <button
              onClick={toggleTheme}
              className="btn"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: "1.2rem",
                padding: "0.5rem",
              }}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            <Link
              to="/profile"
              className="btn"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: "1.2rem",
                padding: "0.5rem",
              }}
            >
              <FaUser />
            </Link>

            <button
              onClick={handleLogout}
              className="btn"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: "1.2rem",
                padding: "0.5rem",
              }}
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={toggleTheme}
              className="btn"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: "1.2rem",
              }}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <Link
              to="/login"
              className="btn"
              style={{ color: "var(--text-primary)" }}
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
