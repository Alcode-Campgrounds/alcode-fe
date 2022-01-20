
export const addFavoriteCampGround = async (campGroundObj) =>{
const addFavoriteURL = `${process.env.REACT_APP_ADD_FAVORITE}`
    const response = await fetch(addFavoriteURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(campGroundObj),
    });
    const data = await response.json();
    return data;
}


export const allSavedFavoriteCampGrounds= async () =>{
    const URL = process.env.REACT_APP_GET_FAVORITES
        const response = await fetch(URL, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await response.json();
        return data;
}

export const deleteFavoriteFacility = async (facilityId) => {
    const url = `${process.env.REACT_APP_DELETE_FAVORITE}/${facilityId}`
    const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
    });
    const data = await response.json();
    return data;
}