import "../components/Projects.css"
import { useNavigate } from "react-router"

export default function Projects() {
  const navigate = useNavigate()
  return (
    <div className="projects-page">
      <div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>ROCKFIBER</h4>
            <p>Production of basalt roving (basalt continuous fiber), basalt chopped strand and basalt reinforcement bars</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/rockfiber")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>GEOBASALT PRODUCTS</h4>
            <p>Production of basalt geogrid and facade mesh</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/geobasalt-products")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>ECOBASALT GROUP</h4>
            <p>Production of continuous BRP pipes</p>
            <div className="moreBtn">
              <button onClick={()=> navigate("/projects/ecobasalt-group")}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>GOLDFIBER PRO</h4>
            <p>Production of basalt continuous fiber (including basalt direct roving) and basalt chopped strand</p>
            <div className="moreBtn">
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>BASALT WOOL</h4>
            <p>Production of basalt rockwool and insulation materials</p>
            <div className="moreBtn">
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>BASFIBER TRADE</h4>
            <p>Production of basalt continuous fiber (including basalt direct roving) and basalt fabric</p>
            <div className="moreBtn">
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
          <div>
            <h4>QORAQALPOQ BASALTWOOL</h4>
            <p>Production of basalt rockwool and insulation materials</p>
            <div className="moreBtn">
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="project-cardd">
          <img src="https://steifmachine.ru/wp-content/uploads/2020/09/mashina-dlya-blokov-fbs-steif-mfs-2.jpg" loading="lazy" alt="" />
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
