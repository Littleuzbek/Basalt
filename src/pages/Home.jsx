import "../components/homeComponents/Home.css";
import "../components/ContactUs.css";
import { Suspense, lazy } from "react";
import lava2 from "../assets/lava2.mp4"
// import partner1 from "../assets/Basalt partners/7.png"
// import partner8 from "../assets/Basalt partners/8.png"
// import partner9 from "../assets/Basalt partners/9.png"
// import partner10 from "../assets/Basalt partners/10.png"
// import partner11 from "../assets/Basalt partners/11.png"
// import partner12 from "../assets/Basalt partners/12.png"
// import partner13 from "../assets/Basalt partners/13.png"
// import partner14 from "../assets/Basalt partners/14.png"
// import partner15 from "../assets/Basalt partners/15.png"
// import partner16 from "../assets/Basalt partners/16.png"
// import partner17 from "../assets/Basalt partners/17.png"
// import partner18 from "../assets/Basalt partners/18.png"
// import partner19 from "../assets/Basalt partners/19.png"
// import partner20 from "../assets/Basalt partners/20.png"
// import partner21 from "../assets/Basalt partners/21.png"
// import partner22 from "../assets/Basalt partners/22.png"
// import partner23 from "../assets/Basalt partners/23.png"
// import partner24 from "../assets/Basalt partners/24.png"
// import partner25 from "../assets/Basalt partners/25.png"
// import partner26 from "../assets/Basalt partners/26.png"
// import partner27 from "../assets/Basalt partners/27.png"
// import partner28 from "../assets/Basalt partners/28.png"
// import partner29 from "../assets/Basalt partners/29.png"
// import partner30 from "../assets/Basalt partners/30.png"
// import NewPartner1 from "../assets/Basalt partners/NewPartner1.png"
// import NewPartner2 from "../assets/Basalt partners/NewPartner2.png"
import TopSection from "../components/TopSection"
const HomeHeader = lazy(() => import("../components/homeComponents/HomeHeader"));
const Testimonial = lazy(() => import("../components/homeComponents/Testimonial"));
const Welcome = lazy(() => import("../components/homeComponents/Welcome"));
const Team = lazy(() => import("../components/homeComponents/Team"));
const HomeNews = lazy(() => import("../components/homeComponents/HomeNews"));
const ProjectSlider = lazy(() => import("../components/sliders/ProjectSlider"));
const ContactUs = lazy(() => import("../components/ContactUsComp"));

export default function Home() {
  return (
    <>
      <Suspense fallback="...">
        <TopSection />
      </Suspense>

      <Suspense fallback="...">
        <HomeHeader />
      </Suspense>

      <Suspense fallback="...">
        <Welcome />
      </Suspense>

      <div className="home-project-container">
        <video
          src={lava2}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        ></video>
        <div>
          <h2>Our Projects</h2>
          <span></span>
              <ProjectSlider />
        </div>
      </div>

      <Suspense fallback="...">
        <Testimonial />
      </Suspense>

      <Suspense fallback="...">
        <Team />
      </Suspense>

      <Suspense fallback="...">
        <HomeNews />
      </Suspense>

      <ContactUs />

      {/* <div className="partners">
        <h2>Our Partners</h2>
        <div className="slider-partners">
          <div>
            <img src={partner1} loading="lazy" />
            <img src={partner8} loading="lazy" />
            <img src={partner9} loading="lazy" />
            <img src={partner10} loading="lazy" />
            <img src={partner11} loading="lazy" />
            <img src={partner12} loading="lazy" />
            <img src={partner13} loading="lazy" />
            <img src={partner14} loading="lazy" />
            <img src={partner15} loading="lazy" />
            <img src={partner16} loading="lazy" />
            <img src={partner17} loading="lazy" />
            <img src={partner18} loading="lazy" />
            <img src={partner19} loading="lazy" />
            <img src={partner20} loading="lazy" />
            <img src={partner21} loading="lazy" />
            <img src={partner22} loading="lazy" />
            <img src={partner23} loading="lazy" />
            <img src={partner24} loading="lazy" />
            <img src={partner25} loading="lazy" />
            <img src={partner26} loading="lazy" />
            <img src={partner27} loading="lazy" />
            <img src={partner28} loading="lazy" />
            <img src={partner29} loading="lazy" />
            <img src={partner30} loading="lazy" />
            <img src={NewPartner1} loading="lazy" />
            <img src={NewPartner2} loading="lazy" />
          </div>
        </div>
      </div> */}
    </>
  );
}
