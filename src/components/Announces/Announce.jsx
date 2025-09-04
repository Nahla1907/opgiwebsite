import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Announce.css';
import data from '../../utils/slider.json';
import { sliderSettings as baseSettings } from '../../utils/common';

const Announce = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgUrl) => setModalImage(imgUrl);
  const closeModal = () => setModalImage(null);

  // extend your slider settings with loop + autoplay
  const sliderSettings = {
    ...baseSettings,
    loop: true, // 🔑 makes slides revolve endlessly
    modules: [Autoplay],
    autoplay: { delay: 3000, disableOnInteraction: false },
     spaceBetween: 63 // 👈 controls the gap between cards (default = 0)
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="whiteText">NOS ANNONCES</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => openModal(card.image)}
              >
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: 'orange' }}></span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {modalImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={modalImage} alt="full" />
              <button className="close-button" onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Announce;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
