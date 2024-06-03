import React from "react";
import pic from "./pic.jpg";
const Home = () => {
  return (
    <div id="home" className="section">
      <div className="container bg-slate-600 h-screen w-screen flex place-content-center  ">
        <div className=" mt-36   h-96 w-5/6 flex   ">
          <div className="   h-96 w-5/12">
            <div className="mt-6 text-white text-4xl font-normal">Hello,</div>
            <div className="text-white text-5xl font-medium mt-3">
              I'm <span className="text-yellow-300">Shivam</span>
            </div>
            <div className="text-white text-5xl font-medium mt-3">
              Web developer
            </div>
            <div className="text-white text-xl mt-3">
              I am a skilled and passionate web developer with
            </div>
            <div className="text-white text-xl  ">
              experience in creating modern websites.
            </div>
          </div>
          <div className="ml-20    h-96 w-5/12">
            <img src={pic} alt="pic" className=" rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
