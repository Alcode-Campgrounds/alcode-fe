import React from "react";
import { Link } from "react-router-dom";
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user } = useUser()

  const handleToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="header">
        <h1 className='brand'>Alcode</h1>
        

            <button className='hamburger-btn' onClick={handleToggle} >  
              {menuOpen ? (
                <MdClose style={{ 
                  color: "#124559", 
                  width: "4rem", 
                  height: "4rem" 
                }} />
              ) : (
                <FiMenu style={{ 
                  color: " #124559", 
                  width: "4rem", 
                  height: "4rem" 
                }} />
                )}
            </button>
              <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
                <Link to="/" onClick={() => closeMenu()}>
                  <li className='nav-links'>Home</li>
                    </Link>
                    <Link to="/about" onClick={() => closeMenu()}>
                      <li className='nav-links'>About</li>
                    </Link>
                    <Link to="/contact" onClick={() => closeMenu()}>
                      <li className='nav-links'>Contact</li>
                    </Link>
                    <Link to="/signup" onClick={() => closeMenu()}>
                      <li className='nav-links'>Sign Up</li>
                    </Link>
                    <Link to="/signin" onClick={() => closeMenu()}>
                      <li className='nav-links'>Sign In</li>
                    </Link>
                    <Link to="/profile" onClick={() => closeMenu()}>
                      <li className='nav-links'>Your Profile</li>
                    </Link>
                    <Link to="/search" onClick={() => closeMenu()}>
                      <li className='nav-links'>Search</li>
                    </Link>
                </ul>
        
      </div>
       <section className='username'>
          { user.name ? 
          <p>{`Signed in as ${user.name}`}</p> 
          : <p></p> }
        </section>
    </>
  );
}
