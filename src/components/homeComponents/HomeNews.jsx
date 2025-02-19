import { FaComments, FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router";
import news1 from "../../assets/Latestnews/news1.jpg";
import news2 from "../../assets/Latestnews/news2.jpg";
import news3 from "../../assets/Latestnews/news3.mp4";

export default function HomeNews() {
  const location = useLocation();
  
  const dd = new Date().getDate();
  const year = new Date().getFullYear();
  const monthName = new Date().toLocaleString("en", { month: "long" });
  return (
    <div className="latest-news-container">
      {location.pathname.includes("news") || 
      <>
        <h2>Our Latest News</h2>
        <span></span>
      </>}
      <div className="news">
        <div className="news-item" data-aos="fade-right" data-aos-duration="2000">
          <video
            src={news3}
            controls
            preload="metadata"
            alt=""
          />
          <div>
            <h4>Basalt Rebar</h4>
            <p>
              Basalt rebar is an innovative building material used in various fields of construction.
              This material is made from natural basalt raw materials and has a number of unique advantages:
              - Corrosion resistance;
              - Resistance to high temperatures and chemicals;
              - Lightness and high strength;
              - Environmental safety;
              - Affordable price.
            </p>
            <span className="reactions">
              <div>
                <FaComments /> 0 comments
              </div>
              <div>
                <FaUser /> admin
              </div>
              <div>
                <FaRegCalendarAlt /> {`${monthName} ${dd}, ${year}`}
              </div>
            </span>
          </div>
        </div>

        <div className="news-item" data-aos="fade-left" data-aos-duration="2000">
          <div className="">
            <img src={news1} loading="lazy" alt="" />
            <div>
              <h4>Uzbekistan - Pakistan</h4>
              <p>
                On February 11, a historic event took place in Lahore - the first "Made in Uzbekistan" national products exhibition began! 🇺🇿 🇵🇰 and the "Basalt Uzbekistan" group of companies participated in it.
                A major achievement for our company within the framework of the exhibition - a memorandum was signed with the large Pakistani company "Izhar Group of Companies" on the supply of basalt reinforcement! 
              </p>
              <span className="reactions">
                <div>
                  <FaComments /> 0 comments
                </div>
                <div>
                  <FaUser /> admin
                </div>
                <div>
                  <FaRegCalendarAlt /> {`${monthName} ${dd}, ${year}`}
                </div>
              </span>
            </div>
          </div>
          <div>
            <img src={news2} loading="lazy" alt="" />
            <div>
              <h4>Our basalt fiber and composite materials are mainly used in the following areas:</h4>
              <p>
                🏗️ Construction and industry
                🛣️ Road and bridge construction
                🚗 Automotive
                🚢 Shipbuilding
                🛸 Aerospace
                ⚡ Energy
                The high strength, long service life and environmental friendliness of our products are important for modern projects. We are ready to discuss your needs and offer the optimal solution!
              </p>
              <span className="reactions">
                <div>
                  <FaComments /> 0 comments
                </div>
                <div>
                  <FaUser /> admin
                </div>
                <div>
                  <FaRegCalendarAlt /> {`${monthName} ${dd}, ${year}`}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
