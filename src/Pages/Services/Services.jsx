import "./Services.css";
import { MdOutlineAppRegistration } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import client1 from "./assets/client1.jpg";
import client2 from "./assets/client2.jpeg";
import client3 from "./assets/client3.jpg";
import client4 from "./assets/client4.png";

const Services = ({ setIsDrawerOpen }) => {
  const services = [
    {
      title: "Asesoramiento estratégico",
      description:
        "Desarrollo de planes financieros personalizados y estrategias de crecimiento.",
      icon: <MdOutlineAppRegistration />,
    },
    {
      title: "Gestión de inversiones",
      description: "Administración y optimización de portafolios de inversión.",
      icon: <MdOutlineManageAccounts />,
    },
    {
      title: "Planificación financiera personal",
      description:
        "Asesoramiento en ahorro, inversión, jubilación y gestión patrimonial.",
      icon: <IoMdPaperPlane />,
    },
    {
      title: "Análisis de riesgos",
      description:
        "Evaluación y mitigación de riesgos financieros y operativos.",
      icon: <CgDanger />,
    },
  ];
  const features = [
    {
      title: "Asesor personalizado",
      icon: <IoPersonSharp />,
    },
    {
      title: "Amplio horario de atención",
      icon: <CiClock2 />,
    },
    {
      title: "Planes personalizados",
      icon: <MdOutlineDashboardCustomize />,
    },
  ];
  const testimonials = [
    {
      name: "Francisco Perez",
      location: "Queretaro, México",
      calification: "4.2",
      testimonial:
        "Estoy muy agradecido con CFI, gracias a su ayuda mi empresa pudo generar un 50% más de ganancias.",
      image: client1,
    },
    {
      name: "Luna Guzmán",
      location: "Tijuana, México",
      calification: "4.7",
      testimonial:
        "CFI me ayudo a crear mi portafolio de inversión, ahora gracias a ellos obtengo grandes rendimientos mensuales.",
      image: client3,
    },
    {
      name: "Enrique Tavarez",
      location: "Guanajuato, México",
      calification: "4.3",
      testimonial:
        "Hace unos meses no sabia ni en que AFORE estaba, ahora gracias a CFI tengo un plan de retiro bien planificado.",
      image: client2,
    },
    {
      name: "Maria Gonzalez",
      location: "Queretaro, México",
      calification: "4.5",
      testimonial:
        "Mi portafolio de inversión era un caos!, pero con la ayuda de CFI pude solucionarlo y evitar grandes perdidas.",
      image: client4,
    },
  ];
  return (
    <div className="services-page-container">
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">
            Nuestros servicios<span className="dot-1">.</span>
          </h1>
          <div className="ad-text-container">
            <p className="ad-text">¿Te interesa saber más?</p>
            <button
              className="contact-us-btn"
              onClick={() => setIsDrawerOpen(true)}
            >
              ¡Contactanos!
            </button>
          </div>
        </div>
        <div className="services-flex">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-title">
                <div className="service-icon">{service.icon}</div>
                <p className="service-name">{service.title}</p>
              </div>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="services-features-container">
        <h2 className="service-feature-title">
          Todos nuestros servicios incluyen<span className="dot-1">:</span>
        </h2>
        <div className="services-feature-flex">
          {features.map((feature, index) => (
            <div className="service-feature-card" key={index}>
              <div className="service-feature-title-box">
                <div className="service-feature-icon">{feature.icon}</div>
                <p className="service-feature-name">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials">
        <h2 className="testimonials-title">
          Lo que opinan nuestros clientes<span className="dot-1">:</span>
        </h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="test-card-header">
                <img
                  className="client-photo"
                  src={testimonial.image}
                  alt="client-photo"
                />
                <div className="test-client-info">
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-location">{testimonial.location}</p>
                </div>
              </div>
              <div className="calification">
                <GoStarFill className="calif-icon" />
                <p className="calification-points">
                  {testimonial.calification}
                </p>
              </div>
              <p className="test-text">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
