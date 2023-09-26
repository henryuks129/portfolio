import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import hamburger from "../assest/hamburger.svg";

const Navbar = () => {
  return (
    <div className="container sticky-top ">
      <nav className="d-flex justify-content-between pt-2 pb-2 mb-3">
        <div>
          <Link
            to={"/"}
            className="text-white text-decoration-none cursor-pointer"
          >
            <h4 className="text-white pt-2">HENRY.</h4>
          </Link>
        </div>
        <div className="d-none d-lg-block">
          <ul className="list-unstyled d-flex gap-5 pt-2">
            <Link to={"/Projects"} className="text-decoration-none text-white">
              <li>Projects</li>
            </Link>
            <Link to={"/"} className="text-decoration-none text-white">
              <li>Download Resume</li>
            </Link>
            <Link to={"/"} className="text-decoration-none text-white">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="d-lg-none">
          <img src={hamburger} alt="menu" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
