import welcomePic from "../../assets/welcome.jpg";

export default function Welcome() {
  return (
    <div className="welcome">
      <div>
        <div className="welcome-words" data-aos="fade-right" data-aos-duration="2000">
          <h2>Welcome to</h2>
          <h2>Industrial & Factory</h2>

          <p>
            When you give to Our Industry, know your donation is making a
            difference whether you are supporting our signature Programs
            professional.
          </p>

          <h3>History in Words</h3>
          <p>
            We partner with over 320 amazing seds projects worldwide.There
            anyone who loves or desires to obtain pain of it is because seds all
            occasionally circumstances.
          </p>
          <button>Read More</button>
        </div>

        <img src={welcomePic} loading="lazy" alt="" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
    </div>
  );
}
