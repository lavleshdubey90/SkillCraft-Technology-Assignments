import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {

  const links = ["Home", "About Us", "Products", "Contact"];

  const [hamburger, setHamburger] = useState(true);

  return (
    <header className='max-w-screen-xl p-3 md:px-5 mx-auto'>
      <nav className='flex justify-between items-center h-full'>
        <div className='w-16 h-16 bg-gradient-to-tl from-white to-teal-500 rounded-md scale-75 md:scale-100'></div>


        {/* This div will hide on lg breakpoint */}
        <div className='hidden md:flex gap-x-10'>
          <ul className='font-semibold flex items-center gap-x-10'>
            {
              links.map((link, index) => (
                <li key={index} className='hover:text-teal-500 duration-300 cursor-pointer'>{link}</li>
              ))
            }
          </ul>
          <button className='btn'>Contact Us</button>
        </div>

        {/* Hamburger Menu */}
        <div onClick={() => setHamburger(prev => !prev)} className='md:hidden z-50 relative'>
          <HiOutlineMenuAlt3 className='text-5xl p-3 rounded-full duration-300 hover:text-white cursor-pointer hover:bg-teal-500' />

          <div hidden={hamburger ? true : false} className='absolute border-2 bg-white text-center right-4 p-2 w-40 shadow-lg rounded-md'>
            <ul className='font-semibold flex flex-col items-center gap-y-4'>
              {
                links.map((link, index) => (
                  <li key={index} className='hover:text-teal-500 duration-300 cursor-pointer'>{link}</li>
                ))
              }
            </ul>
            <button className='btn-sm mt-4'>Contact Us</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;