import React from "react";

const Contactme = () => {
  return (
    <div
      id="contactme"
      className="section min-h-screen w-screen bg-bg4 bg-cover bg-no-repeat flex items-center justify-center"
    >
      <div className="    md:px-24 md:p-10  p-2  rounded-lg md:border-2   md:border-black     ">
        <div className=" w-full flex justify-center mb-4">
          <span className=" font-roboto font-semibold text-5xl md:text-gray-900    text-white">
            Contact Me
          </span>
        </div>
        <form
          action="#home"
          className="md:text-gray-900  sm:text-white   md:m-auto sm:m-6 "
        >
          <div className="   ">
            <input
              className=" w-96  h-10 px-3 md:text-gray-900   text-white  appearance-none border md:border-black sm:border-white focus:outline-none   rounded-lg bg-transparent autofill:bg-transparent autofill:text-white md:autofill:text-gray-900  "
              id="fullname"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="  mt-4  ">
            <input
              className="w-96 h-10 px-3 md:text-gray-900   text-white appearance-none border md:border-black sm:border-white  focus:outline-none   rounded-lg   bg-transparent autofill:bg-transparent autofill:text-white md:autofill:text-gray-900 "
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className=" mt-4  ">
            <textarea
              className="w-96 h-32 px-3 pt-2 md:text-gray-900   text-white  appearance-none border md:border-black sm:border-white  focus:outline-none   rounded-lg bg-transparent  "
              id="message"
              placeholder="Message"
              required
              rows="5"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="   bg-stone-700 px-8 py-3 rounded-lg w-full text-gray-300 hover:bg-gray-800 font-semibold text-3xl font-roboto transition-transform transform hover:scale-105"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
