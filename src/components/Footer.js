import React from "react";
import linkedin from "../social-media/linkedin.png";
import twitter from "../social-media/twitter.png";
import youtube from "../social-media/youtube.png";

const Footer = () => {
  return (
    // <div className="w-full h-60 bg-[#4f52a4] flex">
    //   <div className="w-96 m-auto bg-[#2b2c77] p-5 rounded-xl">
    <div className="w-full h-60 bg-[#1f1b66] flex">
      <div className="w-96 m-auto bg-[#1a3f76] p-5 rounded-xl">
        <div className="flex mb-5">
          <span className="m-auto font-mono font-medium text-lg text-white">
            Get in touch
          </span>
        </div>
        <div className="flex justify-evenly">
          <div className="rounded-full w-fit">
            <a
              href="https://www.linkedin.com/in/shivam-maurya-609789231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="link"
                className="w-10 transition-transform transform hover:scale-125"
              />
            </a>
          </div>
          <div className="rounded-full w-fit">
            <a
              href="https://www.youtube.com/channel/UCOMGGrH2Rpg-gR-gRMm_S9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                alt="link"
                className="w-10 transition-transform transform hover:scale-125"
              />
            </a>
          </div>
          <div className="rounded-full w-fit">
            <a
              href="https://twitter.com/shiv_mmaurya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="link"
                className="w-10 transition-transform transform hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
