import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/front_logo.webp";
import "../CSS/navbar.css";

export const Header = () => {
  return (
    <nav className="header navbar navbar-expand-md navbar-dark px-3 py-2">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle me-2"
            style={{ height: "50px", width: "50px", objectFit: "cover" }}
          />
          <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>AeroReserve@</span>
        </NavLink>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center gap-md-3 mt-2 mt-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white nav-hover">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white nav-hover">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link text-white nav-hover">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-white nav-hover">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link text-white nav-hover">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
