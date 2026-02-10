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
      <div className="h-1/2 grid grid-cols-2 gap-8 max-w-280 mx-auto ">
        <div className='flex justify-center items-center'>
          <img className='h-50 w-60 ' src={country.flags.svg} alt={country.name.official} />
        </div>
        <div className='mt-5'>
          <p className="text-3xl font-bold">{country.name.official}</p>

          <p className='my-4'>
            <span className='text-gray-500'>Native Names: </span>
            {country.name?.nativeName
              ? Object.values(country.name.nativeName)
                .map((n) => n.common)
                .join(", ")
              : "N/A"}
          </p>

          <p className='my-4'><span className='text-gray-500'>Population:</span> {country.population.toLocaleString()}</p>
          <p className='my-4'><span className='text-gray-500'>Capital:</span> {country.capital?.join(", ")}</p>
          <p className='my-4'><span className='text-gray-500'>Region:</span> {country.region}</p>
          <p className='my-4'><span className='text-gray-500'>Sub Region:</span> {country.subregion}</p>
          <p className='my-4'><span className='text-gray-500'>Top Level Domain:</span> {country.tld?.[0]}</p>

          <p className='my-4'>
            <span className='text-gray-500'>Currencies: </span>
            {country.currencies
              ? Object.values(country.currencies)
                .map((cur) => cur.name)
                .join(", ")
              : "N/A"}
          </p>

          <p className='my-4'>
            <span className='text-gray-500'>Languages: </span>
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>


        </div>

      </div>
      <div className='flex justify-end max-w-350'>
        <NavLink to='/country'>
          <button className='border border-gray-400 rounded-xl cursor-pointer py-2 px-4 hover:bg-gray-500'>Go back</button>
        </NavLink>
      </div>
    </div>
  );
}
export default CountryDetails