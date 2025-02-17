import "./Presentation.css";
import { useEffect, useRef, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";

export default function Presentation({ images }) {
  const [slide, setSlide] = useState(0);
  const slidesRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [position, setPosition] = useState({ scale: "1" });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - slidesRef.current.offsetLeft);
    setScrollLeft(slidesRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - slidesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    slidesRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const zoomIn = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setPosition({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      scale: "2",
    });
  };

  return (
    <div className="presentation-slider">
      <div>
        <div className="main-slide">
          <img
            src={images?.[slide]}
            alt=""
            style={position}
            onMouseMove={zoomIn}
            onMouseLeave={() => setPosition({ scale: "1" })}
            loading="lazy"
          />
        </div>
        <div
          className="side-slides"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          ref={slidesRef}
        >
          {images?.map((image, key) => (
            <div key={image} style={images?.length === 3 ? {width: "217px"} : {}}>
              <img src={image} alt="" loading="lazy" onClick={() => setSlide(key)} />
              <span
                className={slide === key ? "" : "slide-item"}
                onClick={() => setSlide(key)}
              ></span>
            </div>
          ))}
        </div>
        <div className="slider-action" style={images?.length === 3 ? {display: "none"} : {}}>
          <GrFormPrevious
            onClick={() => {
              slidesRef.current.scrollLeft -= 170;
            }}
          />
          <GrFormPrevious
            onClick={() => {
              slidesRef.current.scrollLeft += 170;
            }}
          />
        </div>
      </div>
    </div>
  );
}
