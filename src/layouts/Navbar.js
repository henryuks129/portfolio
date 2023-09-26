import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import hamburger from "../assest/hamburger.svg";

const Navbar = () => {
  return (
    <div className="container sticky-top ">
      <nav className="d-flex justify-content-between pt-3 pb-3 mb-3">
        <div>
          <Link
            to={"/"}
            className="text-white text-decoration-none cursor-pointer"
          >
            <h4 className="text-white pt-2">HENRY.</h4>
          </Link>
        </div>
        <div className="">
          <ul className="list-unstyled d-flex gap-5 pt-2">
            <Link to={"/Projects"} className="text-decoration-none text-white">
              <li>Projects</li>
            </Link>
            <Link to={"/"} className="text-decoration-none text-white">
              <li>Resume</li>
            </Link>
            <Link to={"/"} className="text-decoration-none text-white">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        {/* <div className="d-lg-none">
          <img src={hamburger} alt="menu" />
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
