import React, { useState } from "react";
//it is search box 
const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");//city is name of city being enterd

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity(""); // Clear input after search
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl flex items-center space-x-6">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="w-full px-6 py-4 text-xl border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <button
        onClick={handleSearch}
        className="px-8 py-4 text-xl bg-blue-500 text-white rounded-lg shadow-xl hover:bg-blue-600 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
