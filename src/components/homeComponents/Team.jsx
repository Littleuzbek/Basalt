import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import teamBack_pic from "../../assets/team-background.jpg";

export default function Team() {
  return (
    <div className="team" style={{ backgroundImage: `url(${teamBack_pic})` }}>
      <h2>Our Best Team</h2>
      <span></span>
      <div>
        <div className="team-card">
          <div>
            <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/team3-1-300x300-1-265x300.jpg" loading="lazy" alt="" />
            <span className="link-tree">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaXTwitter />
                <IoLogoSkype />
            </span>
          </div>
          <div>
            <h4>SALLY STAR</h4>
            <p>Testing Manager</p>
          </div>
        </div>
        <div className="team-card">
          <div>
            <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/team6-300x300-1-265x300.jpg" loading="lazy" alt="" />
            <span className="link-tree">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaXTwitter />
                <IoLogoSkype />
            </span>
          </div>
          <div>
            <h4>JOHN LEADER</h4>
            <p>Leading Architect</p>
          </div>
        </div>
        <div className="team-card">
          <div>
            <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/team7-300x300-1-265x300.jpg" loading="lazy" alt="" />
            <span className="link-tree">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaXTwitter />
                <IoLogoSkype />
            </span>
          </div>
          <div>
            <h4>JOHAN MARTIN</h4>
            <p>Mechanical Engineering</p>
          </div>
        </div>
        <div className="team-card">
          <div>
            <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/team8-300x300-1-265x300.jpg" loading="lazy" alt="" />
            <span className="link-tree">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaXTwitter />
                <IoLogoSkype />
            </span>
          </div>
          <div>
            <h4>SHELLY DALTON</h4>
            <p>Testing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
