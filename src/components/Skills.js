import React from "react";
import cpp from "../skill_image/cpp.jpg";
import bootstrap from "../skill_image/bootstrap.png";
import css from "../skill_image/css.webp";
import dsa from "../skill_image/dsa.webp";
import expressjs from "../skill_image/expressjs.png";
import html from "../skill_image/html.png";
import js from "../skill_image/js.png";
import mongodb from "../skill_image/mongodb.jpg";
import nodejs from "../skill_image/nodejs.png";
import python from "../skill_image/python.jpg";
import react from "../skill_image/react.png";
import reactrouter from "../skill_image/reactrouter.png";
import socket from "../skill_image/socket.webp";
import tailwind from "../skill_image/tailwind.png";
const Skills = () => {
  return (
    <div
      id="skills"
      className="section h-screen w-screen bg-bg3 bg-cover bg-no-repeat"
    >
      <div className="  flex  place-content-center  ">
        <span className="mt-5 text-sky-400 font-roboto font-medium text-2xl">
          My skills
        </span>
      </div>
      <div className=" mt-6 space-x-1    h-screen w-screen grid grid-cols-6 gap-0 p-4   ml-14    ">
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={cpp} alt="" className="h-20 w-20 rounded-md " />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={dsa} alt="" className="h-20 w-20 rounded-md " />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={python} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={html} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={css} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={js} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={react} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={nodejs} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={expressjs} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={mongodb} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={socket} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={tailwind} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={bootstrap} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
        <div className="h-28 w-28 flex    rounded-md border-2 border-dashed">
          <div className="m-auto">
            <img src={reactrouter} alt="" className="h-20 w-20 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
