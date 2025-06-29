import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = (isDarkMode) => {
  return (
    <div  className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='mx-auto mb-2 w-36' />
        
        <div className='flex items-center gap-2 mx-auto w-max'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            prarthanadinuki2@gmail.com

        </div>
        </div>
        
        <div className='items-center justify-between text-center border border-t sm:flex-gray-400 mx-[10%] mt-12 py-6'>
            <p>		&copy; 2025 Dinuki Prarthana .All right reserved</p>
            <ul className='flex justify-center gap-10 mt-4 item-center sm:mt-0'>
                <li><a target='_black' href='https://github.com/Dinuki85'>GitHub</a></li>
                <li><a target='_black' href='https://www.linkedin.com/in/dinuki-prarthana/'>LinkedIn</a></li>

                </ul>
       
        </div>
      
    </div>
  )
}

export default Footer
