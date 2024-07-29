import React from 'react'

const SkillCard = ({skillData}) => {
  return (
    <div className=' border border-light_gray w-[209px] h-fit'>
    <p className='  text-white  text-subheading font-semibold p-2 border border-light_gray border-b-1  border-r-0 border-l-0  border-t-0'>{skillData.text}</p>
    <div className=' flex flex-wrap'>
   {skillData.skills.map((skill,index)=> <span className=' text-light_gray font-normal text-subheading p-2' key={index}>{skill}</span>)}
    </div>
    </div>
  )
}

export default SkillCard