

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../App.css";
import { Link } from 'react-router-dom';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="l-header bg-white text-dark">
        <nav className="navbar navbar-expand-lg navbar-light container">
          {/* Logo */}
          <a href="#" className="navbar-brand text-dark">
            Faizan Ali
          </a>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="nav-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Menu Items */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="nav-menu"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#home" className="nav-link active text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link text-dark" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link text-dark" to="/Skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#work" className="nav-link text-dark" to="/work">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link text-dark" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
