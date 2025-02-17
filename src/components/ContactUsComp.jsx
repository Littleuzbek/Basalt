import "../components/ContactUs.css"
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";

export default function ContactUsComp() {
  return (
    <>
    <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "600" }}>
        Contact Us
      </h2>
      <span className="seperator"></span>
      <div className="contact-page">
        <div className="contact-info">
          <h5>Call Us</h5>
          <h3>or fill the form</h3>
          <span className="contact-category">
            <div className="contactIcon">
              <IoCall />
            </div>
            <div className="contactText">
              <p>Don't hesitate to contact us!</p>
              <p>+998 (93) 183-01-10</p>
            </div>
          </span>
          <span className="contact-category">
            <div className="contactIcon">
              <IoMailSharp />
            </div>
            <div className="contactText">
              <p>Email Address:</p>
              <a href="#">info@basalt-engineering.com</a>
            </div>
          </span>
          <span className="contact-category">
            <div className="contactIcon">
              <FaLocationDot />
            </div>
            <div className="contactText">
              <p>Company Headquarters:</p>
              <p>Bunyodkor Avenue, 27 </p>
              <p>Chilanzar district</p>
              <p>Tashkent, 100185</p>
            </div>
          </span>
          <span className="contact-category">
            <div className="contactIcon social">
              <FaFacebookF />
            </div>
            <div className="contactIcon social">
              <FaXTwitter />
            </div>
            <div className="contactIcon social">
              <FaInstagram />
            </div>
            <div className="contactIcon social">
              <FaSkype />
            </div>
          </span>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone" />
          <textarea
            type="text"
            rows="auto"
            cols="auto"
            placeholder="How can we help?"
          />
          <input
            type="submit"
            onClick={(e) => e.preventDefault()}
            value="Send Message"
          />
        </form>
      </div>

      <div className="home-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374.9148917183284!2d69.19659617362251!3d41.25838683608081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a03c31e5211%3A0xb776b77badc7f650!2zNzU1Vys5SjksINCi0L5zaGtlbnQsIFRvc2hrZW50LCBPyrt6YmVraXN0b24!5e0!3m2!1suz!2s!4v1739026493000!5m2!1suz!2s" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
