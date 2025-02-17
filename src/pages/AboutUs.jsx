import "../components/AboutUs.css";
import aboutIMG from "../assets/about-img.jpg";
import clusterIMG from "../assets/cluster.jpg"
import areaIMG from "../assets/area.jpg"

export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="about" data-aos="fade-right" data-aos-duration="2000">
        <span>
          <div>
            <h1>About Us</h1>
          </div>
        </span>
        <h3>Kindness melts stone</h3>
        <p>
          The Group of companies BASALT UZBEKISTAN was founded in 2015 in the Jizzakh region, Forish district, Republic of Uzbekistan. Location - basalt quarry "Osmonsoy". 
          BASALT UZBEKISTAN presents a wide range of basalt materials for construction in Uzbekistan and other countries. It is one of the largest manufacturers of composite materials in CIS region. BASALT UZBEKISTAN carries out a full production cycle, starting with the extraction of basalt rocks in Forish district of Jizzakh region and ending with the supply of various finished products worldwide. Our enterprises use innovative cutting-edge technology developed within the company as well as brought from EU. 
        </p>
        <h3>We offer various solutions in Basalt field</h3>
        <p>
          Due to the fact that the Group of companies BASALT UZBEKISTAN has been working independently for many years, the group overcame many challenges and gained down to earth knowledge in production of basalt continuous fiber and in composite materials field. For this intend, a company BASALT ENGINEERING CORP was formed within the group of companies BASALT UZBEKISTAN. Specialists of our company are experts in what they do and provide technical solutions in any severe situations that might occur in such projects. We strive to deliver the best of what we achieved to our clients who are interested in starting basalt production. We provide know-how so that our clients save their time and financial resources by not falling into the same trap and repeating our mistakes. We are young but ambitious and self-built company. We are proud of our experts, the field of activity and products we offer. We truly believe that innovational techniques used by our company will bring enormous changes in the fields of construction, automation, marine, airspace and other fields worldwide.  
          </p>
      </div>

      <div className="about-img" data-aos="fade-left" data-aos-duration="2000">
        <img src={aboutIMG} alt="" />
      </div>

       <div className="area">
          <img src={clusterIMG} loading="lazy" alt="" />
          <img src={areaIMG} loading="lazy" alt="" />
       </div>
    </div>
  );
}
