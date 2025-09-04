import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './OurProjects.css'
import data from '../../utils/accordion'

const OurProjects = () => {
  // 🔑 Track which image to show
  const [activeImage, setActiveImage] = useState("./djanet main.jpg");

  return (
    <section className='v-wrapper'>
      <div className='padding innerWidth flexCenter v-container'>
        
        {/* left side (dynamic image) */}
        <div className='v-left'>
          <div className='image-container'>
            <img src={activeImage} alt="project" />
          </div>
        </div>

        {/* right side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>NOS PROJETS</span> 

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null)
              return (
              <AccordionItem
                className={`accordionItem ${className}`}
                key={i}
                uuid={i}
                onClick={() => setActiveImage(item.image)} // ✅ change image when clicked
              >
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordionButton'>

                    <AccordionItemState>
                      {({expanded}) => expanded 
                      ? setClassName ("expanded")
                      : setClassName ("collapsed " )
                      }
                    </AccordionItemState>

                    <div className='flexCenter icon'>{item.icon}</div>
                    <span className='primaryText'>{item.heading}</span>
                    <div className='flexCenter icon'>
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className='secondaryText'>{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
              );
            })}
          </Accordion>
        </div>

      </div>
    </section>
  )
}

export default OurProjects
