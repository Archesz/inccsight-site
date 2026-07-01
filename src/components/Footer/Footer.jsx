import './Footer.scss';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} InCCsight. {t.footer.rights}</p>
          <p className="built-by">{t.footer.builtBy}</p>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/MICLab-Unicamp/inccsight"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
