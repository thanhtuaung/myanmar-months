import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-font">
      <div className="container d-flex align-items-center">
        <div className="flex-grow-1 text-start">
          <Link to="/">
            <img
              src={logo}
              alt=""
              color="white"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </Link>
        </div>
        <div className="flex-grow-1">
          <Link className="link" to="/">
            <span data-aos="zoom-in" data-aos-duration="1400">
              Myanmar Months and Festivals
            </span>
          </Link>
        </div>
        <div className="flex-grow-1"></div>
      </div>
    </div>
  );
};

export default Navbar;
