import React, { useEffect, useState } from "react";
// import useFetch from "react-fetch-hook";

const handleSubmit = (event) => {
  event.preventDefault();
};

export default function CampFinder() {
  const [setSearchResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const apiSearchResults = await fetchResults();
      setSearchResults(apiSearchResults);
    };
    getResults();
  });

  const fetchResults = async () => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Search campgrounds ya dingus</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          name="search"
          //   value={search}
          //   onChange={handleFormChange}
          required
        />
        <button type="submit" aria-label="Search">
          Search
        </button>
      </form>
    </div>
  );
}
