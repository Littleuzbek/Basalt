import end1 from "../../assets/endProducts/end1.jpg"
import end2 from "../../assets/endProducts/end2.jpg"
import end3 from "../../assets/endProducts/end3.jpg"
import end4 from "../../assets/endProducts/end4.jpg"
import end5 from "../../assets/endProducts/end5.jpg"
import end6 from "../../assets/endProducts/end6.jpg"
import end7 from "../../assets/endProducts/end7.jpg"
import end8 from "../../assets/endProducts/end8.jpg"
import end9 from "../../assets/endProducts/end9.jpg"
import end10 from "../../assets/endProducts/end10.jpg"
import { GrFormPrevious } from "react-icons/gr";
import { useRef, useState } from "react"

export default function EndProductSlider() {
  const slidesRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const images = [end1, end2, end3, end4, end5, end6, end7, end8, end9, end10];
 
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
  return (
    <>
      <div className="end-product-slider" >
        <div 
        ref={slidesRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          >
          {images?.map((image, key) => (
              <img src={image} alt="" loading="lazy" key={"img" + key}/>
          ))}
        </div>
      </div>
      <div className="action-container">
        <GrFormPrevious onClick={() => slidesRef.current.scrollLeft -= 270} />
        <GrFormPrevious onClick={() => slidesRef.current.scrollLeft += 270} />
      </div>
    </>
  );
}
