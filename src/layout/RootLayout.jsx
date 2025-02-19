import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import entrance from "../assets/entrance1.jpg";
import projBack from "../assets/projectPageBack.mp4"
import solutionBack from "../assets/solutionPageBack.mp4"
import aboutBack from "../assets/aboutBack.mp4"
// import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Footer from "../components/Footer";
import FixedBtn from "../components/FixedBtn";

export default function RootLayout() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const link = useLocation();

  useEffect(() => {
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      // setMenu(false);
      // setSubMenu(false);

      if (window.scrollY > 140) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    });
  }, [window.scrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [link]);

  const navigationHandler = () => {
    const dropDown = document.querySelector(".navigation-drop");

    dropDown.setAttribute("style","display: none")

    clearTimeout(timeOut)

    timeOut = setTimeout(() => {
      dropDown.removeAttribute("style")
    }, 100);
  };

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <>
      <div
        className="main-header"
        style={link.pathname === "/" ? { display: "none" } : {}}
      >
        <div>
          <img src={logo} alt="" onClick={() => navigate("/")} />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
              <div className="navigation-drop">
                <Link to="/projects/rockfiber"
                  onClick={() => navigationHandler()}
                >
                  Rokfiber
                </Link>
                <Link to="/projects/geobasalt-products"
                  onClick={() => navigationHandler()}
                >
                  GEOBASALT PRODUCTS
                </Link>
                <Link to="/projects/ecobasalt-group"
                  onClick={() => navigationHandler()}
                >
                  ECOBASALT GROUP
                </Link>
                <Link to="/projects/goldfiber-pro"
                  onClick={() => navigationHandler()}
                >
                  GOLDFIBER PRO
                </Link>
                <Link to="/projects/basalt-wool"
                  onClick={() => navigationHandler()}
                >
                  BASALT WOOL
                </Link>
                <Link to="/projects/basfiber-trade"
                  onClick={() => navigationHandler()}
                >
                  BASFIBER TRADE
                </Link>
                <Link to="/projects/qoraqalpoq-basalt-wool"
                  onClick={() => navigationHandler()}
                >
                  QORAQALPOQ BASALTWOOL
                </Link>
                <Link
                  to="/projects/basalt-quarry"
                  onClick={() => navigationHandler()}
                >
                  BASALT QUARRY
                </Link>
              </div>
            </li>
            <li>
              <NavLink to="/solutions">Solutions</NavLink>
              <div className="navigation-drop">
                <Link
                  to="/solutions/production-of-basalt-continuous-fiber"
                  onClick={() => navigationHandler()}
                >
                  production of Basalt continuous fiber
                </Link>
                <Link 
                  to="/"
                  onClick={()=>navigationHandler()}
                >
                    production of Basalt rockwool</Link>
                <Link
                  to="/"
                  onClick={() => navigationHandler()}
                >
                  production of BRP continuous pipes
                </Link>
                <Link
                  to="/"
                  onClick={() => navigationHandler()}
                >
                  production of Basalt continuous chopped strand
                </Link>
                <Link
                  to="/"
                  onClick={() => navigationHandler()}
                >
                  production of Basalt reinforcement bars
                </Link>
                <Link
                  to="/"
                  onClick={() => navigationHandler()}
                >
                  production of Basalt geogrids and facade mesh
                </Link>
              </div>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/partners">Partners</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>

          {/* mobile menu */}

          <div className="menuBtn" style={{display: "block !important"}}>
            {menu ? (
              <IoMdClose className="btn" onClick={() => setMenu(!menu)} />
            ) : (
             <LuMenu className="btn" onClick={() => setMenu(!menu)} />
            )}
          </div>

          {menu && <div className="menu-container">
          <div className="menu">
            <NavLink to="/" className="menu-item" onClick={() => closeMenu()}>
              Home
            </NavLink>
            <NavLink to="/projects" className="menu-item" onClick={() => closeMenu()}>
              Projects
            </NavLink>
            <NavLink to="/solutions" className="menu-item" onClick={() => closeMenu()}>
              Solutions
            </NavLink>
            <NavLink to="/news" className="menu-item" onClick={() => closeMenu()}>
              News
            </NavLink>
            <NavLink to="/partners" className="menu-item" onClick={() => closeMenu()}>
              Partners
            </NavLink>
            <NavLink to="/about-us" className="menu-item" onClick={() => closeMenu()}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="menu-item" onClick={() => closeMenu()}>
              Contact Us
            </NavLink>
          </div>
          </div>}
          {/* mobile menu end */}

        </div>
        <span className="header-background">
          {(link.pathname.includes("/projects") || link.pathname.includes("/solutions") || link.pathname.includes("/about-us")) || <img src={entrance} alt="" onClick={() => navigate("/")} />}
          {link.pathname.includes("/projects") && <video src={projBack} autoPlay loop muted preload="auto" playsInline></video>}
          {link.pathname.includes("/solutions") && <video src={solutionBack} autoPlay loop muted preload="auto" playsInline></video>}
          {link.pathname.includes("/about-us") && <video src={aboutBack} autoPlay loop muted preload="auto" playsInline style={{objectPosition: "center 40%"}}></video>}
          <div>
            <h1 style={{ textTransform: "capitalize" }}>
              {link?.pathname?.split("/")?.[1]}
            </h1>
            <p
              style={{
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                Home
              </NavLink>{" "}
              <span style={{ margin: "0 10px" }}>{">"}</span>{" "}
              {link?.pathname?.split("/")?.[1]}
            </p>
          </div>
        </span>
      </div>

      <div className="nav-container" id="header">
        <div>
          <img src={logo} alt="" onClick={() => navigate("/")} />
          <ul className="navigation">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
              <div className="navigation-drop">
                <Link to="/projects/rockfiber">Rokfiber</Link>
                <Link to="/projects/geobasalt-products">GEOBASALT PRODUCTS</Link>
                <Link to="/projects/ecobasalt-group">ECOBASALT GROUP</Link>
                <Link to="/projects/goldfiber-pro">GOLDFIBER PRO</Link>
                <Link to="/projects/basalt-wool">BASALT WOOL</Link>
                <Link to="/projects/basfiber-trade">BASFIBER TRADE</Link>
                <Link to="/projects/qoraqalpoq-basalt-wool">QORAQALPOQ BASALTWOOL</Link>
                <Link to="/projects/basalt-quarry">
                  BASALT QUARRY
                </Link>
              </div>
            </li>
            <li>
              <NavLink to="/solutions">Solutions</NavLink>
              <div className="navigation-drop">
                <Link to="/solutions/production-of-basalt-continuous-fiber">
                  production of Basalt continuous fiber
                </Link>
                <Link to="/">
                  production of Basalt rockwool
                </Link>
                <Link to="/">
                  production of BRP continuous pipes
                </Link>
                <Link to="/solutions/complex-for-the-production-of-basalt-continuous-chopped-strand">
                  production of Basalt continuous chopped strand
                </Link>
                <Link to="/solutions/complex-for-the-production-of-basalt-reinforcement-bars">
                  production of Basalt reinforcement bars
                </Link>
                <Link to="/solutions/complex-for-the-production-of-basalt-geogrids-and-facade-mesh">
                  production of Basalt geogrids and facade mesh
                </Link>
              </div>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/partners">Partners</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <img src={logo} alt="" onClick={() => navigate("/")} />
          
          <div className="menuBtn" style={{display: "block !important"}}>
          {menu ? (
            <IoMdClose className="btn" onClick={() => setMenu(!menu)} />
          ) : (
            <LuMenu className="btn" onClick={() => setMenu(!menu)} />
          )}
        </div>

          {/* mobile menu */}
          {menu && <div className="menu-container">
          <div className="menu">
            <NavLink to="/" className="menu-item" onClick={() => closeMenu()}>
              Home
            </NavLink>
            <NavLink to="/projects" className="menu-item" onClick={() => closeMenu()}>
              Projects
            </NavLink>
            <NavLink to="/solutions" className="menu-item" onClick={() => closeMenu()}>
              Solutions
            </NavLink>
            <NavLink to="/news" className="menu-item" onClick={() => closeMenu()}>
              News
            </NavLink>
            <NavLink to="/partners" className="menu-item" onClick={() => closeMenu()}>
              Partners
            </NavLink>
            <NavLink to="/about-us" className="menu-item" onClick={() => closeMenu()}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="menu-item" onClick={() => closeMenu()}>
              Contact Us
            </NavLink>
          </div>
        </div>}
          {/* mobile menu end */}
      </div>
      </div>
      <Outlet />
      <Footer />
     {link?.pathname?.includes("/contact-us") || <FixedBtn />}
    </>
  );
}
