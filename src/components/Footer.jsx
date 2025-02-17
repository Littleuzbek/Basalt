import "./Footer.css";
import Basaltlogo from "../assets/logo-footer.png";
import Phoneicon from "../assets/../assets/PhoneIcon.png";
import Directicon from "../assets/direct_icon.png";
import Skype from "../assets/skype.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";


export default function Footer() {
  return (
    <div className="Footer_main">
        <div className="Footer">
            <div className="Footer_logo-widget">
               <img src={Basaltlogo} className="Footer_logo-icon" />
               <p>Over 24 years experience and knowledge international standards, technologicaly changes our systems.</p>
               <div className="Footer_phone-number--div"><img src={Phoneicon} className="Phone_icon-footer"/><p>+998 (93) 183-01-10</p></div>
               <span className="Footer_space-line--long" />
               <a href="/" className="Footer_mail">info@basalt-engineering.com</a>
            </div>

            <div className="Footer_service">
               <h2>Solutions</h2>
               <span className="Footer_space-line--short" />
               <div>
                <div className="Footer_service-div"><img src={Directicon} className="Direction_icon"/> <p>Basalt continuous fiber</p></div>
                <div className="Footer_service-div"><img src={Directicon} className="Direction_icon"/> <p>Basalt rockwool</p></div>
                <div className="Footer_service-div"><img src={Directicon} className="Direction_icon"/> <p>BRP continuous pipe</p></div>
                <div className="Footer_service-div"><img src={Directicon} className="Direction_icon"/> <p>Basalt continuous chopped strand</p></div>
                <div className="Footer_service-div"><img src={Directicon} className="Direction_icon"/> <p>Basalt reinforcement bars</p></div>
                <div className="Footer_service-div"><img src={Directicon} className="Direction_icon"/> <p>Basalt geogrids and facade mesh</p></div>
               </div> 
            </div>

            <div className="Footer_latest-posts">
               <h2>Latest Posts</h2>
               
               <span className="Footer_space-line--short" />

               <div className="Footer_latest-imagesdiv">
                <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/2-2-850x400-1-570x270.jpg" className="FooterLatest_images"/>
                <div>
                    <p className="FooterLatest_text">What Planning Process Needs?</p> <img src=""/><p className="FooterLatest_data">11 oct, 2025</p>
                    
                </div>
               </div>
                
               <span />

               <div className="Footer_latest-imagesdiv">
                <img src="https://sanat.expert-themes.com/wp-content/uploads/2020/10/1-2-850x400-1-231x235.jpg" className="FooterLatest_images"/>  
                <div>
                    <p className="FooterLatest_text">What Planning Process Needs?</p>
                    <img src=""/><p className="FooterLatest_data">11 oct, 2025</p>
                </div>
               </div>

            </div>

            <div className="Footer_subscribe">
               <h2>Subscribe Now</h2>
               <span className="Footer_space-line--short"/>

               <p>Sign up today for tips and latest news and exclusive special offers.</p>

               <h2 className="Footer_subscribe-follow">Follow Us:</h2>
               
                <div className="FollowUs_div">
                    <img src={Facebook} className="Social_media"/>
                    <img src={Twitter} className="Social_media"/> 
                    <img src={Skype} className="Social_media"/> 
                    <img src={Linkedin} className="Social_media"/>
                </div>
            </div>
        </div>
    </div>
  )
};
