/**
 * Porfolio - Contact Component
 * @author Goh Jia Xuan 
 * 
 * @description Contact component that displays my contact information and social media links,
 * such as email, phone number, LinkedIn and GitHub profiles.
 */

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0, y:100}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 1, ease:"easeOut" }} viewport={{ once:true }}
    className='z-10 relative mt-5 p-10' id='Contact'>
        <div className='container w-3/4 m-auto text-center justify-center items-center text-white bg-black bg-opacity-55 p-5 rounded-xl'>
            
            {/* Contact header */}
            <h3 className='text-2xl underline font-bold py-4 px-6 pt-20 sm:pt-0 md:px-20 lg:px-32 sm:text-3xl inline-block'>
                Contact Me
            </h3>
            <p className='text-sm md:text-base font-sans text-white'>
                Feel free to get in touch! Whether you have a question, want to collaborate, or just want to say hi, I'd love to hear from you.
            </p>

            <div className='px-11 grid grid-cols-1 lg:grid-cols-2 gap-5 m-auto mt-5 p-6'>
                {/* Email section: user redirect to emailing app with my email address */}
                <div className='flex flex-row flex-wrap gap-5 items-center max-w-full'>
                    <img src={assets.email} alt='email' width={45} className='rounded-full object-contain'/>Email
                    <span>
                        <a href='mailto:gohjiaxuan28@gmail.com' className='text-blue-300 hover:text-blue-500 hover:underline'>
                            gohjiaxuan28@gmail.com
                        </a>
                    </span>
                </div>
                
                {/* Phone section: user redirect to calling app with my phone number */}
                <div className='flex flex-row flex-wrap gap-5 items-center max-w-full'>
                    <img src={assets.phone} alt='phone' width={45} className='rounded-full object-contain'/>Phone
                    <span>
                        <a href='tel:+6016-460-3758' className='text-blue-300 hover:text-blue-500 hover:underline'>
                            +6016-460-3758
                        </a>
                    </span>
                </div>
            </div>

            {/* Social Media Section */}
            {/* user will open to my profiles on new tab and prevent new tab from accessing window object */}
            <div className='flex-wrap m-auto mt-4 p-6 px-11 flex flex-row gap-5 items-center'>
                <img src={assets.social} alt='social links' width={45} className='rounded-full object-contain'/>
                <span>Social Links</span>
                <ul className='flex flex-col gap-2 text-left'>
                    <li className='text-blue-300 hover:text-blue-500 hover:underline'>
                        <a href='https://www.linkedin.com/in/goh-jia-xuan-929530284/' target='_blank' rel='noopener noreferrer'>
                            View my LinkedIn Profile
                        </a>
                    </li>
                    <li className='text-blue-300 hover:text-blue-500 hover:underline' >
                        <a href='https://github.com/Xuannn28' target='_blank' rel='noopener noreferrer'>
                            View my GitHub Profile
                        </a>
                    </li>
                </ul>
            </div>

            

        </div>
    </motion.div>
  )
}

export default Contact