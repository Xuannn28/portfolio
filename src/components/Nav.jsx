/**
 * Portfolio - Navigation bar component
 * @author Goh Jia Xuan 
 * 
 * @description Navigation bar component that contains the navigation links to 
 * different sections of the website.
 */

import React from 'react'
import { assets } from '../assets/assets'


const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false)

    // function: prevent website from scrolling when mobile menu is open
    React.useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'  // scrolling prohibited
        }else {
            document.body.style.overflow = 'auto'
        }

        return () => {  // cleanup function
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-20">
        <div className='container text-white mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
            
            <h3 className='text-lg md:text-xl font-bold font-sans'>
                <a href='#Home' className='cursor-pointer'>Portfolio</a>
            </h3>

            {/* desktop menu: display when screen size larger than 768px */}
            <ul className='hidden md:flex gap-8 font-semibold font-sans'>
                <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
                <a href='#Highlights' className='cursor-pointer hover:text-gray-400'>Highlights</a>
                <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href='#Contact' className='cursor-pointer hover:text-gray-400'>Contact</a>
            </ul>

            {/* mobile menu: display when screen size smaller than 768px */}
            <img onClick={() => (setShowMobileMenu(true))} src={assets.hamburger} alt='mobile' width={30} height={30} className='md:hidden cursor-pointer'/>

        </div>

        {/* mobile menu display content */}
        {/* when mobile menu is clicked, show it in full screen, otherwise hide it. Hide menu when cross icon is clicked. */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-5 cursor-pointer'>
                <img onClick={() => (setShowMobileMenu(false))} src={assets.cross} alt='cross icon' width={25} height={25} />
            </div>

            <ul className='flex flex-col items-center gap-1 mt-5  font-semibold font-sans'>
                <a onClick={() => (setShowMobileMenu(false))} href='#Home' className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={() => (setShowMobileMenu(false))} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={() => (setShowMobileMenu(false))} href='#Highlights' className='px-4 py-2 rounded-full inline-block'>Highlights</a>
                <a onClick={() => (setShowMobileMenu(false))} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={() => (setShowMobileMenu(false))} href='#Contact' className='px-4 py-2 rounded-full inline-block'>Contact</a>
            </ul>

        </div>

    </div>
  )
}

export default Nav