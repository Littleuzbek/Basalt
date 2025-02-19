import { useNavigate } from "react-router";
import welcomePic from "../../assets/about-img.jpg";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div>
        <div className="welcome-words" data-aos="fade-right" data-aos-duration="2000">
          <h2>Kindness</h2>
          <h2>Melts Stone</h2>

          <p>
            The Group of companies BASALT UZBEKISTAN was founded in 2015 in the Jizzakh region, Forish district, Republic of Uzbekistan. Location - basalt quarry "Osmonsoy". 
          BASALT UZBEKISTAN presents a wide range of basalt materials for construction in Uzbekistan and other countries. It is one of the largest manufacturers of composite materials in CIS region.
          </p>

          <p>
            BASALT UZBEKISTAN carries out a full production cycle, starting with the extraction of basalt rocks in Forish district of Jizzakh region and ending with the supply of various finished products worldwide. Our enterprises use innovative cutting-edge technology developed within the company as well as brought from EU. 
          </p>
          <button onClick={()=>navigate("/about-us")}>Read More</button>
        </div>

        <img src={welcomePic} loading="lazy" alt="" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
    </div>
  );
}
