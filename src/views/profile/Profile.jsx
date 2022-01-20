import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allSavedFavoriteCampGrounds } from "../../utils/favoritesFetch";

export default function Profile() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favori = async () => {
            console.log('hoa')
            const allFavorites = await allSavedFavoriteCampGrounds();
            setFavorites(allFavorites);
        }
        favori();
    }, []);

    console.log('favorites', favorites);


    return (
       <> 
            <h2>This is your life</h2>
            <div className='fav-list-parent'>
                <ul className='fav-list'>
                    {favorites.map((favorite) =>(
                        <li key={favorite.facility_id}> 
                            <div>
                                <Link to={`/camps/${favorite.facility_id}`}>
                                    <p>{favorite.facility_name}</p>
                                </Link>
                                <p>{favorite.facility_phone}</p>
                            </div>
                        </li>)
                    )}
                </ul>
            </div>
            
        </>
        )
    }
