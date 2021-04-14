import React from "react";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";


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
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">
              <button>Gallery</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products">
              <button>Products</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus">
              <button>About Us</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
