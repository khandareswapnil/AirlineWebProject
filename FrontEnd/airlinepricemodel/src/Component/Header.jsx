import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/front_logo.webp";
import "../CSS/navbar.css";

export const Header = () => {
  return (
    <nav
      className="shadow-md p-3 w-100 d-flex align-items-center justify-content-between"
      style={{
        height: "80px",
        background: "rgba(0, 51, 102, 0.9)", // Semi-transparent navbar
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
      }}
    >
      {/* Logo and Brand Name */}
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Project Logo"
          style={{ height: "65px" }}
          className="rounded-circle me-2"
        />
        <h2 className="m-0 text-white" style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.5px" }}>AeroReserve@</h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav d-flex gap-4">
        <li className="nav-item">
          <NavLink to="/" className="nav-link fs-5 text-white nav-hover">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link fs-5 text-white nav-hover">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link fs-5 text-white nav-hover">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link fs-5 text-white nav-hover">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link fs-5 text-white nav-hover">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
