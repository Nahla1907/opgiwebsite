import React from 'react'
import './Companies.css'

const Companies = () => {
  return (
    <section className='c-wrapper'>
        <div className="padding innerWidth flexCenter c-container">
           <a href="https://www.aadl.com.dz" target="_blank" rel="noopener noreferrer">
            <img src="./AADL.png" alt="AADL Logo"  />
           </a>
           <a href="https://bnh.dz/" target="_blank" rel="noopener noreferrer">
           <img src="bnh.jpeg" alt="" />
           </a>
           <a href="https://www.enpi.dz/" target="_blank" rel="noopener noreferrer">
           <img src="enpi.jpeg" alt="" />
           </a>
           <a href="https://www.mhuv.gov.dz/" target="_blank" rel="noopener noreferrer">
           <img src="MHUV.svg" alt="" />
           </a>

            
        </div>

    </section>
  
  )
}

export default Companies
