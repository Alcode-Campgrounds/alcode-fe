import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { logout } from "../../utils/AuthFetch";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  let navigate = useNavigate();

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <h1 className="brand">Alcode</h1>

        <button className="hamburger-btn" onClick={handleToggle}>
          {menuOpen ? (
            <MdClose
              style={{
                color: "#124559",
                width: "3rem",
                height: "3rem",
              }}
            />
          ) : (
            <FiMenu
              style={{
                color: " #124559",
                width: "3rem",
                height: "3rem",
              }}
            />
          )}
        </button>
        <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
          <Link to="/" onClick={() => closeMenu()}>
            <li className="nav-links">Home</li>
          </Link>
          <Link to="/about" onClick={() => closeMenu()}>
            <li className="nav-links">About</li>
          </Link>
          <Link to="/signup" onClick={() => closeMenu()}>
            <li className="nav-links">Sign Up</li>
          </Link>
          <Link to="/signin" onClick={() => closeMenu()}>
            <li className="nav-links">Sign In</li>
          </Link>
          <Link to="/profile" onClick={() => closeMenu()}>
            <li className="nav-links">Your Profile</li>
          </Link>
          <Link to="/search" onClick={() => closeMenu()}>
            <li className="nav-links">Search</li>
          </Link>
        </ul>
      </div>
      <section className="username">
        {/* Optional Chaining with a ternary my boys?! */}
        {user?.name ? <p>{`Signed in as ${user.name}`}</p> : <p></p>}
        {user?.name && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </section>
    </>
  );
}
