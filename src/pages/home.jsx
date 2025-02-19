import React from "react";
import Navbar from "../components/navbar";
import Button from "../components/button";
import { ROUTES } from "../routes";
import profileImg from "../assets/images/Image.png";
import dots from "../assets/images/Dots.png";
import square from "../assets/images/Logo.png";
import quote from "../assets/images/qoutes.png";
import ProjectCard from "../components/projectCard";
import { projects, skills, SmallProject } from "../components/data";
import SkillCard from "../components/skillCard";
import AboutCard from "../components/aboutCard";

import ContactSection from "../components/contactSection";




const Home = () => {
  let data = {
    text: "contact me!!",
    path: `${ROUTES.CONTACT}`,
    border: "border-light_pink",
  };

  let data2 = {
    text: " Portfolio",
    path: `${ROUTES.PROJECTS}`,
    border: "border-light_gray",
    width: "w-[402px]",
  };

  let skillData = {
    text: "language",
    skills: ["typescript", "lua", "python", "javascript"],
  };

  return (
    <>
 
      <section className="bg-bg_color p-5 "> 
       <Navbar />
      {/* section home */}
      <section className="flex w-full  my-16 justify-between  lg:flex-row  flex-col  items-center">
        <div className=" lg:w-[40%]  max-w-10/12 flex flex-col gap-y-6 ">
          <h3 className=" text-heading text-white  font-semibold">
            Elies is a <span className="  text-light_pink">web designer</span>{" "}
            and <span className="  text-light_pink">front end developer</span>
          </h3>
          <p className="  text-paragraph text-light_gray">
            he craft responsive websites where technology meet creativity
          </p>
          <Button data={data} />
        </div>
        <div className=" flex flex-col   lg:w-[40%] items-center ">
          <div className=" relative  h-[386px] ] w-full ">
            <img
              className=" absolute   z-20  "
              src={profileImg}
              alt="image not load"
              loading="lazy"
            />
            <img
              className=" absolute  z-50  bottom-10 right-7"
              src={dots}
              alt="dots not load"
              loading="lazy"
            />
            <img
              className=" absolute  top-12 z-10"
              src={square}
              alt="sqaure not load"
              loading="lazy"
            />
          </div>

          <Button
            data={data2}
            item={
              <span className="  text-light_gray font-medium mr-1">
                currently working on{" "}
              </span>
            }
            square={<div className=" w-4 h-4 bg-light_pink mr-2"></div>}
          />
        </div>
      </section>

      {/* section quotes */}

      <section className="   mt-32 mb-40 flex flex-col justify-center items-center">
        <div className=" relative">
          {" "}
          <div className=" border-light_gray border w-fit relative p-6">
            <img
              className=" absolute top-[-20px]"
              src={quote}
              alt="quotes not load"
              loading="lazy"
            />
            <p className=" text-heading font-medium text-white">
              With great power come greate electricity bill
            </p>
            <img
              className=" z-10 absolute right-5 bottom-[-20px]"
              src={quote}
              alt="quotes not load"
              loading="lazy"
            />
          </div>
          <div className=" absolute right-0 text-heading text-white border-light_gray border w-fit p-6">
            - Dr .Who
          </div>
        </div>
      </section>

      {/* section projects */}

      <section className=" my-30">
        <div className=" flex items-center gap-x-8  my-12">
          <h2 className=" text-white text-heading ">
            <span className=" text-light_pink">#</span>projects
          </h2>
          <p className=" w-[40%] h-[1px] mt-1  bg-light_pink"></p>
        </div>

        <div className=" flex gap-x-4 items-center justify-center">
          {projects.map((project, index) => (
            <ProjectCard data={project} key={index} id={index} />
          ))}
        </div>
      </section>

      {/* section skill */}

      <section className=" my-40">
        <div className=" flex items-center gap-x-8  my-12">
          <h2 className=" text-white text-heading ">
            <span className=" text-light_pink">#</span>skills
          </h2>
          <p className=" w-[40%] h-[1px] mt-1  bg-light_pink"></p>
        </div>

        <div className=" w-full flex  lg:gap-x-8 md:gap-x-5 justify-between">
          <div className=" min-w-[30%] w-[300px] h-[282px] relative ">
            <img
              className="absolute bottom-0 w-[113px]"
              src={square}
              alt="sqaure not load"
              loading="lazy"
            />
            <img
              className="absolute  w-[63px] h-[63px]"
              src={dots}
              alt="dots not load"
              loading="lazy"
            />
            <img
              className="absolute  w-[63px] h-[63px] right-28 bottom-20"
              src={dots}
              alt="dots not load"
              loading="lazy"
            />

            <div className=" absolute w-[86px] h-[86px] right-4 top-0 border border-l-light_gray"></div>
            <div className=" absolute w-[52px] h-[52px] right-0 bottom-8 border border-l-light_gray"></div>
          </div>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5">
          
         
              <SkillCard skillData={skills[0]} />
        
            
              <SkillCard skillData={skills[1]} />
              <SkillCard skillData={skills[3]} />
        
              <SkillCard skillData={skills[4]} />
              <SkillCard skillData={skills[2]} />
          
          
          </div>
        </div>
      </section>

     

      {/* section about */}

      <section>
        <div className=" flex items-center gap-x-8  my-12">
          <h2 className=" text-white text-heading ">
            <span className=" text-light_pink">#</span>about
          </h2>
          <p className=" w-[40%] h-[1px] mt-1  bg-light_pink"></p>
        </div>

        <AboutCard />
      </section>

      {/* contact about */}

      <ContactSection/>

      </section>
  
  
    </>
  );
};

export default Home;
