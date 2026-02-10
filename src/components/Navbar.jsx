import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-[#22262b] shadow-lg sticky top-0 z-50'>
      <div className='flex h-20 justify-between items-center max-w-250 mx-auto px-4'>
        <div>
          <NavLink to="/"><h1 className='text-2xl font-bold'>CountriesInfo</h1></NavLink>
        </div>
        
        {/* Desktop Menu */}
        <nav className='hidden md:block'>
            <ul className='flex gap-6 text-lg font-medium'>
                <li className='hover:text-gray-400 transition-colors duration-200'><NavLink to="/">Home</NavLink></li>
                <li className='hover:text-gray-400 transition-colors duration-200'><NavLink to="/about">About</NavLink></li>
                <li className='hover:text-gray-400 transition-colors duration-200'><NavLink to="/country">Country</NavLink></li>
                <li className='hover:text-gray-400 transition-colors duration-200'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={handleToggle} className='text-2xl focus:outline-none'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#22262b] absolute top-20 left-0 w-full shadow-lg border-t border-gray-700 py-4'>
          <ul className='flex flex-col items-center gap-6 text-lg font-medium'>
            <li className='hover:text-gray-400 transition-colors duration-200' onClick={handleToggle}><NavLink to="/">Home</NavLink></li>
            <li className='hover:text-gray-400 transition-colors duration-200' onClick={handleToggle}><NavLink to="/about">About</NavLink></li>
            <li className='hover:text-gray-400 transition-colors duration-200' onClick={handleToggle}><NavLink to="/country">Country</NavLink></li>
            <li className='hover:text-gray-400 transition-colors duration-200' onClick={handleToggle}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  )
}


export default Navbar