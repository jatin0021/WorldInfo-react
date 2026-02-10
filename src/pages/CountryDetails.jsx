import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../api/postApi';

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await getCountryIndData(id);
      setCountry(res.data[0]);
      setLoading(false);
    };
    fetchCountry();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='my-10 pb-5 bg-gray-900 border-y border-gray-400 shadow-lg shadow-gray-800 '>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-280 mx-auto px-4">
        <div className='flex justify-center items-center'>
            <img className='w-full max-w-sm h-auto shadow-md rounded-lg' src={country.flags.svg} alt={country.name.official} />
        </div>
        <div className='mt-5 md:mt-0'>
          <h1 className="text-3xl font-bold mb-6">{country.name.official}</h1>

          <p className='my-2 text-lg'>
            <span className='text-gray-400 font-semibold'>Native Names: </span>
            {country.name?.nativeName
              ? Object.values(country.name.nativeName)
                .map((n) => n.common)
                .join(", ")
              : "N/A"}
          </p>

          <p className='my-2 text-lg'><span className='text-gray-400 font-semibold'>Population:</span> {country.population.toLocaleString()}</p>
          <p className='my-2 text-lg'><span className='text-gray-400 font-semibold'>Capital:</span> {country.capital?.join(", ")}</p>
          <p className='my-2 text-lg'><span className='text-gray-400 font-semibold'>Region:</span> {country.region}</p>
          <p className='my-2 text-lg'><span className='text-gray-400 font-semibold'>Sub Region:</span> {country.subregion}</p>
          <p className='my-2 text-lg'><span className='text-gray-400 font-semibold'>Top Level Domain:</span> {country.tld?.[0]}</p>

          <p className='my-2 text-lg'>
            <span className='text-gray-400 font-semibold'>Currencies: </span>
            {country.currencies
              ? Object.values(country.currencies)
                .map((cur) => cur.name)
                .join(", ")
              : "N/A"}
          </p>

          <p className='my-2 text-lg'>
            <span className='text-gray-400 font-semibold'>Languages: </span>
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>


        </div>

      </div>
      <div className='flex justify-end max-w-280 mx-auto px-4 mt-6'>
        <NavLink to='/country'>
          <button className='border border-gray-400 rounded-xl cursor-pointer py-2 px-6 hover:bg-gray-700 transition-colors duration-200'>Go back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default CountryDetails