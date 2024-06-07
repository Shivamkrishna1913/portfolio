// Navbar.js
import React from "react";
import logo from "./logo-color.png";
const Navbar = () => {
  return (
    <div className="     p-5 fixed w-full      ">
      <div className="container mx-auto flex d:space-x-6  space-x-2 justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
        </div>

        <ul className="flex md:space-x-6  space-x-2">
          <li>
            <a className="text-gray-300 hover:text-white  " href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white  " href="#AboutMe">
              About Me
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white  " href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white  " href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-gray-300 hover:text-white " href="#footer">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
