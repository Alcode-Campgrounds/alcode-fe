import React, { useEffect, useState } from "react";
import { fetchAllFacilities } from "../../utils/campFetch";
import { getStorage, setStorage } from "../../utils/localStorage";
import States from "./States";

export default function CampFinder() {
  // const [setSearchResults] = useState([]);
  // const { user } = useUser();
  // console.log(user);
  const [state, setState] = useState('');
 
  
  useEffect(() => {
    async function getCampgrounds(){
      const existingStorage = getStorage('ALL');
      if (existingStorage.length === 0){
        const facilities = await fetchAllFacilities();
        
        setStorage('ALL', facilities);
      }
    };
    getCampgrounds();
  }, []);
  
  const handleStateChange = (e) => {
    e.preventDefault();
    console.log(state);
  }


  return (
    <div>
      <h1>Search for all campgrounds by State</h1>
      <form onSubmit={handleStateChange}>
        <States state={state} setState={setState}/>
        <button type="submit" aria-label="Search">Search</button>
      </form>
    </div>
  );
}
