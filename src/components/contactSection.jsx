import React from 'react'
import Discord from "../assets/images/Vector.png";
import Email from "../assets/images/Email.png";

const ContactSection = () => {
  return (
    <section className=" mt-32">
        <div className=" flex items-center gap-x-8  my-12">
          <h2 className=" text-white text-heading ">
            <span className=" text-light_pink">#</span>contacts
          </h2>
          <p className=" w-[40%] h-[1px] mt-1  bg-light_pink"></p>
        </div>

        <div className=" flex justify-between">
          <p className=" text-white w-[505px]">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="border-solid border-2 h-32 p-3 ml-2 w-[242px] t ">
            <p className="text-white ml-2 mb-2 ">Message me here</p>
            <div className="flex mb-1 my-5">
              <img src={Discord} alt="Discord" loading="lazy" className="h-5 m-1"/>
              <p className="ml-3  text-light_gray">Elias#1234</p>
            </div>
            <div className="flex">
              <img src={Email} alt="Email" loading="lazy" />
              <p className="ml-3 mt-1 text-light_gray">elias@elias-dev.ml</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactSection