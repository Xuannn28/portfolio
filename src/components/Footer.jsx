/**
 * Portfolio - Footer component
 * @author Goh Jia Xuan
 * 
 * @description Footer component that contains quick links for easy navigation, contact information and 
 * social links.
 */

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full bg-black bg-opacity-55 text-white mx-auto mt-11' id='Footer'>
        <div className='z-10 relative grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-10 md:p-15 gap-5'>
          {/* right footer content: Quick links */}
          <div>
            <a href='#Home' className='mt-3 text-yellow-200 font-bold font-sans'>
              Portfolio: Goh Jia Xuan
            </a>

            <h3 className='text-white font-semibold font-sans mt-3'>
              Quick Links
            </h3>

            <ul className='mt-2 max-w-sm'>
              <li>
                <a href='#Home' className='text-slate-400  hover:text-slate-500 hover:cursor-pointer'>Home</a>
              </li>
              <li>
                <a href='#About' className='text-slate-400  hover:text-slate-500 hover:cursor-pointer'>About</a>
              </li>
              <li>
                <a href='#Highlights' className='text-slate-400  hover:text-slate-500 hover:cursor-pointer'>Highlights</a>
              </li>
              <li>
                <a href='#Projects' className='text-slate-400  hover:text-slate-500 hover:cursor-pointer'>Projects</a>
              </li>
              <li>
                <a href='#Contact' className='text-slate-400  hover:text-slate-500 hover:cursor-pointer'>Contact</a>
              </li>
            </ul>

          </div>

          {/* middle footer content: Contact information */}
          <div>
            <h3 className='text-white font-semibold font-sans '>
              Contact Information
            </h3>

            {/* user clicked on it, will open up client app with my email/phone number */}
            <ul className='text-white mt-5 max-w-sm'>
                <li>Email: <span className='text-blue-300 underline hover:cursor-pointer hover:text-blue-500'>
                  <a href='mailto:gohjiaxuan28@gmail.com'>gohjiaxuan28@gmail.com</a>
                  </span></li>
                <li>Phone: <span className='text-blue-300 underline hover:cursor-pointer hover:text-blue-500'>
                  <a href='tel:+6016-460-3758'>+6016-460-3758</a>
                  </span></li>
                <li>Location: Selangor, Malaysia</li>
            </ul>
          </div>

          {/* left footer content: Social Links */}
          <div>
            {/* user clicked on it, will open to my social media profiles */}
            <h3 className='text-white font-semibold font-sans'>
              Social Links
            </h3>

            <div className='flex flex-row gap-5 mt-5'>
              <a href='https://www.linkedin.com/in/goh-jia-xuan-929530284/' target='_blank' rel='noopener noreferrer'>
                <img src={assets.linkedin} alt='linkedin' width={40} className='rounded-full border-4 border-white hover:border-gray-400 transition-all'/>
              </a>

              <a href='https://github.com/Xuannn28' target='_blank' rel='noopener noreferrer'>
                <img src={assets.github} alt='github' width={40} className='rounded-full border-4 border-white hover:border-gray-400 transition-all'/>
              </a>

            </div>
          </div>


        </div>

        {/* footer bottom: copyright */}
        <div className='py-2 mt-3 text-center text-sm text-gray-300'>
            Copyright 2025 @ Portfolio: Goh Jia Xuan. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer