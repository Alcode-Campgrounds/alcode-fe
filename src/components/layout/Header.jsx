import React from "react";
import { Link } from "react-router-dom";
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser()
console.log('USER',user)

  return (
    <>
      <div className="header">
        <h1>Alcode</h1>
        
        { user.name ? 
        <p className='username'>{`signed in as ${user.name}`}</p> 
        : <p></p> }

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
