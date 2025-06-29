import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-5xl text-center font-Ovo"
      >
        My Latest Project
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 gap-5 my-10 sm:grid-cols-2 lg:grid-cols-3 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative rounded-lg cursor-pointer aspect-square group"
          >
            <Image
              src={project.bgImage} // Use imported images from assets.js
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute flex flex-col items-center justify-between w-10/12 p-4 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7">
              <div className="text-center">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-blue-500 hover:underline"
              >
                View Repository
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <a
        href="#"
        className="flex items-center justify-center gap-2 px-10 py-3 mx-auto my-20 text-gray-700 duration-500 border-[0.5px] border-gray-700 rounded-full w-max hover:bg-lightHover dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right Arrow"
          className="w-4"
        />
      </a>
    </motion.div>
  );
};

export default Work;
