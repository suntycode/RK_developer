import React from 'react'
import Navbar from '../components/navbar'
import AboutCard from '../components/aboutCard'
import SkillCard from '../components/skillCard'
import dots from "../assets/images/Dots.png";
import square from "../assets/images/Logo.png";
import { skills } from '../components/data';

const About = () => {
  return (
    <>
    <Navbar/>
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


 <section className=" my-40">
 <div className=" flex items-center gap-x-8  my-12">
   <h2 className=" text-white text-heading ">
     <span className=" text-light_pink">#</span>skills
   </h2>
   <p className=" w-[511px] h-[1px] mt-1  bg-light_pink"></p>
 </div>

 <div className=" flex  gap-x-8 justify-between">

 {/* Skill Card */}
 {skills.map((skill, index) => (
  <SkillCard key={index} skillData={skill} />
 ))}
   
  
 </div>
</section>
    </>
  )
}

export default About