
import { slideInFromLeft } from './Motion'
import Navbar from './Navbar'
import { useEffect, useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion'
const Home = () => {
  const ref=useRef(null);
  const mar =useScroll({
    target:ref,
    offset:["start end","end start"]
  })
  const size=useTransform(mar?.scrollYProgress,[0,1],["1rem","4rem"])
  return (
    <div className='h-full overflow-y-auto'>
      <div className="h-full bg-center bg-no-repeat bg-cover" >
        <Navbar></Navbar>
        <motion.div ref={ref} initial='hidden'  animate='visible' exit='exit' className='mt-40' id="about">
          <motion.div variants={slideInFromLeft(0.5)}>
            <motion.h1 style={{fontSize:size}} className='ml-32 font-extrabold '>Hi, I&apos;m Rudra
              <br className='lg:hidden'></br>
              <span className='text-[#bf61ff]'> Manikanta</span></motion.h1>
            <p className='ml-32 text-xl font-bold leading-8 montserrat'>I enjoy crafting
              <br className='lg:hidden'></br>
              Websites and bugs</p>
          </motion.div>
        </motion.div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home