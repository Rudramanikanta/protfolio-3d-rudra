import React, { useEffect } from 'react'
import { motion, useTransform } from 'framer-motion'
const Letter = ({progress,range,value}) => {
    const opacity=useTransform(progress?.scrollYProgress,range,[0,1])
    
  return (
    <motion.span className='montserrat' style={{opacity:opacity}}>{value}{" "}</motion.span>
  )
}

export default Letter