import { NavLink } from "react-router-dom";
import "./Layout.css";
import logo from "./assets/logo.png";
const Layout = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo-container home-link">
        <img className="logo-img" src={logo} alt="company-logo" />
        <div className="company-title">C F I</div>
      </NavLink>
      <ul className="nav-links">
        <li className="nosotros-link">
          <NavLink to="nosotros" className="nav-link">
            Nosotros
          </NavLink>
          <ul className="nosotros-submenu">
            <li className="nosotros-submenu-item">
              <NavLink className="submenu-link" to="quienes-somos">
                Quienes somos
              </NavLink>
            </li>
            <li className="nosotros-submenu-item">
              <NavLink className="submenu-link" to="nuestra-historia">
                Nuestra historia
              </NavLink>
            </li>
            <li className="nosotros-submenu-item">
              <NavLink className="submenu-link" to="cultura-organizacional">
                Cultura organizacional
              </NavLink>
            </li>
            <li className="nosotros-submenu-item">
              <NavLink className="submenu-link" to="equipo-directivo">
                Equipo directivo
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="servicios-link">
          <NavLink className="nav-link" to="servicios">
            Servicios
          </NavLink>
        </li>
        <li className="contact-link">
          <NavLink className="nav-link" to="contactanos">
            Contactanos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Layout;
