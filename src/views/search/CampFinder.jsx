import React, { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { fetchAllFacilities } from "../../utils/campFetch";

export default function CampFinder() {
  // const [setSearchResults] = useState([]);
  const { user } = useUser();
  console.log(user);

  useEffect(() => {
    async function getCampgrounds(){
      const facilities = await fetchAllFacilities();
      console.log('FAC', facilities)
      // SET ALL INTO Local storage?
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
