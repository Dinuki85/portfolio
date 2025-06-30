import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="flex flex-col items-center w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Centered title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-10 text-5xl text-center font-Ovo"
      >
        About me
      </motion.h2>

      {/* Full-width introduction paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-full mb-10 text-center font-Ovo"
      >
        Hi!<br />
        I am a Full Stack Web Developer and Designer with over one year 
        of experience. Currently, I am pursuing a BSc in Information Technology at the University 
        of Jaffna. My specialization includes Next.js, React.js, Spring Boot, Node.js, MySQL, and MongoDB. 
        I am a quick learner with in-demand skills, capable of building efficient and scalable web 
        applications. I am passionate about creating user-friendly designs. 
        With a strong foundation in both frontend and backend development, I’m eager to collaborate and 
        contribute to exciting projects. Feel free to get in touch for more details or opportunities.
      </motion.p>

      {/* Profile photo on the left and cards on the right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full gap-10 lg:flex-row lg:items-start"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl lg:order-1"
        >
          <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
        </motion.div>

        {/* Cards */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-2"
        >
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              key={index}
            >
              <Image src={isDarkMode ? iconDark : icon} alt={title} className="mt-3 w-7" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white/80">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-white/80">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
