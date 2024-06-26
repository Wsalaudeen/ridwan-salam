import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <header className="header">
      <nav
        className="navbar"
        style={{
          backgroundColor: "#f1efe2",
        }}
        b
      >
        <div className="container">
          <div className="logo">
            <h1>Ridwan Salam</h1>
          </div>

          <div
            className="menu-icon"
            onClick={handleShowNavbar}
            aria-label="Hamburger menu"
            role="Toggle menu"
          >
            <Hamburger />
          </div>
          <div className={`navbar-elements  ${showNavbar ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/assignments">Assignments</NavLink>
              </li>

              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact </NavLink>
              </li>
              <li>
                <NavLink to="/ prints">Prints</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
