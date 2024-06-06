import React from "react";
import pic from "./pic.jpg";
const Home = () => {
  return (
    <div id="home" className="section">
      <div className="  bg-bg1 bg-cover bg-no-repeat sm:max-h-max xl:min-h-screen border-2 font-roboto  m-auto justify-items-center items-center  ">
        <div className=" mt-36  w-11/12 border-2 grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-rows-2   gap-2 p-2  m-auto">
          <div className="  border-2 m-auto ">
            <div className="mt-6 text-white xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-normal">
              Namasté,
            </div>
            <div className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl font-medium mt-3">
              I'm <span className="text-yellow-300">Shivam</span>
            </div>
            <div className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-medium mt-3">
              Web developer
            </div>
            <div className="text-white xl:text-xl lg:text-xl md:text-lg sm:text-sm  mt-3">
              I am a skilled and passionate web developer with
            </div>
            <div className="text-white xl:text-xl lg:text-xl md:text-lg sm:text-sm  ">
              experience in creating modern websites.
            </div>
          </div>
          <div className="ml-20 border-2 m-auto">
            <img
              src={pic}
              alt="pic"
              className=" rounded-lg xl:h-60 xl:w-80 sm:h-40 sm:w-60 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
