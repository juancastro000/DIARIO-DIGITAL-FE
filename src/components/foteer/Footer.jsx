import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Juan Castro. Todos los derechos reservados.</p>
      <div className="footer__icons">
        <a href="https://github.com/juancastro000" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer__icon" />
        </a>
        <a href="www.linkedin.com/in/juan-esteban-castro" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;