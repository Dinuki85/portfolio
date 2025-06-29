import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll,setIsScroll] = useState(false)
  const sideMenuRef = useRef();
  
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  
   const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])
  
  return (
    <>
    
      <div className='fixed top-0 right-0 w-11/12 translate-x-0 -z-10 translate-y-[80%]'>
         <Image src={assets.header_bg_color} alt = " " className='w-full' />
      </div >
      
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
        <a href=''>
          <Image src={assets.logo} alt=" " width={80} height={80} className='cursor-pointer w-27 mr-14'/>
        </a>
    
        <ul className={`items-center hidden gap-6 px-12 py-3 rounded-full md:flex lg:gap-8  ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
            <li><a className="font-Ovo" href="#top">Home</a></li>
            <li><a className="font-Ovo" href="#about">About me</a></li>
            <li><a className="font-Ovo" href="#service">My Service</a></li>
            <li><a className="font-Ovo" href="#project">My Projects</a></li>
            <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>
        <div className='flex items-center gap-8'>
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image src={assets.moon_icon}  width={20} height={20} alt = '' className='w-6'/>
          </button>
            <a href='#contact'  className='items-center hidden gap-3 px-10 ml-4 border border-blue-500 rounded-full font-Ovo lg:flex'>Contact <Image src={assets.arrow_icon} alt =" " className='w-3'/></a>

            <button className='block ml-3 md:hidden' onClick={openMenu}>
                          <Image src={assets.menu_black}  width={20} height={20} alt = '' className='w-6 '/>

              
            </button>
        </div>
{/*--------MObile MENU ----------------*/}
        <ul ref={sideMenuRef} className='fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition duration-500 md:hidden -right-64 bg-red-50'>
           <div className='absolute right-6 top-6' onClick={closeMenu}>

            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
            
           </div>
           <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#service">My Service</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#project">My Projects</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
