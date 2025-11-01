import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./OurProjects.css";
import data from "../../utils/accordion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const OurProjects = () => {
  const [activeProject, setActiveProject] = useState(data[0]);
  const [selectedImage, setSelectedImage] = useState(data[0].images[0]);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section className="v-wrapper">
      <div className="padding innerWidth flexCenter v-container">
        {/* Left side (thumbnails + large image) */}
        <div className="v-left">
          <div className="image-gallery">
            <img
              src={selectedImage}
              alt="Selected project"
              className="main-image"
              onClick={() => setPreviewImage(selectedImage)}
            />
            <div className="thumbnail-row">
              {activeProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i}`}
                  className={`thumbnail ${
                    img === selectedImage ? "active-thumb" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side (accordion) */}
        <div className="flexColStart v-right ">
          <span className="orangeText">NOS PROJETS</span>
          <div className="scroll-container">
          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                  onClick={() => {
                    setActiveProject(item);
                    setSelectedImage(item.images[0]);
                  }}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      </div>

      {/* Image preview (modal/lightbox) */}
      {previewImage && (
        <div className="image-preview" onClick={() => setPreviewImage(null)}>
          <img src={previewImage} alt="Preview" />
        </div>
      )}
    </section>
  );
};

export default OurProjects;
