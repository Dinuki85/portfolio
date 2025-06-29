import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-5xl text-center font-Ovo'>About me</h2>
      
      <div className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
         <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
      </div>
      <div className='flex-1'>
        <p className='max-w-2xl mb-10 font-Ovo'>I am a Full stack web developer and designer with more that 6 months of experience and also I am a undergraduate students at University of Jaffna specializing the areas Next js, React js ,Springboot, Mysql ,MongoDB and node js.I am a quick learner with well demanded skills suitablke for creating projects and working with others.Get in touch with me for more details. </p>
        
        <ul className='grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3'>
            {infoList.map(({icon, iconDark, title, description},index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white
                dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                    <Image src={isDarkMode ?  iconDark : icon} alt={title} className='mt-3 w-7'/>
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white/80'>{title}</h3>
                    <p className='text-sm text-gray-600 dark:text-white/80'>{description}</p>
                </li>
            ))}
        </ul>
        
        <h4 className='my-6 text-gray-700 font-Ovo'>Tools That I Use</h4>
        <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
                <li className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1' key={index} >
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
                
            ))}
        </ul>
        
      </div>
        
      </div>
     
    </div>
  )
}

export default About
