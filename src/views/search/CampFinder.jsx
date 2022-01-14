import React, { useEffect, useState } from "react";
// import { useUser } from "../../context/UserContext";
import { fetchAllFacilities, fetchStateFacility } from "../../utils/campFetch";
import { getStorage, setStorage } from "../../utils/localStorage";
import States from "./States";

export default function CampFinder() {

  const [state, setState] = useState('');
  const [loading, setLoading] = useState(true)
  console.log(loading)
  

  useEffect(() => {
    async function getCampgrounds() {
      const existingStorage = getStorage("ALL");
      if (existingStorage.length === 0) {
        const facilities = await fetchAllFacilities();
        setLoading(false);
        setStorage('ALL', facilities);

      }
    }
    getCampgrounds();
  }, []);

  const handleStateChange = async (e) => {
    e.preventDefault();
    if (state === "ALL") {
      const existingStorage = getStorage("ALL");
      if (existingStorage.length === 0) {
        const facilities = await fetchAllFacilities();
        setStorage("ALL", facilities);
      }
    } else {
      const existingStateStorage = getStorage(state);

      if (existingStateStorage.length === 0) {
        const stateFacility = await fetchStateFacility(state);
        setStorage(state, stateFacility);
      }
    }

    // if array.length = 0 , then fetch stateList campgrounds and set those to local storage
  };
  return (
    <div>
      <h1>Search for all campgrounds by State</h1>
      <form onSubmit={handleStateChange}>
        <States state={state} setState={setState} />
        <button type="submit" aria-label="Search">
          Search
        </button>
      </form>
    </div>
  );
}
