import React from 'react'
import Navbar from '../components/navbar'
import Button from '../components/button'
import { ROUTES } from '../routes'
import profileImg from"../assets/images/Image.png"
import dots from "../assets/images/Dots.png"
import square from "../assets/images/Logo.png"
import quote from "../assets/images/qoutes.png"
import ProjectCard from '../components/projectCard'
import { projects } from '../components/projects'


const Home = () => {

  let data = {
    text:"contact me!!",
    path:`${ROUTES.CONTACT}`,
    border:"border-light_pink",
  
  }

  let data2 = {
    text:" Portfolio",
    path:`${ROUTES.PROJECTS}`,
     border:"border-light_gray",
       width:"w-[402px]"
  }




  return (
   <>

  
   
   <Navbar/>
   {/* section home */}
    
   <section className='flex  bg-bg_color my-16  justify-center items-center'>
   <div className=' max-[537px] flex flex-col gap-y-6 '>
   <h3 className=' text-heading text-white  font-semibold'>Elies is a <span className='  text-light_pink'>web designer</span> and <span className='  text-light_pink'>front end developer</span></h3>
    <p className='  text-paragraph text-light_gray'>he craft responsive websites where technology meet creativity</p>
   <Button data={data}  />
   </div>
   <div className=' flex flex-col  items-center '>
   <div className=' relative  h-[386px] w-[469px] '>
    <img className=' absolute   z-20  '  src={profileImg}  alt='image not load' loading='lazy' />
   <img className=' absolute  z-50  bottom-10 right-7' src={dots}  alt='dots not load' loading='lazy'  />
   <img className=' absolute  top-12 z-10' src= {square} alt="sqaure not load" loading='lazy' /></div>
 
   <Button data={data2}  item={<span className='  text-light_gray font-medium mr-1'>currently working on </span>} square={<div className=' w-4 h-4 bg-light_pink mr-2'></div>} />
   
   </div>
   
   </section>
   
 {/* section quotes */}

 <section className='  my-60 flex flex-col justify-center items-center'>
 <div className=' relative'> <div className=' border-light_gray border w-fit relative p-6'>
  <img  className=' absolute top-[-20px]' src={quote} alt='quotes not load' loading='lazy' />
  <p className=' text-heading font-medium text-white'>With great power come  greate electricity bill</p>
  <img className=' z-10 absolute right-5 bottom-[-20px]' src={quote } alt='quotes not load' loading='lazy' />
  </div>
 <div className=' absolute right-0 text-heading text-white border-light_gray border w-fit p-6'>
 - Dr .Who
 </div></div>
 
 </section>

 {/* section projects */}

 <section className=' my-64'>
 <div className=' flex items-center gap-x-8  my-12'> 
 <h2 className=' text-white text-heading '><span className=' text-light_pink'>#</span>projects</h2>
 <p className=' w-[511px] h-[1px] mt-1  bg-light_pink'></p>
 </div>

 <div className=' flex gap-x-4'>
 
 {projects.map((project,index)=> <ProjectCard    data={project} key={index} id={index} />)}



 </div>
 
 
 </section>
   
   </>
  )
}

export default Home