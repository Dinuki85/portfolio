import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-5xl text-center font-Ovo'>My Services</h2>
      
      <div className='grid gap-6 my-10 grid-cols-auto'>
        {serviceData.map(({icon,title,description,link},index)=>(
            <div key={index} className='py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer pc-8 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 '>
                <Image src={icon} alt='' className='w-10 ' />
                <h3 className='my-4 text-lg teaxt-gray-700'>{title}</h3>
            
            <p className='text-sm leading-5 text-gray-600'>
                {description}
            </p>
            <a href={link} className='flex items-center gap-2 mt-5 text-sm'>
                Read more<Image src={assets.right_arrow}  alt =""className='w-4'/>
            </a> 
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Services
