/**
 * Portfolio - Highlight component
 * @author Goh Jia Xuan
 * 
 * @description Highlight component that displays my current capabilities and recognition, such as
 * language proficiency, skills, interests and honors & awards.
 */

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Highlight = () => {
  return (
    <motion.div initial={{ opacity: 0, y:100}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1, ease:"easeOut" }} viewport={{ once:true }}
    className='min-h-screen z-10 relative mt-5 p-5' id='Highlights'>

        {/* Highlight header */}
        <h3 className='text-3xl text-white font-bold py-4 px-6 pt-20 sm:pt-0 md:px-20 lg:px-32 sm:text-4xl inline-block'>
            Highlights
        </h3>

        <div  className='flex flex-col md:flex-row justify-center items-center gap-11 mt-5 p-5'>
            
            {/* language card */}
            <motion.div whileHover={{scale: 1.1}} className='max-w-sm w-full h-80 rounded-md overflow-hidden shadow-lg bg-black bg-opacity-50 flex flex-col items-center p-10'>
              <img src={assets.language} alt='language icon' width={50} height={50} className='object-contain rounded-full'/>
              <h5 className='font=semibold font-sans text-lg text-yellow-200 mt-5'>
                Languages
              </h5>
              {/* list-disc ensure dots shown before each list item, list-inside ensure dots are inside the list item */}
              <ul className='text-white leading-relaxed mt-5 font-sans list-disc list-inside text-left'>
                <li>English</li>
                <li>Chinese</li>
                <li>Malay</li>
              </ul>
            </motion.div>

            {/* Skills card */}
            <motion.div whileHover={{scale: 1.1}} className='max-w-sm w-full h-80 rounded-md overflow-hidden shadow-lg bg-black bg-opacity-50 flex flex-col items-center p-10'>
              <img src={assets.skill} alt='skill icon' width={50} height={50} className='object-contain rounded-full'/>
              <h5 className='font=semibold font-sans text-lg text-yellow-200 mt-5'>
                Skills
              </h5>
              <ul className='text-white mt-2 leading-relaxed font-sans list-disc list-inside text-left'>
                <li>
                  Python, Java, Javascript, R, HTML, Tailwind CSS, AngularJS, React.js, Bootstrap,
                  Figma, Socket.io, Express.js, Node.js, MongoDB, Cloud Firestore, Google Cloud Platform.
                </li>
              </ul>
            </motion.div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-11 mt-5 p-5'>

            {/* interests card */}
            <motion.div whileHover={{scale: 1.1}} className='max-w-sm w-full h-80 rounded-md overflow-hidden shadow-lg bg-black bg-opacity-50 flex flex-col items-center p-10'>
              <img src={assets.interest} alt='interests icon' width={50} height={50} className='object-contain rounded-full'/>
              <h5 className='font=semibold font-sans text-lg text-yellow-200 mt-5'>
                Interests
              </h5>
              <ul className='text-white mt-2 font-sans list-disc list-inside text-left'>
                <li>
                  Full Stack Development, Backend/Frontend Engineer, Modelling of Data Analysis, Data Visualization, Database, etc.
                </li>
              </ul>
            </motion.div>

            {/* Honor & Awards card */}
            <motion.div whileHover={{scale: 1.1}} className='max-w-sm w-full h-80 rounded-md overflow-hidden shadow-lg bg-black bg-opacity-50 flex flex-col items-center p-10'>
              <img src={assets.award} alt='awards icon' width={50} height={50} className='object-contain rounded-full'/>
              <h5 className='font=semibold font-sans text-lg text-yellow-200 mt-5'>
                Honors & Awards
              </h5>
              <ul className='text-white mt-2 font-sans list-disc list-inside text-left'>
                <li>Jabatan Perkhidmatan Awam Malaysia Full Scholarship (JPA-LSPM)
                , Jeffrey Cheah Foundation Full Scholarship (JCF)
                , Monash High Achiever Award 2023 (HAA)
                </li>
              </ul>
            </motion.div>
        </div>

        
    </motion.div>
  )
}

export default Highlight