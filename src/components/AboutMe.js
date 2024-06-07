import React from "react";

const AboutMe = () => {
  return (
    <div
      id="AboutMe"
      className="section min-h-screen w-screen bg-[#9556cb] bg-cover bg-no-repeat"
    >
      <div className="  py-12 text-center">
        <h2 className="text-white font-roboto  text-4xl font-semibold mb-4">
          About Me
        </h2>
        <div className="mx-auto w-32 h-1 bg-gray-400 rounded-full"></div>
      </div>
      <div className="   font-roboto flex text-white place-content-center">
        <div className="mt-3   w-5/6  h-full rounded-3xl p-5">
          <img
            src="my-image.jpg"
            alt="shivam"
            className="h-48 w-48 rounded-full m-auto "
          />

          <div className="mt-4 xl:w-5/6 lg:w-4/6 m-auto p-5 rounded-2xl text-lg text-[#d4d4d4] font-medium md:w-5/6 sm:11/12 bg-[#592e8e] font-serif shadow-2xl opacity-2 ">
            <div className="m-auto  opacity-1  ">
              Hey there , i'm Shivam maurya 21-year-old coding enthusiast from
              India.
            </div>

            <div className="m-auto    ">
              I have a passion for programming and an eye for good design. My
              goal is to use my knowledge to create the best experience possible
              both visually and technically, using the latest technologies
              available. When I'm not coding or designing, I like playing chess
              and reading books.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
