import "../Projects.css";
import "../homeComponents/Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
  import { GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
import { useNavigate } from "react-router";
import fiber from "../../assets/basaltGoldfiber/GOLDFIBER-10.jpg"

export default function SolutionSlider() {
  const navigate = useNavigate();
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    focusOnSelect: true,
    nav: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="solution-slider" >
      <div className="action-container">
        <GrFormPrevious onClick={() => previous()}/>
        <GrFormPrevious onClick={() => next()}/>
      </div>
      <div>
        <div className="slider-container ">
          <Slider 
           ref={slider => {
             sliderRef = slider;
            }}
            {...settings}>
            <div className="project-cardd solution-slider-card">
              <img
                loading="lazy"
                src={fiber}
                alt=""
                />
              <div>
                <h4>Complex for the production of Basalt continuous fiber</h4>
                {/* <p>
                  {" "}
                  Компания ТУЛАПРЕССМАШ производит сменные универсальные
                  формообразователи для решеток перекрытия...
                </p> */}
                <div className="moreBtn">
                  <button onClick={() => navigate("/solutions/production-of-basalt-continuous-fiber")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg"
                loading="lazy"
                alt=""
                />
              <div>
                <h4>Complex for the production of Basalt rockwool</h4>
                {/* <p>
                  {" "}
                  Компания ТУЛАПРЕССМАШ производит сменные универсальные
                  формообразователи для решеток перекрытия...
                </p> */}
                <div className="moreBtn">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg"
                loading="lazy"
                alt=""
                />
              <div>
                <h4>Complex for the production of BRP continuous pipes</h4>
                {/* <p>
                  {" "}
                  Компания ТУЛАПРЕССМАШ производит сменные универсальные
                  формообразователи для решеток перекрытия...
                </p> */}
                <div className="moreBtn">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card" id="solution-slider-card">
              <img
                src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg"
                loading="lazy"
                alt=""
                />
              <div >
               <h4>Complex for the production of Basalt continuous chopped strand</h4>
                {/* <p>
                  {" "}
                  Компания ТУЛАПРЕССМАШ производит сменные универсальные
                  формообразователи для решеток перекрытия...
                </p> */}
                <div className="moreBtn">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg"
                loading="lazy"
                alt=""
                />
              <div>
                <h4>Complex for the production of Basalt reinforcement bars</h4>
                {/* <p>
                  Линия для брикетирования мелкодисперсных отходов строительного
                  производства
                </p> */}
                <div className="moreBtn">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card" id="solution-slider-card">
              <img
                src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg"
                loading="lazy"
                alt=""
                />
              <div >
                <h4>Complex for the production of Basalt geogrids and facade mesh</h4>
                {/* <p>
                  Линия для брикетирования мелкодисперсных отходов строительного
                  производства
                </p> */}
                <div className="moreBtn">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="action-container-sm">
        <GrFormPrevious onClick={() => previous()}/>
        <GrFormPrevious onClick={() => next()}/>
      </div>
    </div>
  );
}
