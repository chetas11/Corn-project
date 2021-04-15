import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" href="#">
        <img className="img-fluid logo" src={logo} alt="logo" />
      </span>
      <button
        className="navbar-toggler m-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink exact className="navlink" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navlink" activeClassName="active" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navlink"
              activeClassName="active"
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navlink" activeClassName="active" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navlink" activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
