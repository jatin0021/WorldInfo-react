import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function HeroSection() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-280 mx-auto my-10 px-4'>
                <div className='flex flex-col justify-center order-2 md:order-1'>
                    <h1 className='text-4xl md:text-5xl font-bold my-2 py-4'>Explore the World, One Country at a Time.</h1>
                    <p className='text-lg md:text-xl pb-4'>Discover the history, culture and beauty of every nation. Sort search, and filter through countries to find the details you need.</p>
                    <NavLink to='/country'> <button className='w-fit flex justify-between items-center border border-gray-100 rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer'>
                        Start Exploring <FaLongArrowAltRight className='pl-2 size-6' />
                    </button>
                    </NavLink>
                </div>
                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img src="/world-trip.png" alt="World Trip" className='w-full max-w-md md:max-w-full' />
                </div>
            </div>
        </>
    )
}

export default HeroSection