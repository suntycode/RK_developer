import React from 'react'
import Navbar from '../components/navbar'
import Button from '../components/button'
import { ROUTES } from '../routes'
import profileImg from"../assets/images/Image.png"
import dots from "../assets/images/Dots.png"
import square from "../assets/images/Logo.png"

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
   <img className=' absolute  z-10' src= {square} alt="sqaure not load" loading='lazy' /></div>
 
   <Button data={data2}  item={<span className='  text-light_gray font-medium mr-1'>currently working on </span>} square={<div className=' w-4 h-4 bg-light_pink mr-2'></div>} />
   
   </div>
   
   </section>
   

   
   </>
  )
}

export default Home