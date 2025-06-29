import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-5xl text-center font-Ovo'
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col w-full gap-20 my-20 lg:flex-row lg:items-center sm:items-center'
      >
        {/* Moved image to start */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='order-1 w-64 sm:w-80 rounded-3xl max-w-none lg:order-1'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 order-2 lg:order-2'
        >
          <p className='max-w-2xl mb-10 font-Ovo'>
            Hi!<br />
            I am a Full Stack Web Developer and Designer with over one year 
            of experience. Currently, I am pursuing a BSc in Information Technology at the University 
            of Jaffna. My specialization includes Next.js, React.js, Spring Boot, Node.js, MySQL, and MongoDB. 
            I am a quick learner with in-demand skills, capable of building efficient and scalable web 
            applications. I am passionate about creating user-friendly designs and robust backend solutions.
             With a strong foundation in both frontend and backend development, I’m eager to collaborate and 
             contribute to exciting projects. Feel free to get in touch for more details or opportunities.
          </p>

        

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white
                dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='mt-3 w-7' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white/80'>{title}</h3>
                <p className='text-sm text-gray-600 dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-gray-700 font-Ovo'
          >
            Tools That I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 duration-500 border border-gray-400 rounded-lg cursor-pointer sm:w-14 aspect-square hover:-translate-y-1'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
