import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services' 
      className='flex items-center justify-center w-full min-h-screen px-4 py-10 scroll-mt-20'
    >
      <div className='w-full text-center'>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='mb-10 text-5xl font-Ovo'
        >
          My Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className='grid w-full max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3'
        >
          {serviceData.map(({ icon, title, description }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index} 
              className='flex flex-col items-center justify-center p-8 py-12 duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white'
            >
              <Image src={icon} alt='' className='w-16 h-16 mb-6' />
              <h3 className='my-4 text-lg text-center text-gray-700 dark:text-white'>
                {title}
              </h3>
              <p className='text-sm leading-6 text-center text-gray-600 dark:text-white/80'>
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services;
