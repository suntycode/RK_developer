import React from 'react'
import Navbar from '../components/navbar'
import { projects, SmallProject } from '../components/data'
import ProjectCard from '../components/projectCard'
import SmallProjectCard from '../components/smallProjectCard'
import Heading from '../components/Heading'

const Work = () => {
  return (
    <>
    <Navbar/>
    <Heading 
    Topheading = "projects" 
    Bottomheading = "List of my projects"/>
    <section className=" my-30">
    <div className=" flex items-center gap-x-8  my-12">
      <h2 className=" text-white text-subheading ">
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

   {/* Small-Project */}
   <section ClassName=" my-40">
   <div className=" flex items-center gap-x-8  my-12">
       <h2 className=" text-white text-subheading ">
         <span className=" text-light_pink">#</span>small-projects
       </h2>
       <p className=" w-[511px] h-[1px] mt-1  bg-light_pink"></p>
     </div>

     <div className=" grid grid-cols-3  gap-5">
       
         {SmallProject.map((project, index) => (
           <SmallProjectCard key={index} Data={project} />
         ))}
  
       </div>
   </section>
    </>
  )
}

export default Work