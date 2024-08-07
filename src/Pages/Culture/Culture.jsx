import "./Culture.css";
const Culture = () => {
  const valores = [
    {
      title: "Integridad",
      content:
        "Actuamos con honestidad, transparencia y ética en todo lo que hacemos.",
    },
    {
      title: "Profesionalismo",
      content:
        "Nos comprometemos a ofrecer servicios de la más alta calidad, respaldados por nuestros conocimientos y experiencia.",
    },
    {
      title: "Innovación",
      content:
        "Adoptamos enfoques creativos para ofrecer soluciones financieras innovadoras.",
    },
    {
      title: "Compromiso",
      content:
        "Estamos comprometidos con el éxito a largo plazo de nuestros clientes.",
    },
  ];
  return (
    <div className="culture-container">
      <h1 className="culture-title">
        Nuestra cultura organizacional<span className="dot-1">.</span>
      </h1>
      <div className="culture-cards-container">
        <div className="card mision-card">
          <div className="card-overlay"></div>
          <h5 className="card-title">Misión</h5>
          <p className="card-text">
            Brindar soluciones financieras integrales y personalizadas que
            contribuyan al éxito económico de nuestros clientes, basándonos en
            principios de transparencia, profesionalismo y ética.
          </p>
        </div>
        <div className="card vision-card">
          <div className="card-overlay"></div>

          <h5 className="card-title">Visión</h5>
          <p className="card-text">
            Ser reconocidos como la consultoría financiera de referencia en el
            mercado, destacándonos por la excelencia de nuestros servicios, la
            innovación y nuestro impacto positivo en la comunidad empresarial.
          </p>
        </div>
        <div className="card valores-card">
          <div className="card-overlay"></div>

          <h5 className="card-title">Valores</h5>
          <div className="card-text valores-list">
            {valores.map((valor, index) => (
              <div className="card-text-item" key={index}>
                <p className="card-text-title">{valor.title}</p>
                <p className="card-text-content">{valor.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
