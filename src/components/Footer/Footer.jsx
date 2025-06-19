import './Footer.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} InCCsight. Todos os direitos reservados.</p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/usuario/inccsight" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/usuario" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
