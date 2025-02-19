import "../components/Projects.css"
import { useNavigate } from "react-router"
import fiber from "../assets/basaltRockfiber/fiber1.jpg"
import geobasalt from "../assets/basaltGeogrid/geogrid2.jpg"
import ecobasalt from "../assets/basaltPipe/pipe4.jpg"
import goldfiber from "../assets/basaltGoldfiber/GOLDFIBER-37.jpg"
import wool from "../assets/basaltWool/wool3.jpg"
import trade from "../assets/basaltBasfiber/basfiber32.jpg"
import qqwool from "../assets/basaltQWool/qqWool1.jpg"
import quarry from "../assets/basaltQuarry/quarry5.jpg"

export default function Projects() {
  const navigate = useNavigate()
  return (
    <div className="projects-page">
      <div>
        <div className="project-cardd">
          <img src={fiber} loading="lazy" alt="" />
          <div>
            <h4>ROCKFIBER</h4>
            <p>Production of basalt roving (basalt continuous fiber), basalt chopped strand and basalt reinforcement bars</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/rockfiber")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={geobasalt} loading="lazy" alt="" />
          <div>
            <h4>GEOBASALT PRODUCTS</h4>
            <p>Production of basalt geogrid and facade mesh</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/geobasalt-products")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={ecobasalt} loading="lazy" alt="" />
          <div>
            <h4>ECOBASALT GROUP</h4>
            <p>Production of continuous BRP pipes</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/ecobasalt-group")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={goldfiber} loading="lazy" alt="" />
          <div>
            <h4>GOLDFIBER PRO</h4>
            <p>Production of basalt continuous fiber (including basalt direct roving) and basalt chopped strand</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/goldfiber-pro")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={wool} loading="lazy" alt="" />
          <div>
            <h4>BASALT WOOL</h4>
            <p>Production of basalt rockwool and insulation materials</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/basalt-wool")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={trade} loading="lazy" alt="" />
          <div>
            <h4>BASFIBER TRADE</h4>
            <p>Production of basalt continuous fiber (including basalt direct roving) and basalt fabric</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/basfiber-trade")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={qqwool} loading="lazy" alt="" />
          <div>
            <h4>QORAQALPOQ BASALTWOOL</h4>
            <p>Production of basalt rockwool and insulation materials</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/qoraqalpoq-basalt-wool")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src={quarry} loading="lazy" alt="" />
          <div>
            <h4>BASALT QUARRY</h4>
            <p>Production of basalt quarry</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/basalt-quarry")}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
