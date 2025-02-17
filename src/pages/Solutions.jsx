import { useNavigate } from "react-router"
import "../components/Projects.css"

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
    <div>
      <div className="project-cardd solution-card">
        <img src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg" loading="lazy" alt="" />
        <div>
          <h4>Complex for the production of Basalt continuous fiber</h4>
          {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
          <div className="moreBtn">
            <button onClick={()=> navigate("/solutions/complex-for-the-production-of-basalt-continuous-fiber")}>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="project-cardd solution-card">
        <img src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg" loading="lazy" alt="" />
        <div>
          <h4>Complex for the production of Basalt rockwool</h4>
          {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
          <div className="moreBtn">
            <button>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="project-cardd solution-card">
        <img src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg" loading="lazy" alt="" />
        <div>
          <h4>Complex for the production of BRP continuous pipes</h4>
          {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
          <div className="moreBtn">
            <button onClick={()=> navigate("/solutions/complex-for-the-production-of-brp-continuous-pipes")}>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="project-cardd solution-card">
        <img src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg" loading="lazy" alt="" />
        <div>
          <h4>Complex for the production of Basalt continuous chopped strand</h4>
          {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
          <div className="moreBtn">
            <button onClick={()=> navigate("/solutions/complex-for-the-production-of-basalt-continuous-chopped-strand")}>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="project-cardd solution-card">
        <img src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg" loading="lazy" alt="" />
        <div>
          <h4>Complex for the production of Basalt reinforcement bars</h4>
          {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
          <div className="moreBtn">
            <button onClick={()=> navigate("/solutions/complex-for-the-production-of-basalt-reinforcement-bars")}>Подробнее</button>
          </div>
        </div>
      </div>
      <div className="project-cardd solution-card">
        <img src="https://steifmachine.ru/wp-content/uploads/2020/09/formovochnaya-mashina-zhbi-steif-lfb-mf-6.jpg" loading="lazy" alt="" />
        <div>
          <h4>Complex for the production of Basalt geogrids and facade mesh</h4>
          {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
          <div className="moreBtn">
            <button onClick={()=> navigate("/solutions/complex-for-the-production-of-basalt-geogrids-and-facade-mesh")}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
