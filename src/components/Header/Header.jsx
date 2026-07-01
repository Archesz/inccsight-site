import { useState } from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#pipeline', label: t.nav.pipeline },
    { href: '#features', label: t.nav.features },
    { href: '#papers', label: t.nav.papers },
    { href: '#download', label: t.nav.download },
  ];

  return (
    <header className="header">
      <div className="container">
        <a href="#top" className="logo">
          <img src={logo} alt="InCCsight" />
          <span>InCCsight</span>
        </a>

        <nav className={open ? 'open' : ''}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang-switch" onClick={toggleLang} aria-label="Toggle language">
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
            <span className="divider">/</span>
            <span className={lang === 'pt' ? 'active' : ''}>PT</span>
          </button>
          <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
