import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <div className='bg-[#22262b] shadow-lg'>
    <div className='flex h-20 justify-between items-center max-w-250 mx-auto'>
        <div>
            <NavLink to="/"><h1 className='text-2xl'>World Atlas</h1></NavLink>
        </div>
        <nav className=''>
            <ul className='flex gap-6 '>
                <li className='hover:text-gray-400'><NavLink to="/">Home</NavLink></li>
                <li className='hover:text-gray-400'><NavLink to="/about">About</NavLink></li>
                <li className='hover:text-gray-400'><NavLink to="/country">Country</NavLink></li>
                <li className='hover:text-gray-400'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Navbar