import React from "react";
import chatterbox from "../project-img/chatterbox.png";
import facebook from "../project-img/facebook-clone.png";
import snake from "../project-img/snakegame.png";
import flogo from "../project-logo/facebook-logo.jpeg";
import chat from "../project-logo/chat-logo.png";
import slogo from "../project-logo/snake-logo.avif";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const Project = () => {
  return (
    <div
      id="projects"
      className="section w-screen bg-bg1 bg-cover bg-no-repeat font-roboto  "
    >
      <div className=" md:h-screen max-h-max grid md:grid-cols-2 grid-rows-2 items-center pt-60 gap-10   md:pl-28   md:pb-20  pb-4 ">
        <div className="border-2 border-white rounded-3xl h-96 w-96 bg-blue-900  mx-auto ">
          {/*logo name/skill link */}
          <div className=" w-full flex  p-8     ">
            <div className="m-auto w-1/5">
              <img src={flogo} alt="logo" className="  w-9 rounded-full" />
            </div>
            <div className="pl-2 m-auto w-3/5">
              <div className="  text-white  font-medium   font-roboto text-xl">
                Facebook-clone
              </div>
              <div className="text-sm text-slate-300 font-sans">HTML | CSS</div>
            </div>
            <div className="   m-auto w-1/5">
              <button className="bg-sky-500 px-4 py-1 rounded-3xl   ">
                <a href="https://shivam-facebook.vercel.app/" target="_blank">
                  <div className="flex">
                    <div className="font-medium">Visit</div>
                    <div className="pt-1">
                      <LuArrowUpRightFromCircle />
                    </div>
                  </div>
                </a>
              </button>
            </div>
          </div>

          <div className="ml-5 mt-5 mb-5">
            <p className="text-base text-slate-300">
              {" "}
              Facebook login page clone .
            </p>
          </div>
          <div className="p-4">
            <img src={facebook} alt="img" className="  rounded-xl" />
          </div>
        </div>
        <div className="border-2 border-[#5F9EA0] rounded-3xl h-96 w-96 bg-[#097969]  mx-auto ">
          {/*logo name/skill link */}
          <div className=" w-full flex  p-8     ">
            <div className="m-auto w-1/5    ">
              <img src={chat} alt="logo" className=" w-9 rounded-full" />
            </div>
            <div className="pl-2 m-auto w-3/5">
              <div className="  text-white  font-medium   font-roboto text-xl">
                ChatterBox
              </div>
              <div className="text-xs text-slate-300 font-sans">
                MONGODB | EXPRESSJS | REACTJS | NODEJS | SOCKET IO
              </div>
            </div>
            <div className="   m-auto w-1/5">
              <button className="bg-[#478778] px-4 py-1 rounded-3xl   ">
                <a href="https://shivam-facebook.vercel.app/" target="_blank">
                  <div className="flex">
                    <div className="font-medium">Visit</div>
                    <div className="pt-1">
                      <LuArrowUpRightFromCircle />
                    </div>
                  </div>
                </a>
              </button>
            </div>
          </div>

          <div className="ml-5 mt-5 mb-5">
            <p className="text-base text-slate-300">
              {" "}
              Chat with your friends .
            </p>
          </div>
          <div className="p-4">
            <img src={chatterbox} alt="img" className="  rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
