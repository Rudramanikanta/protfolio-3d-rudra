
import { slideInFromLeft } from './Motion'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
const Home = () => {

  return (
    <div className='h-full overflow-y-auto bg-[#050816]'>
      <div className="h-screen bg-center bg-no-repeat bg-cover bg-[url('./herobg.png')] " >
        <Navbar></Navbar>
        <motion.div initial='hidden'  animate='visible' exit='exit' className='absolute top-32 ' id="about">
          <motion.div variants={slideInFromLeft(0.5)}>
            <h1 className='ml-32 text-6xl font-extrabold'>Hi, I&apos;m Rudra
              <br className='lg:hidden'></br>
              <span className='text-[#bf61ff]'> Manikanta</span></h1>
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