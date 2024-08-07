import "./AboutUs.css";
import farmer from "./assets/farmer.png";
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="bg-overlay">
        <div className="about-us-main-text">
          <h5 className="company-name">¿Quienes somos?</h5>
          <div className="phrase-container">
            <p className="phrase">
              "No encuentres fallos, encuentra un remedio."
            </p>
            <p className="author">Henry Ford.</p>
          </div>
        </div>
      </div>
      <div className="about-us-info">
        <div className="about-us-main-container">
          <div className="we-ybc">
            <h5 className="ybc">
              Somos tu mejor opcíon<span className="dot-1">.</span>
            </h5>
          </div>
          <div className="about-description-box">
            <p className="about-description">
              Consultoría Financiera Integral (CFI), es una firma dedicada a
              proporcionar soluciones financieras integrales y personalizadas a
              empresas y particulares. Nos especializamos en la planificación
              financiera, gestión de inversiones, asesoramiento en fusiones y
              adquisiciones, así como en la optimización de recursos financieros
              para maximizar la rentabilidad y minimizar riesgos.
            </p>
            <p className="company-member">Consultoría Financiera Integral.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
