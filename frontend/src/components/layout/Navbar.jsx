import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; <-- REMOVE OR COMMENT OUT THIS LINE

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="material-symbols-outlined brand-icon">storefront</span>
         <span
  className="brand-title"
  style={{ color: "#8F503A" }}
>
  CraftLocal
</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
          <a href="#categories">Categories</a>
          <a href="#artisans">Artisans</a>
        </nav>

        <div className="navbar-actions">
          <Link to="/account" className="account-link">
            <span className="material-symbols-outlined">person</span>
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}