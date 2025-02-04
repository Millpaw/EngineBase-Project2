import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-weight-bold is-size-4">
          EngineBase
        </Link>

        {/* Hamburger menu for mobile */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={() => {
            const navbarBurger = document.querySelector(".navbar-burger");
            const navbarMenu = document.querySelector("#navbarMenu");
            navbarBurger?.classList.toggle("is-active");
            navbarMenu?.classList.toggle("is-active");
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="navbar-item">
                <button className="button is-light">Dashboard</button>
              </Link>
              <button className="button is-light navbar-item" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-item">
                <button className="button is-light">Login</button>
              </Link>
              <Link to="/register" className="navbar-item">
                <button className="button is-light">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
