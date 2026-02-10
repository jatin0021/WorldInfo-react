import React from 'react'
import countryData from '../api/countryData.json'

function About() {
  return (
    <div className='max-w-250 mx-auto my-10'>
    <div className='flex justify-center mb-15 mt-5 '>
      <h1 className='text-3xl'>Here are the Interesting Facts we're proud of</h1>
    </div>

     <div className='grid grid-cols-3 gap-8 ml-2'>
       {countryData.map((country) => {
        const { id, countryName, capital, population, interestingFact } = country;
        return (
          <div key={id} className='w-80 border border-gray-700 rounded-2xl bg-linear-to-r from-black-900 to-gray-900 px-4 pt-2 pb-4'>
            <h2 className='text-xl'>{countryName}</h2>
            <p className='mt-2 text-sm'>
              <span className='text-gray-300'>Capital: </span>
              {capital}
            </p>
            <p className='mt text-sm'>
              <span className='text-gray-300'>Population: </span>
              {population}
            </p>
            <p className='mt text-sm'>
              <span className='text-gray-300'>Intersting Fact: </span>
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