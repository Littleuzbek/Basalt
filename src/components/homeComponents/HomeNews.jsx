import { FaComments, FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router";

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
          <img
            src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/2-2-850x400-1-570x270.jpg"
            alt=""
            loading="lazy"
          />
          <div>
            <h4>What Planning Process Needs?</h4>
            <p>
              The increasing availability of productivity how all this mistaken
              idea of denouncing pleasure and praising pain was born and I will
              give you a ...
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
            <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/news-3-1-231x235.jpg" loading="lazy" alt="" />
            <div>
              <h4>Don’t worry about creativity.</h4>
              <p>
                The increasing availability of productivity how all this mistaken idea of denouncing pleasure and praising pain was born and I ...
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
            <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/1-2-850x400-1-231x235.jpg" loading="lazy" alt="" />
            <div>
              <h4>Construction Of the Building’s Roof</h4>
              <p>
                The increasing availability of productivity how all this mistaken idea of denouncing pleasure and praising pain was born and I ...
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
