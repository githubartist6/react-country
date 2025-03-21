import "../css/headers.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import headerLinks from "../../api/navBar.json";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          {/* Logo */}
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          {/* Navigation Menu */}
          <nav className={show ? "menu-mobile active" : "menu-web"}>
            <ul className="nav-links">
              {headerLinks.map(({ name, path }) => (
                <li key={name.toLowerCase()}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                    onClick={() => setShow(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              {show ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
