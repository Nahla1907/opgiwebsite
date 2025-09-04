import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="f-container">
      {/* Left Section */}
      <div className="f-left">
        {/* <h2 className="logo">OPGI</h2> */}
        <p>IFFRI, DJANET</p>
        <p> <a href="tel:+21330350301">030 350 301</a></p>
        <p> <a href="mailto:opgidjanet@gmail.com">opgidjanet@gmail.com</a></p>
      </div>

      {/* Center Section */}
      <div className="f-menu">
        <a href="#home">Accueil</a>
        <a href="#projects">Projet</a>
        <a href="#annonces">Annonces</a>
        <a href="#contact">Contact</a>
        <a href="#">E-Payment</a>
        
      </div>

      {/* Right Section */}
      <div className="f-right">
        <p>Suivez-nous :</p>
        <a
          href="https://www.facebook.com/profile.php?id=61557750359494"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Facebook
        </a>
       
      </div>
    </footer>
  );
}

export default Footer;
