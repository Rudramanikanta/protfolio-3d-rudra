import './App.css';
import { Suspense } from 'react'
import Loader from './Loader'
import Computer from './Computer'
import { motion } from 'framer-motion'
import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FaInstagram ,FaFacebook,FaTwitter} from "react-icons/fa";
import Home from './Home';
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css";
import { slideIn, slideInFromLeft, textVariant } from './Motion';
import Languages from './Languages';
import { technologies } from './Sample';
import { Tilt } from 'react-tilt';
import github from './assets/github.png'
function App() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className='relative z-0 bg-[#050816]'>
      <Home></Home>
      <motion.div variants={slideInFromLeft(0.5)} className='-mt-[300px] h-screen w-full'>
        <Canvas className='w-full h-screen overflow-visible overflow-y-auto'>
          <Suspense fallback={<Loader></Loader>}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 1} minPolarAngle={Math.PI / 2} ></OrbitControls>
            <Computer></Computer>
          </Suspense>
        </Canvas>
      </motion.div>
      <div className='flex-1 gap-5 gap-y-6'>
        <div className='p-10'>
        <h1 className='p-2 text-6xl font-bold orange-text-gradient'>Overview</h1>
        <p className='p-3 leading-[30px] text-xl w-full font-semibold montserrat'>As a <span className='blue-text-gradient'>full-stack developer</span>, I have the exciting role of crafting entire web experiences from the ground up, using my skills to design and develop both the frontend and backend of websites, ensuring they function seamlessly and look visually appealing.</p>
        </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((value) => {
          return (
            <div className='w-28 h-28'>
              <Canvas>
                <Suspense fallback={<Loader></Loader>}>
                  
                  <Languages image={value.icon}></Languages>
                </Suspense>
              </Canvas>
            </div>
          )
        })
        }
      </div>
      </div>
      <div className='p-10 mt-10' id="project">
        <div>
            <h3 className='text-6xl font-black duration-300 green-text-gradient lg:leading-2 animate group-hover:scale-110 hover:blue_gradient'>Projects.</h3>
            <p className='leading-[40px] montserrat hover:organe_gradient font-semibold text-xl width-[200px]'>I mainly focused on building my project on ReactJS and its libraries to leverage the power of this popular JavaScript framework. ReactJS provides a robust and efficient way to create dynamic user interfaces, making it an ideal choice for web development projects.</p>
        </div>
        <div className='grid gap-4 gap-y-5 gap-x-4 lg:grid-cols-3 align-center'>
                <Tilt className='w-full  shadow-card border-2 bg-tertiary duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group  hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]'>
                    <div className='flex text-center align-top gap-x-4'>
                    <a href='https://github.com/rudramanikanta'><img src={github} className='rounded-full h-[50px] w-[50px]'></img></a>
                    <p className='text-4xl font-bold text-white montserrat blue-text-gradient'>Farmer Seva</p>
                    </div>
                    <p className='font-thin leading-7 text-white montserrat'>Overall, the MERN full stack architecture is a powerful and flexible choice for building Framer websites. This architecture allows for the development of dynamic and interactive websites with a rich user experience.</p>
                </Tilt>
                <Tilt className=' duration-150 align-middle gap-x-4 ease-in border-2 ring-slate-500 shadow-xl p-[50px] h-[300px] px-8 bg-opacity-50 group  bg-tertiary hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]'>
                    <div className='flex text-center align-top gap-x-4'>
                    <a href='https://github.com/rudramanikanta'><img src={github} className='rounded-full h-[50px] w-[50px]'></img></a>
                    <p className='text-4xl font-bold blue-text-gradient montserrat '>Movie  site</p>
                    </div>
                    <p className='font-thin leading-7 text-white montserrat'>A movie website developed using Next.js is a dynamic and user-friendly web application that showcases and provides information about movies. It utilizes the Next.js framework, a popular React-based framework, to deliver a good .</p>
                </Tilt>
                <Tilt className=' duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group  bg-tertiary border-2 ring-slate-500 ring-1 hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 shadow-xl ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]'>
                    <div className='flex text-center align-top gap-x-4'>
                    <a href='https://github.com/rudramanikanta'><img src={github} className='rounded-full h-[50px] w-[50px]'></img></a>
                    <p className='text-4xl font-bold blue-text-gradient montserrat '>Book store</p>
                    </div>
                    <p className='font-thin leading-7 text-white montserrat'>bookstore website developed using servlets and JSP is a web application that enables users to browse online. It typically consists of a front-end, which is the user interface , and a back-end, which handles the data processing and storage.</p>
                </Tilt>
            </div>
    </div>
    <footer className='max-container ' id="contact">
    <div className='flex flex-wrap items-start justify-between gap-20 max-lg:flex-col'>
      <div className='flex flex-col items-start p-10'>
        <p className='float-left text-4xl font-black mt-7 align-left'>Contact on</p>
        <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          
        </p>
        <div className='flex items-center gap-5 mt-8'>
          <FaInstagram size={50}></FaInstagram>
          <FaFacebook size={50}/>
          <FaTwitter size={50}/>
        </div>
      </div>

     
    </div>

  
  </footer>
    </div>
  );
}

export default App;
