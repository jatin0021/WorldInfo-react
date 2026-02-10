import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa'
function HeroSection() {
    return (
        <>
            <div className='grid grid-cols-2 gap-10 max-w-280 mx-auto my-23'>
                <div>
                    <h1 className='text-5xl my-2 py-4'>Explore the World, One Country at a Time.</h1>
                    <p className='text-xl pb-4'>Discover the history, culture and beauty of every nation. Sort search, and filter through countries to find the details you need.</p>
                    <button className='flex justify-between items-center  border border-gray-100 rounded-xl px-4 py-2'>
                        Start Exploring <FaLongArrowAltRight className='pl-2 size-6' />
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="/world-trip.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default HeroSection