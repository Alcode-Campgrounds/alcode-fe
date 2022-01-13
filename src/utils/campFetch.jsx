export const fetchAllFacilities = async () => {
    const url = process.env.REACT_APP_ALL_CAMPGROUNDS;
    const data = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    const res = await data.json();
    return res;
}