import './Hero.scss';
import { FaGithub, FaDocker } from 'react-icons/fa';
import BrainCCScene from '../BrainCCScene/BrainCCScene';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <BrainCCScene />
      </div>
      <div className="hero-vignette" />

      <div className="content">
        <div className="badges">
          <span>{t.hero.badgeOpenSource}</span>
          <span>{t.hero.badgeLocal}</span>
          <span>{t.hero.badgeMethods}</span>
        </div>

        <h1>{t.hero.title}</h1>
        <p className="tagline">{t.hero.tagline}</p>
        <p className="description">{t.hero.description}</p>

        <div className="buttons">
          <a href="#download" className="btn btn-filled">
            <FaDocker /> {t.hero.ctaPrimary}
          </a>
          <a
            href="https://github.com/MICLab-Unicamp/inccsight"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
