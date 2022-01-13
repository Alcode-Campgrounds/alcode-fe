import React, { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { fetchAllFacilities } from "../../utils/campFetch";
import { getStorage, setStorage } from "../../utils/localStorage";

export default function CampFinder() {
  // const [setSearchResults] = useState([]);
  const { user } = useUser();
  console.log(user);

  useEffect(() => {
    async function getCampgrounds(){
      const existingStorage = getStorage('ALL');
      console.log('STORE', existingStorage);
      if (existingStorage.length === 0){
        const facilities = await fetchAllFacilities();
        setStorage('ALL', facilities);
      }
    };
    getCampgrounds();
  }, []);


  return (
    <div>
      <h1>Search campgrounds ya dingus</h1>
      <form>
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
