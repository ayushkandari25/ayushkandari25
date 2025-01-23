import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Moon, Sun, Menu } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <Menu size={24} />
      </div>

      {/* Navbar Links */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ScrollLink to="home" smooth={true} duration={10} className="nav-link" onClick={handleMenuClick}>
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={10} className="nav-link" onClick={handleMenuClick}>
          About
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={10} className="nav-link" onClick={handleMenuClick}>
          Skills
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={10} className="nav-link" onClick={handleMenuClick}>
          Projects
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={10} className="nav-link" onClick={handleMenuClick}>
          Contact
        </ScrollLink>
        <a 
          href="https://drive.google.com/file/d/1JnZkgkE-pg4FG6ysE6koIIovY1DxWu8a/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Resume
        </a>
      </div>

      {/* Dark Mode Toggle Button */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}

export default Navbar;
