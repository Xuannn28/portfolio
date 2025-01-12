/**
 * Portfolio - About component
 * @author Goh Jia Xuan
 * 
 * @description About component includes a brief introduction of myself, 
 * my interests and my passion in technology.
 */

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
      <motion.div initial={{ opacity: 0, y:100}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1, ease:"easeOut" }} viewport={{ once:true }}
      className='min-h-screen z-10 relative mt-5 p-5' id='About'>

            {/* About header */}
            <h3 className='text-3xl text-white font-bold py-4 px-6 pt-20 sm:pt-0 md:px-20 lg:px-32 sm:text-4xl inline-block'>
                About Me
            </h3>

            {/* About content */}
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-16'>
              
              {/* 3D avatar image */}
              <div className='flex justify-center items-center mt-6 md:mt-0'>
                <img src={assets.avatar} alt='3D avatar'className='w-1/2 md:w-[400px] md:p-5 lg:w-[500px]'/>
              </div>

              {/* description */}
              <div className='flex flex-col mt-5 text-white mx-auto text-left px-6 md:px-20 lg:px-32'>
                <p className='text-md md:text-lg font-sans leading-relaxed'>
                  I'm a Bachelor of Computer Science student specializing in Data Science, with a strong interest in
                  <span className='text-yellow-200 font-semibold'> Full Stack Development and Data Analysis</span>. I have been learning full stack knowledge by building websites,
                  while enhancing my data science expertise. I enjoy creating user-friendly applicatons with diverse features
                  and uncovering data-driven solutions. I'm passionate about finding opportunities where technology and data 
                  intersect to solve meaningful problems.
                </p>

                {/* button to following section */}
                <div className='flex flex-col mt-10 sm:flex-row gap-4 text-center'>
                  <a href='#Highlights' className='flex border border-white justify-center px-8 py-3 rounded-full gap-2 hover:border-yellow-200 hover:text-yellow-200'>Explore More Below
                  <img src={assets.arrowDown} alt='arrow down icon' width={25} height={25}/>
                  </a>
              </div>

              </div>
            </div>
          </motion.div>
    
  )
}

export default About