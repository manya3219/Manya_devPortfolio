import React, { useState } from "react";

const Header = () => {
  const [active, inActive] = useState(false);

  const toggleMenu = () => {
    inActive(!active);
  };

  const closeMenu = () => {
    inActive(false);
  };

  return (
    <header className={`header ${active ? "active" : ""}`}>
      <a href="#" className="logo">
        <span>Po</span>rtfolio
      </a>
      <box-icon name="menu" id="menu-icon" onClick={toggleMenu}>
        <i className={`bx bx-menu ${active ? "active" : ""}`} />
      </box-icon>
      <nav className={`navbar ${active ? "active" : ""}`}>
        <a href="#home" className="active" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#service" onClick={closeMenu}>
          Education
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
