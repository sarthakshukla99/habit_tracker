// importing required libraries
import React from "react";
import { Link } from "react-router-dom";

// importing css files
import Class from "./Navbar.module.css";

// creating a Navbar component
const Navbar = () => {
  return (
    <div className={Class.nav}>
      <h1>M Y - H A B I T_T R A C K E R </h1>
      <div>
        <Link className={Class.link} to={"/"}>
        <i class="fa-solid fa-house"></i>
        </Link>
        <Link className={Class.link} to={"/dashboard"}>
        <i class="fa-solid fa-calendar-days"></i>
        </Link>
      </div>
    </div>
  );
};

// exporiting Navbar component
export default Navbar;
