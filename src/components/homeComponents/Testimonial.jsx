import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import EndProductSlider from "../sliders/EndProductSlider";

export default function Testimonial() {
  const [offer, setOffer] = useState(1);

  const offerHandler = (order) => {
    if(offer === order){
      setOffer(0)
    }else{
      setOffer(order)
    }
  }

  return (
    <div className="testimonial-contatiner">
      <div>
      <div className="testimonial" data-aos="fade-right" data-aos-duration="2000">
          <h2> END PRODUCTS</h2>
          <span></span>
          <EndProductSlider />
        </div>

        <div className="FAQ" data-aos="fade-left" data-aos-duration="2000">
          <h2>FAQ's</h2>
          <span></span>
          <div>
            <div className="offer" onClick={() => offerHandler(1)}>
              <div>
                {offer === 1 ? <FaMinus style={{backgroundColor: "var(--orange)", color: "var(--grayish)"}}/> : <FaPlus />}
                <div style={offer === 1 ? {backgroundColor: "var(--grayish)", color: "white"} : {}}>What is the minimum plant capacity that can be built and make a profit?</div>
              </div>
              {offer === 1 && <p >
                - It depends on where the end product is used. If it is for construction materials, we recommend to our clients to start with at least 5 000 TPA plant.
              </p>}
            </div>
            <div className="offer" onClick={() => offerHandler(2)}>
              <div>
                {offer === 2 ? <FaMinus style={{backgroundColor: "var(--orange)", color: "var(--grayish)"}}/> : <FaPlus />}
                <div style={offer === 2 ? {backgroundColor: "var(--grayish)", color: "white"} : {}}>What is the difference between assembled and direct roving?</div>
              </div>
              {offer === 2 &&<p >
                - Assembled roving is formed by joining several threads into one on cross winding machines and used mostly in pultrusion for manufacturing construction materials. 
                - Direct roving is formed on winders right after coming out of the furnace. It is also used in production of construction materials, but also widely implemented in the fields where more advanced materials produced.      
              </p>}
            </div>
            <div className="offer" onClick={() => offerHandler(3)}>
              <div>
                {offer === 3 ? <FaMinus style={{backgroundColor: "var(--orange)", color: "var(--grayish)"}}/> : <FaPlus />}
                <div style={offer === 3 ? {backgroundColor: "var(--grayish)", color: "white"} : {}}>Why use basalt fiber instead of fiberglass?  </div>
              </div>
              {offer === 3 && <p >
                - It is one of the frequently asked questions. Basalt and glass fibers both have unique properties. If you compare basalt fiber to regular fiberglass (as now there are different types of glass fiber on the market), basalt fiber has a very high resistance to chemically aggressive environments (5 times higher) and therefore is not damaged in contact with salt solutions, withstanding almost any severe conditions without losing its performance characteristics. One of the bright examples is a usage of basalt geogrids in road constructions.
              </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
