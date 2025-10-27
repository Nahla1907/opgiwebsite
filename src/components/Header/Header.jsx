import React, { useEffect, useState } from 'react';
import './Header.css';
import { CgMenuRound } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ toggle menu position for mobile
  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return {}; // normal layout for desktop
  };

  // ✅ detect scroll (only affects navbar appearance)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`h-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo11.png" alt="logo" width={80} />

        {/* ✅ Close when clicking outside */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className="flexCenter h-menu"
            style={getMenuStyles()}
          >
            <a href="#home" onClick={() => setMenuOpened(false)}>Accueil</a>
            <a href="#projects" onClick={() => setMenuOpened(false)}>Projet</a>
            <a href="#annonces" onClick={() => setMenuOpened(false)}>Annonces</a>
            <a href="#contact" onClick={() => setMenuOpened(false)}>Contact</a>
            <button className="button" onClick={() => setMenuOpened(false)}>
              <a href="">E-payment</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* ✅ Toggle open/close on click */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <CgMenuRound size={55} />
        </div>
      </div>
    </section>
  );
};

export default Header;
