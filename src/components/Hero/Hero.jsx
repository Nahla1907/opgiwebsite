import React from 'react'
import "./Hero.css"
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        
        <div className='hero-title'>
          <div className='orange-circle' />
          <h1>
            OFFICE DE PROMOTION <br />
            ET DE GESTION IMMOBILIÈRE
          </h1>
          <h2>WILAYA DE DJANET</h2>
        </div>

        <button className="hero-btn" ><a href="#projects" onClick={() => setMenuOpened(false)}>En savoir plus</a></button>

        <div className='flexCenter stats'>
          <div className='flexColCenter stat'>
            <span><CountUp start={0} end={1} duration={8} /><span>+</span></span>
            <span>D. générale</span>
          </div>
          <div className='flexColCenter stat'>
            <span><CountUp start={0} end={1} duration={8} /><span>+</span></span>
            <span>Unités</span>
          </div>
          <div className='flexColCenter stat'>
            <span><CountUp start={0} end={1} duration={8} /><span>+</span></span>
            <span>Caisses</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
