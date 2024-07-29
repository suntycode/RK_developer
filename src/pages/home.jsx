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
import Discord from "../assets/images/Vector.png";
import Email from "../assets/images/Email.png";
import SmallProjectCard from "../components/smallProjectCard";

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
      <Navbar />
      {/* section home */}

      <section className="flex  bg-bg_color my-16  justify-center items-center">
        <div className=" max-[537px] flex flex-col gap-y-6 ">
          <h3 className=" text-heading text-white  font-semibold">
            Elies is a <span className="  text-light_pink">web designer</span>{" "}
            and <span className="  text-light_pink">front end developer</span>
          </h3>
          <p className="  text-paragraph text-light_gray">
            he craft responsive websites where technology meet creativity
          </p>
          <Button data={data} />
        </div>
        <div className=" flex flex-col  items-center ">
          <div className=" relative  h-[386px] w-[469px] ">
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
          <p className=" w-[511px] h-[1px] mt-1  bg-light_pink"></p>
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
          <p className=" w-[511px] h-[1px] mt-1  bg-light_pink"></p>
        </div>

        <div className=" flex  gap-x-8 justify-between">
          <div className=" w-[349px] h-[282px] relative ">
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
          <div className=" grid grid-cols-3  gap-5">
            <div>
              {" "}
              <SkillCard skillData={skills[0]} />
            </div>
            <div className=" flex flex-col gap-y-5">
              <SkillCard skillData={skills[1]} />
              <SkillCard skillData={skills[3]} />
            </div>
            <div className=" flex flex-col gap-y-5">
              <SkillCard skillData={skills[2]} />
              <SkillCard skillData={skills[4]} />
            </div>
          </div>
        </div>
      </section>

     

      {/* section about */}

      <section>
        <div className=" flex items-center gap-x-8  my-12">
          <h2 className=" text-white text-heading ">
            <span className=" text-light_pink">#</span>about
          </h2>
          <p className=" w-[511px] h-[1px] mt-1  bg-light_pink"></p>
        </div>

        <AboutCard />
      </section>

      {/* contact about */}

      <section className=" my-32">
        <div className=" flex items-center gap-x-8  my-12">
          <h2 className=" text-white text-heading ">
            <span className=" text-light_pink">#</span>contacts
          </h2>
          <p className=" w-[511px] h-[1px] mt-1  bg-light_pink"></p>
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
    </>
  );
};

export default Home;
