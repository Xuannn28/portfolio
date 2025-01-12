/**
 * Portfolio - Project component
 * @author Goh Jia Xuan
 * 
 * @description Project component that displays my projects with images, titles, skills and descriptions.
 */

import React from 'react'
import { projects } from '../assets/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react"

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <motion.div initial={{ opacity: 0, y:100}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1, ease:"easeOut" }} viewport={{ once:true }}
    className='min-h-screen z-10 relative mt-5 p-5' id='Projects'>
        <h3 className='text-3xl text-white font-bold py-4 px-6 pt-20 sm:pt-0 md:px-20 lg:px-32 sm:text-4xl inline-block'>
            Projects
        </h3>

        {/* Project sliding cards */}
        <div className='w-3/4 m-auto'>
          <div className='mt-20'>

            <Slider {...settings}>
            {/* mapping through the projects object */}
            {/* on large screen, img on the left, text on the right; on small screen, img stack above text. */}
            {projects.map((project) => (
              <div key={project.name} className='bg-black bg-opacity-55 rounded-xl'>

                <div className='flex flex-col overflow-hidden md:flex-row gap-3 justify-center items-center mx-auto mt-0 rounded-xl'>
                  {/* Image section */}
                  <img src={project.img} alt={project.title} className='w-full md:w-1/2 h-[400px] object-contain'/>

                  {/* Text section */}
                  <div className='flex flex-col leading-tight gap-3 mt-1 px-5 py-2 flex-grow'>
                    <h3 className='text-md md:text-lg font-semibold font-sans text-yellow-200'>
                      {project.title}
                    </h3>

                    <p className='text-sm md:text-base text-slate-400 font-sans'>
                        {project.skills}
                    </p>

                    <p className='text-sm md:text-base font-sans text-white mb-3'>
                      {project.description}
                    </p>

                  </div>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
    </motion.div>
  )
}

export default Project