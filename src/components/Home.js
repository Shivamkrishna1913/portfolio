import React from "react";
import pic from "./pic.jpg";
import "../index.css";
const Home = () => {
  return (
    <div
      id="home"
      className="section h-screen w-screen  bg-bg1 bg-cover bg-no-repeat  "
    >
      <div className="  p-10 ">
        <div className=" mt-6 font-roboto  grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-rows-2   gap-1 p-2   m-auto">
          <div className="   m-auto ">
            <div className="mt-6 text-white xl:text-5xl lg:text-3xl md:text-3xl sm:text-2xl font-normal">
              Namasté,
            </div>
            <div className="text-white xl:text-7xl   lg:text-6xl md:text-5xl sm:text-4xl font-medium md:mt-3 sm:mt-1">
              I'm <span className="text-yellow-300">Shivam</span>
            </div>
            <div className="text-white xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-medium md:mt-3 sm:mt-1">
              Web developer
            </div>
            <div className="text-white xl:text-xl lg:text-xl md:text-lg sm:text-sm  md:mt-3 sm:mt-1">
              I am a skilled and passionate web developer with
            </div>
            <div className="text-white xl:text-xl lg:text-xl md:text-lg sm:text-sm md:mt-3 sm:mt-1 ">
              experience in creating modern websites.
            </div>
          </div>
          <div className=" m-auto  mt-16 mb-16 ">
            <img
              src={pic}
              alt="pic"
              className="rounded-xl   md:xl-home-img sm:sm-home-img     "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
