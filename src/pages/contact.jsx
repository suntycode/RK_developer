import React from "react";
import Navbar from "../components/navbar";
import Twitter from "../assets/images/Twitter.png";
import Discord from "../assets/images/Vector.png";
import Email from "../assets/images/Email.png";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-screen max-w-screen">
        <div className="text-white mt-6">
          <p className=" text-heading">
            <span className="text-light_pink">/</span>contacts
          </p>
          <p className="text-paragraph text-light_gray">Who am i?</p>
        </div>

        <div className="flex text-paragraph text-light_gray w-[1061px] h-[141px] mt-10">
          <div>
            <p className="w-[360px]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="border-solid border-2 w-50 h-20 p-3 leading-7 ml-[300px]">
            <p className="text-white ">Support me here</p>
            <p>4149500120690030</p>
          </div>
          <div className="border-solid border-2 h-32 p-3 ml-2 ">
            <p className="text-white mb-2">Message me here</p>
            <div className="flex mb-1">
              <img src={Discord} alt="Discord" loading="lazy" className="h-5 m-1"/>
              <p className="ml-3">Elias#1234</p>
            </div>
            <div className="flex">
              <img src={Email} alt="Email" loading="lazy" />
              <p className="ml-3 mt-1">elias@elias-dev.ml</p>
            </div>
          </div>
        </div>
        <div className="text-paragraph text-light_gray mt-10">
          <p className=" text-heading text-white">
            <span className="text-light_pink">#</span>all-media
          </p>
          <div className="flex">
            <img src={Twitter} alt="Twitter" loading="lazy" />
            <p>@elias</p>
          </div>
          <div className="flex">
            <img src={Twitter} alt="Twitter" loading="lazy" />
            <p>@elias</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
