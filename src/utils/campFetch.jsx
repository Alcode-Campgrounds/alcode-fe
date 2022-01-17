export const fetchAllFacilities = async () => {
  const url = process.env.REACT_APP_ALL_CAMPGROUNDS;
  const data = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  const res = await data.json();
  return res;
};
export const fetchStateFacility = async (state) => {
  const url = `${process.env.REACT_APP_ALL_CAMPGROUNDS}/${state}`;
  const data = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  const res = await data.json();
  return res;
};
export const fetchCampground = async (id) => {
  const url = `${process.env.REACT_APP_INDIVIDUAL_CAMPGROUND}/${id}`;
  const data = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  const res = await data.json();
  return res;
}