import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = (isDarkMode) => {
  return (
    <div id = 'work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h2 className='text-5xl text-center font-Ovo'>My Latest Project</h2>

    <div className='grid gap-5 my-10 grid-cols-auto dark:text-black'>
        {workData.map((project, index)=>(
            <div key={index} style={{backgroundImage: `url($(project.bgImage))`} } className='relative bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer aspect-square group'>
              
              <div className='absolute flex items-center justify-between w-10/12 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:botton-7 '>
                 <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='flex items-center justify-center border border-black rounded-full shadow w-9 aspect-square-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </div>
                
              </div>
                 
                
                
                
            </div>
        ))}
        
    </div>
    <a href='' className='flex items-center justify-center gap-2 px-10 py-3 mx-auto my-20 text-gray-700 duration-500 border-[0.5px] border-gray-700 rounded-full w-max hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover'>
      
        Show more<Image src={isDarkMode ?  assets.right_arrow_bold_dark : assets.right_arrow_bold} alt ='Right Arrow'className='w-4'></Image>
    </a>
    </div>

    
)
}

export default Work
 