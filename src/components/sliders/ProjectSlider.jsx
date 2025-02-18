import "../Projects.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { GrFormPrevious } from "react-icons/gr";
import fiber from "../../assets/basaltRockfiber/fiber1.jpg"
import geobasalt from "../../assets/basaltGeogrid/geogrid2.jpg"
import ecobasalt from "../../assets/basaltPipe/pipe4.jpg"
import goldfiber from "../../assets/basaltGoldfiber/GOLDFIBER-37.jpg"
import wool from "../../assets/basaltWool/wool3.jpg"
import trade from "../../assets/basaltBasfiber/basfiber32.jpg"
import qqwool from "../../assets/basaltQWool/qqWool1.jpg"
import quarry from "../../assets/basaltQuarry/quarry5.jpg"

export default function ProjectSlider() {
  let sliderRef = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    focusOnSelect: true,
    nav: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,

        }
      }
    ]
  };

  return (
    <div className="slider-project">
      <div>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={fiber}
                alt=""
              />
              <div>
                <h4>ROCKFIBER</h4>
                <p>
                  Production of basalt roving (basalt continuous fiber), basalt
                  chopped strand and basalt reinforcement bars
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/rockfiber")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={geobasalt}
                alt=""
              />
              <div>
                <h4>GEOBASALT PRODUCTS</h4>
                <p>Production of basalt geogrid and facade mesh</p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/geobasalt-products")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={ecobasalt}
                alt=""
              />
              <div>
                <h4>ECOBASALT GROUP</h4>
                <p>Production of continuous BRP pipes</p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/ecobasalt-group")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={goldfiber}
                alt=""
              />
              <div>
                <h4>GOLDFIBER PRO</h4>
                <p>
                  Production of basalt continuous fiber (including basalt direct
                  roving) and basalt chopped strand
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/goldfiber-pro")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={wool}
                alt=""
              />
              <div>
                <h4>BASALT WOOL</h4>
                <p>Production of basalt rockwool and insulation materials</p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/basalt-wool")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={trade}
                alt=""
              />
              <div>
                <h4>BASFIBER TRADE</h4>
                <p>
                  Production of basalt continuous fiber (including basalt direct
                  roving) and basalt fabric
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/basfiber-trade")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd project-slider">
              <img
                loading="lazy"
                src={qqwool}
                alt=""
              />
              <div>
                <h4 style={{ padding: "12px 20px 0" }}>
                  QORAQALPOQ BASALTWOOL
                </h4>
                <p>Production of basalt rockwool and insulation materials</p>
                <div className="moreBtn">
                  <button onClick={() => navigate("/projects/qoraqalpoq-basalt-wool")}>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="project-cardd">
              <img
                loading="lazy"
                src={quarry}
                alt=""
              />
              <div>
                <h4>BASALT QUARRY</h4>
                <p>Production of basalt quarry</p>
                <div className="moreBtn">
                  <button
                    onClick={() =>
                      navigate("/projects/basalt-quarry")
                    }
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="action-container-sm">
          <GrFormPrevious onClick={() => previous()} />
          <GrFormPrevious onClick={() => next()} />
        </div>
      </div>
    </div>
  );
}
