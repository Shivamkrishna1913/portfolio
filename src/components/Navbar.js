import React from "react";
import logo from "./logo-color.png";

const Navbar = () => {
  return (
    <div className="p-5 fixed w-full shadow-lg">
      <div className="container mx-auto flex md:space-x-6 space-x-1 justify-between items-center">
        <div className="transition-transform transform hover:scale-125">
          <a className="" href="#home">
            <img src={logo} alt="logo" className="h-12 w-12 rounded-full" />
          </a>
        </div>
        <ul className="flex md:space-x-6 space-x-1">
          <li className="hover:bg-[#28607e]  hover:text-white shadow-lg px-1 rounded-lg transition-transform transform hover:scale-125">
            <a className="text-gray-300" href="#home">
              Home
            </a>
          </li>
          <li className="hover:bg-[#28607e] hover:text-white shadow-lg px-1 rounded-lg transition-transform transform hover:scale-125">
            <a className="text-gray-300" href="#AboutMe">
              About Me
            </a>
          </li>
          <li className="hover:bg-[#28607e] hover:text-white shadow-lg px-1 rounded-lg transition-transform transform hover:scale-125">
            <a className="text-gray-300" href="#skills">
              Skills
            </a>
          </li>
          <li className="hover:bg-[#28607e] hover:text-white shadow-lg px-1 rounded-lg transition-transform transform hover:scale-125">
            <a className="text-gray-300" href="#projects">
              Projects
            </a>
          </li>
          <li className="hover:bg-[#28607e] hover:text-white shadow-lg px-1 rounded-lg transition-transform transform hover:scale-125">
            <a className="text-gray-300" href="#contactme">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
