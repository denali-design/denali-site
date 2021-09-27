import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/jo.json";
import { useEffect } from "react";

export default function Jo() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="jo">
      <h1 className="header is-white m-b-100">
        Jazmin, Wishing you all the best...
      </h1>
      <img className="kudos m-b-76" src="/images/kudos@2x.png"></img>
      {data.map((item, index) => (
        <div
          data-aos={index % 2 == 0 ? "slide-right" : "slide-left"}
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-delay="50"
          data-aos-duration="1000"
          key={index}
          className="message-container p-x-60 p-y-60 m-b-60"
          style={{ backgroundColor: item.bgColor }}
        >
          <p className="is-white m-b-20">{item.message}</p>
          <p className="is-white author  ">{item.author} </p>
        </div>
      ))}
      <h1 className="header header-down is-white m-b-100">...on your new path forward!</h1>
    </section>
  );
}
