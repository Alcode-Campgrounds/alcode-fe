import React from "react";
import { Link } from "react-router-dom";

export default function Campsite() {
  return (
    <div>
      <Link to="/campsite">Back to Campsites</Link>
      <p>
        <h1>{Campsite.name}</h1>
      </p>
    </div>
  );
}
