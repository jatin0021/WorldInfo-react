import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function CountryCard({ country }) {
    const { flags, name, population, region, capital } = country;
    return (
        <div className='w-60 border border-gray-700 rounded-2xl bg-linear-to-r from-black-900 to-gray-900 px-4 pt-2 pb-4'>
            <li className='pb'>
                <div>
                    <img className='h-30 ' src={flags.svg} alt="" />

                    <div>
                        <p className='text-xl py-2'>{name.common}</p>
                        <p>
                            <span className='text-gray-500'>Capital: </span>
                            {capital.toLocaleString()}
                        </p>
                        <p>
                            <span className='text-gray-500'>Population: </span>
                            {population.toLocaleString()}
                        </p>
                        <p>
                            <span className='text-gray-500'>Region: </span>
                            {region.toLocaleString()}
                        </p>

                        <NavLink to={`/country/${country.name.common}`}><button className='flex justify-between items-start  border border-gray-100 rounded-lg text-sm mt-3 pl-2 pr-4 py cursor-pointer hover:bg-gray-600 '>
                            Read More <FaLongArrowAltRight className='pl-2 size-6' />
                        </button>
                        </NavLink>

                    </div>
                </div>

            </li>
        </div>
    )
}

export default CountryCard