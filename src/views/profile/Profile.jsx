import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allSavedFavoriteCampGrounds, deleteFavoriteFacility } from "../../utils/favoritesFetch";

export default function Profile() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const favori = async () => {
            const allFavorites = await allSavedFavoriteCampGrounds();
            setFavorites(allFavorites);
            setTimeout(()=> {
                setLoading(false);
            }, 2000)
        }
        favori();
    }, []);
    const handleDeleteFavorite = async (facilityId) => {
        console.log(facilityId)
        await deleteFavoriteFacility(facilityId)
        const allFavorites = await allSavedFavoriteCampGrounds();
        setFavorites(allFavorites);
    }

    if (loading) return <h1>Loading. . . 🌎</h1>
    return (
       <> 
          <h2 className='saved-items-heading'>Future Camping Adventures:</h2>
          <div className='fav-list-parent'>
          <ul className='fav-list'>
          {favorites.map((favorite) =>(
            <li className='fav-list' key={favorite.facility_id}> 
              <div>
                  <Link to={`/camps/${favorite.facility_id}`}>
                      <p className='fav-list'>{favorite.facility_name}</p>
                  </Link>
                  <p className='fav-list-phone'>{favorite.facility_phone}</p>
                  <button onClick={(()=> handleDeleteFavorite(favorite.facility_id))}>Delete</button>
              </div>
            </li>)
          )}
          </ul>
          </div>            
        </>
        )
    }
