import { useState } from "react";
import "./Slider.css";

export default function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const changeSlide = (direction) => {
    const slidesLength = 3;

    if (direction === "up") {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
    } else if (direction === "down") {
      setActiveSlideIndex((prevIndex) =>
        prevIndex === 0 ? slidesLength - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      <div className="slider-container">
        <div
          className="left-slide"
          style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}
        >
          <div style={{ backgroundColor: "#FD3555" }}>
            <h1>Aeroponía</h1>
            <p>Sistema de cultivo hidropónico vertical</p>
          </div>
          <div style={{ backgroundColor: "#2A86BA" }}>
            <h1>Hidroponia</h1>
            <p>Hidroponia horizontal , Aeroponía NFT</p>
          </div>
          <div style={{ backgroundColor: "#252E33" }}>
            <h1>Rúcula </h1>
            <h1>hidropónica </h1>
            <p>Mas sabor , mejor textura , mayor duracion , sin pesticidas</p>
          </div>
        </div>
        <div
          className="right-slide"
          style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}
        >
          <div className="background1"></div>
          <div className="background2"></div>
          <div className="background3"></div>
        </div>
        <div className="action-buttons">
          <button className="down-button" onClick={() => changeSlide("down")}>
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button" onClick={() => changeSlide("up")}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </>
  );
}
