import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 translate-x-0 -z-10 translate-y-[80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt=" " className='w-full' />
      </div >

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href=''>
          <Image src={assets.logo} alt=" " width={80} height={80} className='cursor-pointer w-27 mr-14' />
        </a>

        <ul className={`items-center hidden gap-6 px-12 py-3 rounded-full md:flex lg:gap-8  ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">My Service</a></li>
          <li><a className="font-Ovo" href="#work">My Projects</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        {/* Right side icons including GitHub, LinkedIn, dark mode, contact, and mobile menu */}
        <div className='flex items-center gap-6'>
          {/* GitHub */}
          <a
            href='https://github.com/Dinuki85'
            target='_blank'
            rel='noopener noreferrer'
            className='items-center hidden md:flex'
            aria-label='GitHub'
          >
            <Image
              src={isDarkMode ?  assets.github_white : assets.github}
              alt='GitHub'
              width={24}
              height={24}
              className='w-6 h-6 transition-opacity hover:opacity-80'
            />
          </a>

          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/dinuki-prarthana/'
            target='_blank'
            rel='noopener noreferrer'
            className='items-center hidden md:flex'
            aria-label='LinkedIn'
          >
            <Image
              src={assets.linkedin }
              alt='LinkedIn'
              width={24}
              height={24}
              className='w-6 h-6 transition-opacity hover:opacity-80'
            />
          </a>

          {/* Dark/Light Mode Toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} width={20} height={20} alt='' className='w-6' />
          </button>

          <a href='#contact' className='items-center hidden gap-3 px-10 ml-4 border border-blue-500 rounded-full font-Ovo lg:flex dark:border-white/50'>
            Contact <Image src={isDarkMode ? assets.arrow_icon : assets.arrow_icon} alt=" " className='w-3' />
          </a>

          <button className='block ml-3 md:hidden' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} width={20} height={20} alt='' className='w-6 ' />
          </button>
        </div>

        {/*--------Mobile MENU ----------------*/}
        <ul ref={sideMenuRef} className={`fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition duration-500 md:hidden -right-64 bg-red-50 dark:bg-darkTheme dark:text-white`}>
          <div className='absolute right-6 top-6 dark:bg-darkHover dark:text-white' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">My Service</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#project">My Projects</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
