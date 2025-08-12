import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from "motion/react";

const Services = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250; // Width of each card (adjust as needed)
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-10 text-6xl font-bold text-center font-Ovo lg:text-7xl"
              >
               My Services
              </motion.h2>

        <div className='relative w-full'>
        
          {/* Services Scroll Container */}
          <motion.div
            ref={scrollContainerRef}
            className='flex gap-6 overflow-hidden scroll-container'
          >
            {serviceData.map(({ icon, title, description }, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index} 
                className='flex flex-col items-center justify-center w-full max-w-[350px] min-w-[350px] p-8 py-12 mx-auto duration-500 border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white'
              >
                <motion.div 
                  className='mb-6'
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
                >
                  <Image 
                    src={icon} 
                    alt={title} 
                    width={64} 
                    height={64} 
                    style={{ objectFit: 'contain' }} 
                  />
                </motion.div>
                <h3 className='my-4 text-lg text-center text-gray-700 dark:text-white'>
                  {title}
                </h3>
                <p className='text-sm leading-6 text-center text-gray-600 dark:text-white/80'>
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Scroll Button */}
          
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
