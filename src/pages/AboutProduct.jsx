import "../components/AboutProduct.css"
import Presentation from "../components/Presentation"
import { Link, data, useLoaderData } from "react-router"
import { Fragment, useState } from "react"

export default function AboutProduct() {
  const [type, setType] = useState(1);
  const product = useLoaderData();

  return (
    <div className="about-product-page">
      <div>
        <Presentation images={product?.images} />
        <div className="general-info">
          <h1>{product?.general?.title}</h1>
          {/* for paragraphs */}
          {product?.general?.p &&
            product?.general?.p?.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          <div className="consulting">
            <h2>NEED A CONSULTATION</h2>
            <Link to="/contact-us">CONTACT US</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="catalog">
          <button
            className={type === 1 ? "active" : ""}
            onClick={() => setType(1)}
          >
            Advantages
          </button>
          <button
            className={type === 2 ? "active" : ""}
            onClick={() => setType(2)}
          >
            Video
          </button>
        </div>

        {type === 1 && (
          <div className="full-info">
            <h1>{product?.adv?.list?.title}</h1>

            <div className="list" key={product?.adv?.list?.title}>
              <p>{product?.adv?.list?.p}</p>
              {product?.adv?.list?.listTitle?.map((title, index) => (
                <Fragment key={title + index}>
                  <h3>{title}</h3>
                  <ul>
                    {product?.adv?.list?.listItem?.[index]?.map((item) => (
                      <li key={item + index}>{item}</li>
                    ))}
                  </ul>
                </Fragment>
              ))}

              {product?.adv?.list?.listTitle === null && (
                <>
                  <p>{product?.adv?.list?.p}</p>
                  <ul>
                    {product?.adv?.list?.listItem?.map((item, index) => (
                      <li key={item + index}>{item}</li>
                      ))}
                  </ul>
                </>
              )}
            </div>

            <h1>{product?.adv?.list?.title2}</h1>

            <div className="list" key={product?.adv?.list?.title2}>
              {product?.adv?.list?.listTitle2?.map((title, index) => (
                <Fragment key={title + index}>
                  <h3 key={title + index}>{title}</h3>
                  <ul>
                    {product?.adv?.list?.listItem2?.[index]?.map((item) => (
                      <li key={item + index}>{item}</li>
                    ))}
                  </ul>
                </Fragment>
              ))}

              {product?.adv?.list?.listTitle2 === null && (
                <>
                  <p>{product?.adv?.list?.p2}</p>
                  <ul>
                    {product?.adv?.list?.listItem2?.map((item, index) => (
                      <li key={item + index}>{item}</li>
                      ))}
                  </ul>
                </>
              )}
            </div>

          </div>
        )}

        {type === 2 && (
          <div className="full-info">
            {
              product?.videos?.map((vid, index) => (
                <video controls key={"vid" + index}>
                  <source src={vid} type="video/mp4"/>
                </video>
              ))
            }
            <h3>Video2</h3>
            <h3>Video3</h3>
            <h3>Video4</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export const productLoader = async ({ params }) => {
  const { id } = params;

  const routes = {
    "geobasalt-products": () => import("../assets/product-data").then(m => m.basalt_geobasalt),
    "rockfiber": () => import("../assets/product-data").then(m => m.basalt_fiber),
    "basalt-quarry": () => import("../assets/product-data").then(m => m.basalt_quarry),
    "ecobasalt-group": () => import("../assets/product-data").then(m => m.basalt_ecobasalt),
    "goldfiber-pro": () => import("../assets/product-data").then(m => m.basalt_goldfiber),
    "basalt-wool": () => import("../assets/product-data").then(m => m.basalt_wool),
    "basfiber-trade": () => import("../assets/product-data").then(m => m.basalt_trade),
    "qoraqalpoq-basalt-wool": () => import("../assets/product-data").then(m => m.basalt_qqwool),
    "production-of-basalt-continuous-fiber": () => import("../assets/product-data").then(m => m.solFiber)
  };

  if (routes[id]) {
    return routes[id]();
  } else {
    throw data("Page not Found", { status: 404 });
  }
};
