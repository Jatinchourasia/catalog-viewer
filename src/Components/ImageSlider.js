import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [checked, setChecked] = useState(false);

  const length = slides.length;

  useEffect(() => {
    if (autoplay) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [current, checked]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="image" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <div className="footer">
        <h2>Autoplay </h2>
        <label className="switch">
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => {
              setChecked(!checked);
              if (checked) {
                setAutoplay(true);
              } else {
                setAutoplay(false);
              }
            }}
            id=""
          />
          <span className="box round"></span>
        </label>
      </div>
    </div>
  );
};

export default ImageSlider;
