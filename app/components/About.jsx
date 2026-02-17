import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiSpring, SiMongodb, SiMysql, SiNextdotjs } from 'react-icons/si';

const techStack = [
  { name: 'Next.js', icon: <SiNextdotjs size={36} className="text-black dark:text-white" /> },
  { name: 'Spring Boot', icon: <SiSpring size={36} className="text-green-600" /> },
  { name: 'React.js', icon: <FaReact size={36} className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs size={36} className="text-green-700" /> },
  { name: 'MySQL', icon: <SiMysql size={36} className="text-blue-800" /> },
  { name: 'MongoDB', icon: <SiMongodb size={36} className="text-green-500" /> },
  { name: 'Git/GitHub', icon: <FaGithub size={36} className="text-gray-700 dark:text-gray-300" /> },
  { name: 'Docker', icon: <FaDocker size={36} className="text-blue-600" /> },
  {
    name: 'IntelliJ IDEA',
    icon: (
      <Image
        src={assets.intelij_idea}
        alt="IntelliJ IDEA"
        width={36}
        height={36}
        className="dark:filter dark:invert"
      />
    ),
  },
  {
    name: 'VS Code',
    icon: (
      <Image
        src={assets.vscode}
        alt="VS Code"
        width={36}
        height={36}
        className="dark:filter dark:invert"
      />
    ),
  },
];

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="flex flex-col items-center w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-10 text-6xl font-bold text-center font-Ovo lg:text-7xl"
      >
        About me
      </motion.h2>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-full mb-8 text-lg font-light leading-relaxed text-center font-Ovo dark:text-gray-200"
      >
        I am an Information Technology undergraduate at University of Jaffna with hands-on experience in designing, developing, and testing full-stack web applications using Spring Boot, React, and modern web technologies. I have built secure RESTful APIs with JWT-based authentication, designed normalized database schemas using MySQL and MongoDB, and integrated scalable frontend–backend systems following clean architectural principles.
<br/>  
Alongside development, I emphasize software quality through API testing with Postman, input validation, exception handling, and structured service-layer implementation to ensure reliability and maintainability. I am continuously expanding my knowledge in cloud technologies and modern deployment practices to build resilient, production-ready applications.
<br/>
Driven by curiosity and a commitment to continuous improvement, I am passionate about writing clean, efficient code and contributing to impactful software solutions within collaborative engineering environments.
      </motion.p>

      {/* Highlighted Tech Stack Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-10 text-6xl font-bold text-center font-Ovo lg:text-7xl"
      >
        What I Follow
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="flex flex-wrap justify-center gap-10 mb-16"
      >
        {techStack.map(({ name, icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`flex flex-col items-center cursor-pointer select-none ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            title={name}
          >
            <div className="text-5xl">{icon}</div>
            <span className="mt-2 text-base font-semibold font-Ovo">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
