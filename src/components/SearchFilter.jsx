import React from "react";

function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  const handleInputChanges = (e) => {
    setSearch(e.target.value);
  };
  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-300 mx-auto my-10 px-4">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChanges}
        className="w-full rounded-xl p-2 border border-gray-400 outline-0 cursor-pointer"
      />

      <div className="text-center w-full rounded-xl border border-gray-400 outline-0 cursor-pointer">
        <button className="cursor-pointer w-full p-2" onClick={()=>sortCountries("asc")}>Asc</button>
      </div>
      <div className="text-center w-full rounded-xl border border-gray-400 outline-0 cursor-pointer">
        <button className="cursor-pointer w-full p-2" onClick={()=>sortCountries("dsc")}>Dsc</button>
      </div>

      <div>
        <select
          name=""
          id=""
          value={filter}
          onChange={handleSelect}
          className="text-center w-full rounded-xl p-2 border border-gray-400 outline-0 cursor-pointer"
        >
          <option className="bg-gray-600 text-start " value="All">
            All
          </option>
          <option className="bg-gray-600 text-start " value="Africa">
            Africa
          </option>
          <option className="bg-gray-600 text-start " value="Americas">
            Americas
          </option>
          <option className="bg-gray-600 text-start " value="Asia">
            Asia
          </option>
          <option className="bg-gray-600 text-start " value="Europe">
            Europe
          </option>
          <option className="bg-gray-600 text-start " value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
