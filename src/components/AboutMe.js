import React from "react";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="section">
      <div className="  bg-bg2 bg-cover bg-no-repeat font-roboto max-h-max  flex text-white place-content-center">
        <div className="mt-20   w-5/6  h-full rounded-3xl p-5">
          <img
            src="my-image.jpg"
            alt="shivam"
            className="h-48 w-48 rounded-full m-auto "
          />

          <div className="mt-4 xl:w-5/6 lg:w-4/6 m-auto p-5 rounded-2xl text-indigo-400 text-lg font-medium md:w-5/6 sm:11/12 ">
            <div className="m-auto  ">
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
