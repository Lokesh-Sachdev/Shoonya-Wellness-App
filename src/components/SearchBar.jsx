import React, { useEffect, useState } from "react";

const SearchBar = ({ onSearch, search, router }) => {
  const [searchTerm, setSearchTerm] = useState(search || "");

  useEffect(() => {
    setSearchTerm(search || "");
  }, [search]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="border rounded p-2 mr-2 text-black"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </>
  );
};

export default SearchBar;
