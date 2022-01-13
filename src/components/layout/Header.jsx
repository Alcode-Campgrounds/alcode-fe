import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>Alcode</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/signin">
            <li>Sign In</li>
          </Link>
          <Link to="/profile">
            <li>Your Profile</li>
          </Link>
          <Link to="/search">
            <li>Find A Campsite</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
