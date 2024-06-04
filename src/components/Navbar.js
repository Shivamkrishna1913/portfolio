// Navbar.js
import React from "react";
import logo from "./logo-color.png";
const Navbar = () => {
  return (
    <div className="opacity-1   p-4 fixed w-full   top-0  ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
        </div>

        <ul className="flex space-x-4">
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
