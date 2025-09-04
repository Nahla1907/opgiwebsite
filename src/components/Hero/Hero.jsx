import React from 'react'
import "./Hero.css"
import { HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>

            {/* left section  */}
            <div className='flexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle'/>
                    {/* <h1 className='opgi'>OPGI DJANET <br />
                    </h1> */}
                    <h1>
                        
                        OFFICE DE PROMOTION <br />
                        ET DE GESTION IMMOBILIÈRE <br />
                        
                    </h1>
                    <h2>WILAYA DE DJANET</h2>

                </div>
           
                <div className='flexColStart hero-des'>
                    <span></span>
                    <span></span>

                </div>
             <div className='flexCenter stats'>
                <div className='flexColCenter stat'>
                    <span>
                    <CountUp start={0} end={1} duration={10}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Direction generale</span>
                    

                </div>

                <div className='flexColCenter stat'>
                    <span>
                    <CountUp start={0} end={1} duration={10}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'> Unités</span>
                    

                </div>

                <div className='flexColCenter stat'>
                    <span>
                    <CountUp start={0} end={1} duration={10}/>
                    <span>+</span>
                    </span>
                    <span className='secondaryText'>Caisses</span>
                    

                </div>
            </div>    

            </div>
            {/* right side */}
            <div className='flexCenter hero-right'>
                <div className='image-container'>
                    <img src="./djanet main 2.jpg" alt="" />

                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero
