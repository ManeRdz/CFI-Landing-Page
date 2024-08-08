import { useScroll, useTransform } from "framer-motion";
import "./Story.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import leaves from "./assets/leaves.jpg";
import leaves2 from "./assets/leaves2.webp";
import corn from "./assets/corn.jpg";
import berries from "./assets/berries.jpg";
import carrots from "./assets/carrots.jpeg";
import beggining from "./assets/beginning.jpg";
import expansion from "./assets/expansion.webp";
import consolidation from "./assets/cosolidation.jpeg";
import diver from "./assets/diversification.webp";
import innovation from "./assets/innovation.jpg";
import recon from "./assets/recon.jpeg";

const Story = () => {
  const [width, setWidth] = useState(0);
  const wrapper = useRef(null);
  useEffect(() => {
    setWidth(wrapper.current.scrollWidth - wrapper.current.offsetWidth);
  }, []);
  const cardItems = [
    {
      img: beggining,
      year: "2019",
      title: "El Inicio",
      contenido:
        "Sofía Hernández funda la consultora financiera integral, reuniendo a un equipo de expertos, incluyendo a Samantha Modesto, especialista en planificación estratégica y análisis de riesgos.",
    },
    {
      img: expansion,
      year: "2020",
      title: "Expansión",
      contenido:
        "Sarai Reyes, experta en asesoramiento fiscal y contabilidad, se une al equipo, permitiendo a la consultora atraer grandes corporaciones.",
    },
    {
      img: consolidation,
      year: "2021",
      title: "Consolidación",
      contenido:
        "Jennifer Torres, analista financiera, y Naím Sánchez, experto en mercados de capitales, se integran, fortaleciendo la capacidad de la firma para evaluar proyectos y estructurar operaciones financieras complejas.",
    },
    {
      img: diver,
      year: "2022",
      title: "Diversificación",
      contenido:
        "Lino Hernández, economista con experiencia en políticas públicas y desarrollo económico, se suma, permitiendo a la consultora trabajar en proyectos de impacto social y económico significativo.",
    },
    {
      img: innovation,
      year: "2023",
      title: "Innovación",
      contenido:
        "La firma invierte en tecnología avanzada y automatización, mejorando la eficiencia y precisión de sus servicios.",
    },
    {
      img: recon,
      year: "2024",
      title: "Reconocimiento",
      contenido:
        "La consultora es reconocida como líder en el sector, con un enfoque multidisciplinario y una sólida reputación, continuando su crecimiento y adaptación a las necesidades del mercado financiero.",
    },
  ];
  return (
    <div className="story-container">
      <div className="story-main-box">
        <div className="story-title-container">
          <h5 className="story-page-title">
            Nuestra historia<span className="story-dot">.</span>
          </h5>
          <p className="story-title-text">¡Creemos nuevas historias juntos!</p>
        </div>
        <motion.div
          className="scroller-container"
          whileTap={{ cursor: "grabbing" }}
          ref={wrapper}
        >
          <motion.div
            className="scroll-trigger"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {cardItems.map((card, index) => (
              <div className="story-item" key={index}>
                <img className="bg-story-img" src={card.img} alt="story-img" />
                <div className="story-overlay-bg"></div>
                <div className="story-info">
                  <h5 className="story-year">{card.year}</h5>
                  <p className="story-title">{card.title}</p>
                  <p className="story-description">{card.contenido}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
