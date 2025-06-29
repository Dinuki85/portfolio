import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
      <div>
        <Image src={assets.profile_img} alt = " "  width={100} className='rounded-full' />
       
      </div>
       <h3 className='flex items-end gap-2 text-xl md:text-2xl md-3 font-Ovo'>
           <b>Hi!I'm Dinuki Prarthana </b> 
        </h3>

        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full Stack Web Developer </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a passionate full-stack developer from Sri Lanka,Kandy, 
            skilled in crafting dynamic and user-friendly web applications. 
            

        </p>
        <div className='flex flex-col items-center gap-4 mt-4 sm:flex-row'>
            <a href='#contact' className='flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full'>
                Contact Me<Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </a>
            <a href='/dinuki_resume.pdf' download className='flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full'>
                My Resume<Image src={assets.download_icon} alt='' className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header
