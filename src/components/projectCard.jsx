import React from 'react'
import thumbnail from '../assets/images/codeshare.jpg'
import CardBtn from './cardBtn'
import codeShare from "../assets/images/codeshare.jpg"
import projectx from "../assets/images/projectx.png"
import khoot from "../assets/images/kahoot.png"

const ProjectCard = ({data,id}) => {
    console.log("id",id)
    const image  = ()=>{
        if(id==0){
            return codeShare;
        }
        else if(id==1){
            return projectx
        }else{
            return khoot
        }
    }
    


  return (
    <div className=' w-[330px]  h-[428px] '>
    {id==0 &&<img className=' border border-light_gray' src={codeShare} alt=" not load " loading="lazy" />}
    {id==1 &&<img className=' border border-light_gray' src={projectx} alt=" not load " loading="lazy" />}
    {id==2 &&<img className=' border border-light_gray' src={khoot} alt=" not load " loading="lazy" />}

    <p className=' text-light_gray flex flex-wrap gap-3 p-4 font-normal border border-t-0 border-b-0  border-light_gray'>{
        data.skills.map((skill,index)=> <span key={index}>{skill}</span>)
    }</p>
    <div className=' border border-light_gray p-4 flex flex-col gap-y-2'>
    <h3 className=' text-subheading text-white font-medium'>{data.title}</h3>
    <p className='  text-light_gray'>{data.subheading}</p>
    <div className=' flex gap-2'>
    {data.buttons.map((btn,index)=> <CardBtn  key={index} btn={btn} />)}
    </div>
    </div>
    </div>
  )
}

export default ProjectCard