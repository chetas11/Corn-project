import React from "react";
import logo from '../Images/logo.png'

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
          <li className="nav-item active">
            <a href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
