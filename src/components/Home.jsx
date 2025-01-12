/**
 * Portfolio - Home component
 * @author Goh Jia Xuan 
 * 
 * @description Home component, the first section of the portfolio,
 * contains a profile picture and a brief introduction of myself.
 */


import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Home = () => {
  return (
    // on large screen, the image will be on the right side of the text, on smaller screen, the image will be below the text
    <motion.div  initial={{ opacity: 0, y:100}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1, ease:"easeOut" }} viewport={{ once:true }}
    className='min-h-screen z-10 p-5 relative grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-16' id='Home'>
      
      <div className= 'flex flex-col text-white mx-auto text-left px-6 md:px-20 lg:px-32'>
        <h2 className='text-2xl md:text-4xl font-bold font-sans leading-relaxed'>
          <span className='text-yellow-200'>Hi, I'm </span><br/>
          Goh Jia Xuan <br/>
          <span className='text-yellow-200'>A Computer Science Student</span>
        </h2>

        {/* resume and contact button */}
        <div className='flex flex-col mt-10 sm:flex-row gap-4 text-center'>
          <a href='#Resume' className='border border-white px-8 py-3 rounded-full hover:border-yellow-200 hover:text-yellow-200'>Resume</a>
          <a href='#Contact' className='border border-white px-8 py-3 rounded-full hover:border-yellow-200 hover:text-yellow-200'>Contact</a>
        </div>

      </div>

      {/* rounded profile pic, image size decrease on smaller screen */}
      <div className='flex justify-center items-center mt-6 md:mt-0'>
        <img src={assets.pfp} alt='profile pic'className='border border-yellow-200 rounded-full shadow-lg w-1/2 md:w-[400px] p-5 lg:w-[500px]'/>
      </div>
    </motion.div>
  )
}

export default Home