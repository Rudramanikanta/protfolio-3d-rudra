import "./App.css";
import { Suspense, useEffect } from "react";
import Loader from "./Loader";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Home from "./Home";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css";
import { useRef } from "react";
import Languages from "./Languages";
import { technologies } from "./Sample";
import { Tilt } from "react-tilt";
import github from "./assets/github.png";
import Word from "./Word";
function App() {
  const ref=useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start end","end start"]
  });
  const marginTop=useTransform(scrollYProgress,[0,1],["100px","-130px"])
  return (
    <div className="relative z-0 text-black bg-white">
      <Home></Home>
      
      <Word></Word>
      <motion.div   className="relative flex-1 gap-5 p-10 ml-6 gap-y-6">
        <div className="p-10">
        <div className="flex justify-between mt-[6rem]">
        <h1 className="p-2 mt-12 text-4xl font-bold orange-text-gradient">
            Overview
          </h1>
          <button className="p-2 mt-12 transition-all duration-75 rounded-sm h-fit w-fit animate hover:rounded-md bg-neutral-500/5 hover:backdrop-blur-xl hover:bg-neutral-500/10 hover:scale-110"> 
            <a href="https://www.linkedin.com/in/rudramanikanta/" aria-label="linkedin Profile" className="text-xl font-semibold orange-text-gradient montserrat">Linkedin Profile</a>
          </button>
          </div>
          
          <p className="p-3 leading-[30px] text-xl w-full font-semibold montserrat">
            As a{" "}
            <span className="blue-text-gradient">full-stack developer</span>, I
            have the exciting role of crafting entire web experiences from the
            ground up, using my skills to design and develop both the frontend
            and backend of websites and applications , ensuring they function seamlessly and look
            visually appealing.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 ">
          {technologies.map((value) => {
            return (
              <div className="w-28 h-28">
                <Canvas>
                  <Suspense fallback={<Loader></Loader>}>
                    <Languages image={value.icon}></Languages>
                  </Suspense>
                </Canvas>
              </div>
            );
          })}
        </div>
      </motion.div>
      <div className="p-10 mt-10 ml-12" id="project">
        <div>
          <div className="flex justify-between ">
          <h3 className="text-4xl font-black duration-300 green-text-gradient lg:leading-2 animate group-hover:scale-110 hover:blue_gradient">
            Projects.
          </h3>
          <button className="p-3 py-4 transition-all duration-75 rounded-2xl animate hover:rounded-md bg-neutral-500/5 hover:backdrop-blur-xl hover:bg-neutral-500/10 hover:scale-110"> 
            <a href="https://github.com/rudramanikanta" aria-label="GitHub Profile" className="text-xl font-semibold green-text-gradient montserrat">GitHub Profile</a>
          </button>
          </div>
          <p className="leading-[40px] montserrat hover:organe_gradient font-semibold text-xl width-[200px]">
            I mainly focused on building my project on ReactJS and its libraries
            to leverage the power of this popular JavaScript framework and its rich libraries. ReactJS
            provides a robust and efficient way to create dynamic user
            interfaces, making it an ideal choice for web development projects.
          </p>
        </div>
        <motion.div style={{marginTop}} ref={ref} className="grid gap-4 mt-10 gap-y-5 gap-x-4 lg:grid-cols-3 align-center">
          <Tilt className="group w-full  shadow-card border-2 z-[10] bg-tertiary duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group  hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-700/5 backdrop-blur-xl ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]">
            <div className="flex text-center align-top gap-x-4 z-[40]">
              <a href="https://github.com/rudramanikanta">
                <img
                  src={github}
                  className="rounded-full  z-[40] h-[50px] w-[50px]"
               alt="" ></img>
              </a>
              <p className="text-4xl font-bold montserrat blue-text-gradient z-[100]">
                Farmer Seva
              </p>
            </div>
            <p className="font-thin group-hover:text-black montserrat leading-7 text-white montserrat z-[4]">
              Overall, the MERN full stack architecture is a powerful and
              flexible choice for building Framer websites. This architecture
              allows for the development of dynamic and interactive websites
              with a rich user experience.
            </p>
          </Tilt>
          <Tilt className="group duration-150 align-middle gap-x-4 ease-in border-2 ring-slate-500 shadow-xl p-[50px] h-[300px] px-8 bg-opacity-50 group  bg-tertiary hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 ring-1 ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]">
            <div className="flex text-center align-top gap-x-4">
              <a href="https://github.com/rudramanikanta">
                <img
                  src={github}
                  className="rounded-full h-[50px] w-[50px] "
                alt=""></img>
              </a>
              <p className="text-4xl font-bold blue-text-gradient montserrat ">
                Side plus clone
              </p>
            </div>
            <p className="font-thin leading-7 text-white group-hover:text-black montserrat">
              A movie website developed using Next.js is a dynamic and
              user-friendly web application that showcases and provides
              information about movies. It utilizes the Next.js framework, a
              popular React-based framework, to deliver a good .
            </p>
          </Tilt>
          <Tilt className="group duration-150 align-middle gap-x-4 ease-in p-[50px] h-[300px] px-8 bg-opacity-50 group  bg-tertiary border-2 ring-slate-500 ring-1 hover:rounded-md hover:scale-110   py-10  hover:bg-neutral-500/5 shadow-xl ring-blue_gradient hover:ring-2 animate hover:ring-green_gradient rounded-[20px]">
            <div className="flex text-center align-top gap-x-4">
              <a href="https://github.com/rudramanikanta">
                <img
                  src={github}
                  className="rounded-full h-[50px] w-[50px]"
               alt="" ></img>
              </a>
              <p className="text-4xl font-bold blue-text-gradient montserrat ">
                Side vodka clone
              </p>
            </div>
            <p className="font-thin leading-7 text-white group-hover:text-black montserrat">
              bookstore website developed using servlets and JSP is a web
              application that enables users to browse online. It typically
              consists of a front-end, which is the user interface , and a
              back-end, which handles the data processing and storage.
            </p>
          </Tilt>
        </motion.div>
      </div>
      <footer className="ml-12 max-container" id="contact">
        <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
          <div className="flex flex-col items-start p-10">
            <p className="float-left text-4xl font-black mt-7 align-left">
              Contact on
            </p>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"></p>
            <div className="flex items-center gap-5 mt-8">
              <a href="https://www.instagram.com/rudra_abburi/"><FaInstagram size={50}></FaInstagram></a>
              <a href="https://www.facebook.com/abburirudra"><FaFacebook size={50} /></a>
              <a href="https://x.com/RudraAbburi"><FaTwitter size={50} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
