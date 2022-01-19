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