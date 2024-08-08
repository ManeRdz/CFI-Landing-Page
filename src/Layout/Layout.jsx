import { NavLink } from "react-router-dom";
import "./Layout.css";
import logo from "./assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Layout = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hamburger, setHamburger] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      console.log("empty");
    } else {
      setToastOpen(true);
      setTimeout(() => {
        setToastOpen(false);
      }, 4000);
    }
  };
  const closeHMenu = () => {
    setHamburger(false);
  };
  return (
    <>
      <div
        className={
          hamburger ? "hamburger-menu hamburger-visible" : "hamburger-menu"
        }
      >
        <ul className="h-links-list">
          <span className="close-btn" onClick={() => setHamburger(false)}>
            <IoMdClose />
          </span>
          <li className="h-link-item">
            <NavLink className="h-link" to="quienes-somos" onClick={closeHMenu}>
              Quienes somos
            </NavLink>
          </li>
          <li className="h-link-item">
            <NavLink
              className="h-link"
              to="nuestra-historia"
              onClick={closeHMenu}
            >
              Nuestra historia
            </NavLink>
          </li>
          <li className="h-link-item">
            <NavLink
              className="h-link"
              to="cultura-organizacional"
              onClick={closeHMenu}
            >
              Cultura organizacional
            </NavLink>
          </li>
          <li className="h-link-item">
            <NavLink
              className="h-link"
              to="equipo-directivo"
              onClick={closeHMenu}
            >
              Equipo directivo
            </NavLink>
          </li>
          <li className="h-link-item">
            <NavLink className="h-link" to="servicios" onClick={closeHMenu}>
              Servicios
            </NavLink>
          </li>
          <li className="h-link-item">
            <NavLink
              onClick={() => setIsDrawerOpen(true)}
              className="h-link h-contact"
            >
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={
          toastOpen ? "send-message-toast toast-visible" : "send-message-toast"
        }
      >
        <FaCheckCircle className="check-icon" />
        <p className="toast-message">Se ha enviado tu mensaje!</p>
      </div>
      <div
        className={
          isDrawerOpen
            ? "contact-drawer contact-drawer-visible"
            : "contact-drawer"
        }
      >
        <span className="close-btn" onClick={() => setIsDrawerOpen(false)}>
          <IoMdClose />
        </span>
        <h3 className="contact-title">¡Contáctanos por tu medio preferido!</h3>
        <div className="social-media-container">
          <p className="social-media-title">Por nuestras redes sociales</p>
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="facebook"
            >
              <FaFacebook className="s-icon f" />
              <p className="media-text">Facebook</p>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="instagram"
            >
              <FaInstagram className="s-icon i" />
              <p className="media-text">Instagram</p>
            </a>
            <a
              href="https://web.whatsapp.com"
              target="_blank"
              className="whatsapp"
            >
              <FaWhatsapp className="s-icon w" />
              <p className="media-text">WhatsApp</p>
            </a>
          </div>
        </div>
        <div className="common-media-container">
          <p className="common-title">Por correo o telefono</p>
          <div className="common-container">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@cfi.com.mx&su=¡Quiero trabajar con CFI!"
              target="_blank"
              className="mail"
            >
              <SiGmail className="s-icon m" />
              <p className="mail-address">contacto@cfi.com.mx</p>
            </a>
            <a href="tel:+1234567890" target="_blank" className="phone">
              <FaPhone className="s-icon p" />
              <p className="phone-number">+52 472 100 0801</p>
            </a>
          </div>
        </div>
        <div className="address-container">
          <p className="address-title">También puedes visitarnos en:</p>
          <a
            href="https://www.google.com.mx/maps/place/Miguel+Hidalgo+42,+Centro,+36100+Silao+de+la+Victoria,+Gto./@20.9481327,-101.430521,17z/data=!3m1!4b1!4m6!3m5!1s0x842b9c7dbd5cf005:0xb311410c7be43ad3!8m2!3d20.9481328!4d-101.4256501!16s%2Fg%2F11c1kff3wl?entry=ttu"
            target="_noblank"
            className="address"
          >
            <SiGooglemaps className="s-icon a" />
            <p className="addres-text">
              Calle Hidalgo #42, Silao, Guanajuato, México, C.P. 36100
            </p>
          </a>
        </div>
        <form onSubmit={(e) => sendMessage(e)} className="contact-form">
          <p className="contact-form-title">O puedes enviarnos un mensaje:</p>
          <div className="form-container">
            <div className="input-label">
              <input
                type="text"
                className="name inputfield"
                id="name"
                autoComplete="off"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="name" className="label-text">
                Nombre
              </label>
            </div>
            <div className="input-label">
              <input
                type="text"
                className="email inputfield"
                id="email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="email" className="label-text">
                Correo electrónico
              </label>
            </div>
            <div className="input-label">
              <input
                type="text"
                className="text inputfield"
                id="text"
                autoComplete="off"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <label htmlFor="text" className="label-text">
                Escribe tu mensaje
              </label>
            </div>
            <div className="container-btn">
              <input type="submit" value="Enviar" className="send-button" />
            </div>
          </div>
        </form>
      </div>

      <header className="header">
        <NavLink to="/" className="logo-container home-link">
          <img className="logo-img" src={logo} alt="company-logo" />
          <div className="company-title">C F I</div>
        </NavLink>
        <NavLink
          className="nav-link hamburger"
          onClick={() => setHamburger(true)}
        >
          <RxHamburgerMenu className="h-icon" />
        </NavLink>
        <ul className="nav-links">
          <li className="nosotros-link">
            <NavLink className="nav-link">Nosotros</NavLink>
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
            <NavLink onClick={() => setIsDrawerOpen(true)} className="nav-link">
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Layout;
