import React, { useEffect, useState } from 'react'
import profile from './assets/profile.jpg'
import {motion} from 'framer-motion'
import { slideInFromTop } from './Motion';
const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <nav
    className={scrolled?`bg-black h-[120px]  w-full flex-between items-center py-4 p-10 fixed top-0 z-20 bg-opacity-80  backdrop-blur-md text-white`:`h-[120px] p-10  w-full flex-between backdrop-blur-md items-center py-3 fixed top-0 z-20 bg-opacity-80  `}
  >
    <motion.div initial="hidden" animate="visible"  exit="exit"  variants={slideInFromTop} className='flex justify-center gap-4 p-2 text-center align-middle'>
        <img src={profile} className='h-[50px] w-[50px] rounded-full '></img>
        <p className='mt-2 text-2xl font-bold font-montserrat'><span className='orange-text-gradient'>Rudra</span><span> manikanta</span> </p>

    </motion.div>
    <div className='items-center justify-end gap-4 p-2 font-bold montserrat flex-end'>
        <a href='#about' className={`${active==="#about"?"text-green-500":""}`} onClick={()=>setActive('#about')}>About</a>
        <a href='#project' className={`${active==="#project"?"text-green-500":""}`} onClick={()=>setActive('#project')}>Projects</a>
        <a href='#contact' className={`${active==="#contact"?"text-green-500":""}`} onClick={()=>setActive('#contact')}>Contact</a>
    </div>
    </nav>
  )
}

export default Navbar