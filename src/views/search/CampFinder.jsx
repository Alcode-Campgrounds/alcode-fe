import React, { useEffect, useState } from "react";
import { Loader } from '../../components/loader/Loader';
// import { useUser } from "../../context/UserContext";
import { fetchAllFacilities } from "../../utils/campFetch";
import { getStorage, setStorage } from "../../utils/localStorage";
import States from "./States";

export default function CampFinder() {
  // const [setSearchResults] = useState([]);
  // const { user } = useUser();
  // console.log(user);
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function getCampgrounds(){
      const existingStorage = getStorage('ALL');
      if (existingStorage.length === 0){
        const facilities = await fetchAllFacilities();
        setLoading(false);
        setStorage('ALL', facilities);
      }
    };
    getCampgrounds();
  }, []);
  
  const handleStateChange = (e) => {
    e.preventDefault();
    console.log(state);
  }
  if (loading) {<Loader />} 
  console.log('Loading', loading)
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
