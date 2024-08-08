import "./Inversionists.css";
import profile from "./assets/profile.png";
import sarai from "./assets/sarai.jpeg";
import sofi from "./assets/sofi.jpeg";
import jennifer from "./assets/jennifer.jpeg";
import samantha from "./assets/samantha.jpeg";
import nose from "./assets/nose.jpeg";
import nose2 from "./assets/nose2.jpeg";
const Inversionists = () => {
  const founders = [
    {
      id: 1,
      name: "Sarai Reyes",
      description:
        "Especialista en asesoramiento fiscal y contabilidad, con una destacada trayectoria en empresas multinacionales.",
      image: sarai,
    },
    {
      id: 2,
      name: "Sofía Hernández",
      description:
        "Experta en gestión de inversiones con más de 2 años experiencia en el sector financiero.",
      image: sofi,
    },
    {
      id: 3,
      name: "Jennifer Torres",
      description:
        "Analista financiera con experiencia en la evaluación de proyectos y gestión de carteras.",
      image: jennifer,
    },
    {
      id: 4,
      name: "Samantha Modesto",
      description:
        "Consultora financiera con un enfoque en planificación estratégica y análisis de riesgos.",
      image: samantha,
    },

    {
      id: 5,
      name: "Naím Sánchez",
      description:
        "Asesor en finanzas corporativas y experto en mercados de capitales.",
      image: nose2,
    },
    {
      id: 6,
      name: "Lino Hernández",
      description:
        "Economista con una sólida formación en políticas públicas desarrollo económico.",
      image: nose,
    },
  ];
  return (
    <div className="board-director-container">
      <div className="board-directors-box">
        <div className="board-directos-title-box">
          <h1 className="board-directors-title">
            Equipo Directivo<span className="dot-1">.</span>
          </h1>
          <div className="proverb-container">
            <p className="proverb-text">
              "Llegar juntos es el principio. Mantenerse juntos, es el progreso.
              Trabajar juntos es el éxito."
            </p>
            <p className="proverb-author">Samantha Modesto.</p>
          </div>
        </div>
        <div className="founders-container">
          {founders.map((founder, index) => (
            <div className={"founder-card founder-" + founder.id} key={index}>
              <img
                className="profile-photo"
                src={founder.image}
                alt="profile-photo"
              />
              <p className="founder-name">{founder.name}</p>
              <p className="founder-desc">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inversionists;
