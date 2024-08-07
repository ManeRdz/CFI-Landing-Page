import { useScroll, useTransform } from "framer-motion";
import "./Story.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import leaves from "./assets/leaves.jpg";
import leaves2 from "./assets/leaves2.webp";
import corn from "./assets/corn.jpg";
import berries from "./assets/berries.jpg";
import carrots from "./assets/carrots.jpeg";

const Story = () => {
  const [width, setWidth] = useState(0);
  const wrapper = useRef(null);
  useEffect(() => {
    setWidth(wrapper.current.scrollWidth - wrapper.current.offsetWidth);
  }, []);
  const cardItems = [
    {
      img: leaves,
      year: "2019",
      title: "Algun titulo generico",
      contenido:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque deserunt vitae obcaecati laudantium impedit et dolor, quasi, minus suscipit eligendi quae debitis libero eaque placeat sit voluptate molestias ipsum.",
    },
    {
      img: berries,
      year: "2020",
      title: "Algun titulo generico",
      contenido:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque deserunt vitae obcaecati laudantium impedit et dolor, quasi, minus suscipit eligendi quae debitis libero eaque placeat sit voluptate molestias ipsum.",
    },
    {
      img: corn,
      year: "2021",
      title: "Algun titulo generico",
      contenido:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque deserunt vitae obcaecati laudantium impedit et dolor, quasi, minus suscipit eligendi quae debitis libero eaque placeat sit voluptate molestias ipsum.",
    },
    {
      img: carrots,
      year: "2022",
      title: "Algun titulo generico",
      contenido:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque deserunt vitae obcaecati laudantium impedit et dolor, quasi, minus suscipit eligendi quae debitis libero eaque placeat sit voluptate molestias ipsum.",
    },
    {
      img: leaves2,
      year: "2023",
      title: "Algun titulo generico",
      contenido:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque deserunt vitae obcaecati laudantium impedit et dolor, quasi, minus suscipit eligendi quae debitis libero eaque placeat sit voluptate molestias ipsum.",
    },
    {
      img: leaves2,
      year: "2024",
      title: "Algun titulo generico",
      contenido:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque deserunt vitae obcaecati laudantium impedit et dolor, quasi, minus suscipit eligendi quae debitis libero eaque placeat sit voluptate molestias ipsum.",
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
