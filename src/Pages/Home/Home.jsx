import { useEffect, useLayoutEffect, useState } from "react";
import "./Home.css";
import { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.webp";
import { NavLink } from "react-router-dom";

const Home = () => {
  const images = [image1, image2, image3, image4];
  const wallpapers = [
    {
      title: "Asesoramiento estratégico",
      text: "Lleva tu empresa al siguiente nivel con nuestro asesoramiento estrategico, obten y aplica las mejores estrategias del mercado!",
      image: image1,
    },
    {
      title: "Gestión de inversiones",
      text: "¿Bolsa de valores? ¿Fibras? Olvidate de esos terminos complejos!, tener un portafolio de inversión ahora es muy sencillo gracias a C F I",
      image: image2,
    },
    {
      title: "Planificación financiera personal",
      text: "¿Te preocupa el futuro?, suelta esa carga y déjanos armarte un plan de retiro totalmente personalizado!",
      image: image3,
    },
    {
      title: "Análisis de riesgos",
      text: "Todos tenemos miedo a perder nuestra inversión, deja que C F I se encargue de encontrar y mitigar los riesgos que amenacen tu patrimonio!",
      image: image4,
    },
  ];
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  let timeOut = null;
  useEffect(() => {
    timeOut =
      playing &&
      setTimeout(() => {
        onNext();
      }, 3000);
  });
  const onNext = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const onPrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <div className="home-container">
      <div className="image-slider">
        <ul className="image-list">
          {wallpapers.map((wall, index) => (
            <li
              className={
                index === current
                  ? "image-item image-item-active"
                  : "image-item"
              }
            >
              <div className={"image-item-overlay"}>
                <div className={"text-overlay"}>
                  <h5 className="title">{wall.title}</h5>
                  <p className="p-text">{wall.text}</p>
                  <NavLink to="servicios" className="services-link">
                    Saber más
                  </NavLink>
                </div>
              </div>
              <img src={wall.image} alt="img1" />
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation-btns">
        <button
          onClick={() => {
            setPlaying(false);
            onPrev();
          }}
          className="prev"
        >
          <MdNavigateBefore />
        </button>
        <button
          onClick={() => {
            setPlaying(false);
            onNext();
          }}
          className="next"
        >
          <MdNavigateNext />
        </button>
      </div>
      <ul className="navigation-dots">
        {images.map((_, index) => (
          <li
            key={index}
            onClick={() => setCurrent(index)}
            className={index === current ? "dot active" : "dot"}
          ></li>
        ))}
        <button
          className="pause-btn"
          onClick={() => {
            if (playing) {
              setPlaying(false);
              clearTimeout(timeOut);
            } else {
              setPlaying(true);
            }
          }}
        >
          {playing ? <IoIosPause /> : <IoIosPlay />}
        </button>
      </ul>
    </div>
  );
};
export default Home;
