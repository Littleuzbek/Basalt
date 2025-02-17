import "./Header.css"
import { Link, NavLink } from "react-router";
import poster from "../../assets/preload.jpg"
import logo from "../../assets/logo.png"
import lava from "../../assets/lava.mp4"
import { FaStamp } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import SolutionSlider from "../sliders/SolutionSlider";

export default function HomeHeader() {
  return (
    <header className="header">
      <div className="header-top">
        <div>
            <div className="before-navigation">
                <img src={logo} alt="" className="home-logo" loading="lazy"/>
                <div className="before-navigation-item">
                    <FaStamp className="icon" style={{width: "30px", height: "30px"}}/>
                    <div>
                        <h4>Certified Company</h4>
                        <p>ISO 9001 2001</p>
                    </div>
                </div>
                <div className="before-navigation-item">
                    <GiTrophyCup className="icon" />
                    <div>
                        <h4>Great Industrial</h4>
                        <p>Solition Provider</p>
                    </div>
                </div>
                <div className="before-navigation-item">
                    <FaGlobeAmericas className="icon" />
                    <div>
                        <h4>Address</h4>
                        <p>Uzbekistan, Tashkent</p>
                    </div>
                </div>
            </div>

            <div className="home-navigation">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="home-navigation-item">
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                        <div className="home-navigation-drop">
                            <Link to="/projects/rockfiber">Rokfiber</Link>
                            <Link to="/projects/geobasalt-products">GEOBASALT PRODUCTS</Link>
                            <Link to="/projects/ecobasalt-group">ECOBASALT GROUP</Link>
                            <Link to="/projects/goldfiber-pro">GOLDFIBER PRO</Link>
                            <Link to="/projects/basalt-wool">BASALT WOOL</Link>
                            <Link to="/projects/basfiber-trade">BASFIBER TRADE</Link>
                            <Link to="/projects/qoraqalpoq-basalt-wool">QORAQALPOQ BASALTWOOL</Link>
                            <Link to="/projects/basalt-quarry">BASALT QUARRY</Link>
                        </div>
                    </li>
                    <li className="home-navigation-item">
                        <NavLink to="/solutions">
                            Solutions
                        </NavLink>
                        <div className="home-navigation-drop">
                            <Link to="/">production of Basalt continuous fiber</Link>
                            <Link to="/">production of Basalt rockwool</Link>
                            <Link to="/">production of BRP continuous pipes</Link>
                            <Link to="/">production of Basalt continuous chopped strand</Link>
                            <Link to="/">production of Basalt reinforcement bars</Link>
                            <Link to="/">production of Basalt geogrids and facade mesh</Link>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/partners">Partners</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/contact-us">Get a Quote</NavLink>
            </div>
        </div>
      </div>
        <div className="header-mid">
            <video src={lava} autoPlay loop muted preload="auto" playsInline poster={poster}></video>
        </div>
        <div className="header-bottom">
            <SolutionSlider />
        </div>
    </header>
  );
}
