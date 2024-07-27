import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className=' max-[1024px]  flex  justify-between  pt-[32px] pb-[8px] px-6    bg-light_green'>
    <div className=' text-white'>logo</div>
    <div className=' flex   gap-x-8'>
   <Link> <p className=' text-white'>#home</p></Link>
   <Link> <p className=' text-white'>#projects</p></Link>
   <Link> <p className=' text-white'>#contact</p></Link>
   <Link> <p className=' text-white'>#about</p></Link>
    
    
    </div>
    
    </nav>
    
    
    
    
    
    </div>
  )
}

export default Navbar