import React from 'react'
import './Header.css'
// import {BiMenuAltRight} from 'react-icons/bi'
import { CgMenuRound } from "react-icons/cg";
import  { useEffect, useState } from 'react';
import OutsideClickHandler from "react-outside-click-handler"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`h-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src="./logo11.png" alt="logo" width={100}/>

            <OutsideClickHandler
             onOutsideClick={()=> {
              setMenuOpened(false)
            }}
            >

            <div className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}
            >
              
               <a href="#home">Accueil</a>
              <a href="#projects">Projet</a>
              <a href="#annonces">Annonces</a>
              <a href="#contact">Contact</a>
                <button className='button'>
                    <a href=""> E-payment </a>

                </button>

            </div>
            </OutsideClickHandler>
            <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
          {/* <BiMenuAltRight size={30}/> */}
          <CgMenuRound    size={55}/>

        </div>

        </div>
        
    </section>
  )
}

export default Header
