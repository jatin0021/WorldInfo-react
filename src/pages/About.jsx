import React from 'react'
import countryData from '../api/countryData.json'

function About() {
  return (
    <div className='max-w-250 mx-auto my-10 px-4'>
    <div className='flex justify-center mb-10 mt-5 text-center'>
      <h1 className='text-3xl font-bold'>Here are the Interesting Facts we're proud of</h1>
    </div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
       {countryData.map((country) => {
        const { id, countryName, capital, population, interestingFact } = country;
        return (
          <div key={id} className='w-full max-w-sm mx-auto border border-gray-700 rounded-2xl bg-linear-to-r from-black-900 to-gray-900 px-6 py-6 hover:scale-105 transition-transform duration-300'>
            <h2 className='text-2xl font-semibold mb-2'>{countryName}</h2>
            <p className='mt-2 text-md'>
              <span className='text-gray-400 font-medium'>Capital: </span>
              {capital}
            </p>
            <p className='mt-2 text-md'>
              <span className='text-gray-400 font-medium'>Population: </span>
              {population}
            </p>
            <p className='mt-2 text-md'>
              <span className='text-gray-400 font-medium'>Interesting Fact: </span>
              {interestingFact}
            </p>
          </div>
        )
      })}
     </div>

    
    </div>
  )
}

export default About