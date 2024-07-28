import React from "react";
import Button from "./button";
import { ROUTES } from "../routes";
import profileImg from "../assets/images/image1.png";
import dots from "../assets/images/Dots.png"

const AboutCard = () => {

    let data = {

        "text": "Read more ->",
        path:`${ROUTES.ABOUT}`,
        border:"border-light_pink",
    }
  return (
    <div className=" flex  justify-between"> 
      <div className=" w-[515px] flex items-center">
      <div className=" flex flex-col gap-y-6">
      
      <p className=" text-light_gray">
      Hello, i’m Elias!   </p>
      <p  className=" text-light_gray">
    
        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
        develop responsive websites from scratch and raise them into modern
        user-friendly web experiences.{" "}
      </p>
      <p  className=" text-light_gray">

        Transforming my creativity and knowledge into a websites has been my
        passion for over a year. I have been helping various clients to
        establish their presence online. I always strive to learn about the
        newest technologies and frameworks.
      </p>
 
    <Button  data={data} /></div>
      </div>

      <div className=" relative">
      <img src={profileImg}  alt="not load" loading="lazy"   />
      <img className=" absolute top-0 left-0" src={dots}  alt="not load" loading="lazy"   />
      <img className=" absolute top-[45%] left-[45%]" src={dots}  alt="not load" loading="lazy"   />
      <img className="absolute  bottom-0 right-0" src={dots}  alt="not load" loading="lazy"   />
      
      </div>
    </div>
  );
};

export default AboutCard;
