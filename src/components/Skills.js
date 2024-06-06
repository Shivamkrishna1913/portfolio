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
  const skill = [
    cpp,
    dsa,
    python,
    html,
    css,
    js,
    react,
    nodejs,
    expressjs,
    mongodb,
    socket,
    tailwind,
    bootstrap,
    reactrouter,
  ];
  return (
    <div
      id="skills"
      className="section max-h-max w-screen bg-bg3 bg-cover bg-no-repeat"
    >
      <div className="  py-12 text-center">
        <h2 className="text-white font-roboto  text-4xl font-semibold mb-4">
          My Skills
        </h2>
        <div className="mx-auto w-32 h-1 bg-gray-400 rounded-full"></div>
      </div>

      <div className="mt-6 h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 px-8">
        {skill.map((skill, index) => (
          <div key={index} className="flex justify-center">
            <div className="h-28 w-28 flex items-center justify-center rounded-lg border-2  ">
              <img src={skill} alt="" className="h-20 w-20 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
