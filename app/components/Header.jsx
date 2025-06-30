import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="w-24 h-24 overflow-hidden rounded-full"
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          width={100}
          height={100}
          className='object-cover object-center w-full h-full'
          priority={true} // Ensures faster loading
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl md-3 font-Ovo'
      >
        <b>Hi! I'm Dinuki Prarthana</b>
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Full Stack Web Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        I am a passionate full-stack developer from Sri Lanka, Kandy,
        skilled in crafting dynamic and user-friendly web applications.
      </motion.p>

      <div className='flex flex-col items-center gap-4 mt-4 sm:flex-row'>
        <motion.a
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          href='#contact'
          className='flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full dark:bg-transparent'
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            width={16}
            height={16}
            className='w-4'
          />
        </motion.a>

        <motion.a
  initial={{ y: -30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  href='/resume.pdf' // Updated path
  download="Dinuki_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className='flex items-center gap-2 px-10 py-3 bg-white border border-gray-500 rounded-full dark:text-black'
>
  My Resume
  <Image
    src={assets.download_icon}
    alt="Download Icon"
    width={16}
    height={16}
    className='w-4'
  />
</motion.a>


      </div>
    </div>
  )
}

export default Header;
