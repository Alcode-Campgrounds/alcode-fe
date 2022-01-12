import React from "react";
// import { useHistory } from "react-router-dom";

export default function CampsiteList({ campsite }) {
  // const history = useHistory();

  // const handleUpdate = (id) => {
  //   history.push(`/campsites/update/{id}`);
  // };

  return (
    <div>
      {/* <ul>
        {campsite.map((CampsiteName) => {
          return (
            <li key={CampsiteName.id}>
              <Link to={`/campsite/${campsite.id}`}>
              {CampsiteName.name}
              <Link>
              <button
                type="button"
                onClick={() => handleUpdate(CampsiteName.id)}
              >
                Search
              </button>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
