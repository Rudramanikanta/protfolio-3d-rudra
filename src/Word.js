import React, {  useRef } from 'react'
import { motion } from 'framer-motion'
import Letter from './Letter'
import { useScroll } from 'framer-motion'
const Word = () => {
    const val=`I am currently employed as an Associate Software Engineer, leveraging my expertise 
          in software development and engineering. I hold a Bachelor of Technology
          degree in Computer Science Engineering from QIS College of Engineering & Technology,
           earned in 2024. During my studies, I developed a strong foundation in problem-solving,
            design principles, and innovation, which I apply to deliver effective solutions in my professional role.`
            const ref=useRef(null)
            const mar  = useScroll({
                target: ref,
                offset: ["start 0.9", "end 0.25"],
              });
              const words = val.split(" ");
             
  return (
    <motion.div ref={ref}  className="relative flex-1 gap-5 p-10 pr-10 ml-6 gap-y-6">
        <div className="p-10">
          <h1 className="p-2 text-4xl font-bold blue-text-gradient">
            About me
          </h1>
          <p className="p-3 w-[90%] leading-[40px] text-xl  font-semibold absolute montserrat tracking-wide pr-12 ">
          {
            words.map((word, index) => {
                const totalWords = words.length; 
                const start = index / totalWords;
                const end = start + 1 / totalWords;
            
                
                return (
                    <Letter
                        key={index}
                        progress={mar}
                        range={[start, end]}
                        value={word}
                    ></Letter>
                );
            })
          }
          </p>
          <p className="p-3 w-[90%] opacity-50 leading-[40px] text-xl  font-semibold absolute montserrat tracking-wide pr-12 ">
          {val}
          </p>
        </div>
      </motion.div>
  )
}

export default Word