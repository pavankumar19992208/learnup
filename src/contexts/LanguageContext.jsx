import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('learnup_lang') || 'hi';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'en' ? 'hi' : 'en';
      localStorage.setItem('learnup_lang', next);
      return next;
    });
  };

  const t = useCallback((key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  }, [language]);

  // For bilingual content objects like { en: "...", hi: "..." }
  const tContent = useCallback((obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['en'] || '';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tContent }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
