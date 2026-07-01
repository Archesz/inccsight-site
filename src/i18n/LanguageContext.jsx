import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext(null);

function detectDefaultLanguage() {
  const stored = window.localStorage.getItem('inccsight-lang');
  if (stored === 'en' || stored === 'pt') return stored;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectDefaultLanguage);

  useEffect(() => {
    window.localStorage.setItem('inccsight-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((current) => (current === 'en' ? 'pt' : 'en')),
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
