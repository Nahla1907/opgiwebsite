import React from 'react'
import "./Hero.css"
import CountUp from "react-countup"
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>OPGI Djanet - Office de Promotion et de Gestion Immobilière</title>
        <meta
          name="description"
          content="Site officiel de l'OPGI Djanet. Découvrez nos programmes, projets immobiliers, et services de gestion immobilière dans la wilaya de Djanet."
        />
        <meta
          name="keywords"
          content="OPGI, Djanet, immobilier, logements, OPGI Djanet, Office de Promotion et de Gestion Immobilière, Algérie"
        />
        <meta name="author" content="OPGI Djanet" />
        <link rel="canonical" href="https://opgiwebsite.vercel.app/" />
      </Helmet>
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
    </>
  )
}

export default Hero
