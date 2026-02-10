import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  }, [])
  if (isPending) return <h1>loading...</h1>

  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) =>{
    if(filter==="All") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country))

  return (
    <section className="max-w-280 mx-auto my-10">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center">
        {filterCountries.map((curCountry) => {
          return <CountryCard country={curCountry} key={indexedDB} />;
        })}
      </ul>
    </section>
  );
}

export default Country