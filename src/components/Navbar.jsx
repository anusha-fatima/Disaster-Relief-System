import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); 
  };

  return (
    <div className={`nav ${isVisible ? "visible" : "hidden"}`}>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

     
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

    
      <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li className="nav-login" onClick={() => { setMenu("home"); closeMobileMenu(); }}>
          <Link smooth={true} duration={500} style={{ textDecoration: "none", color: "#fff" }} to="/">
            Home
          </Link>
        </li>
        <li className="nav-login" onClick={() => { setMenu("help_line"); closeMobileMenu(); }}>
          <Link  smooth={true} style={{ textDecoration: "none", color: "#fff" }} to="/help_line">
            Help-Line
          </Link>
        </li>
        <li className="nav-login" onClick={() => { setMenu("services"); closeMobileMenu(); }}>
          <Link smooth={true} style={{ textDecoration: "none", color: "#FFF" }} to="/services">
            Services
          </Link>
        </li>
        <li className="nav-login" onClick={() => { setMenu("about"); closeMobileMenu(); }}>
          <Link  smooth={true} style={{ textDecoration: "none", color: "#fff" }} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;