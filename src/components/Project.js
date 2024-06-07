import React from "react";

const Project = () => {
  return (
    <div
      id="projects"
      className="section w-screen bg-bg1 bg-cover bg-no-repeat"
    >
      <div className="md:h-screen max-h-max grid md:grid-cols-2  grid-rows-2 items-center content-center  border-2 pl-28  ">
        <div className="border-2 h-96 w-96 "></div>
        <div className="border-2 h-96 w-96  "></div>
      </div>
      <div className=" h-screen grid grid-cols-2 items-center content-center  border-2 pl-28 ">
        <div className="border-2 h-96 w-96 "></div>
        <div className="border-2 h-96 w-96  "></div>
      </div>
    </div>
  );
};

export default Project;
