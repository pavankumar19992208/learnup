import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = [
  { id: 'light',    label: '☀️ Light',    emoji: '☀️' },
  { id: 'dark',     label: '🌙 Dark',     emoji: '🌙' },
  { id: 'glass',    label: '💎 Glass',    emoji: '💎' },
  { id: 'notebook', label: '📓 Notebook', emoji: '📓' },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('learnup_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('learnup_theme', theme);
  }, [theme]);

  const setThemeById = (id) => {
    if (THEMES.find(t => t.id === id)) setTheme(id);
  };

  // Old toggle kept for backwards compat — cycles through all 4
  const toggleTheme = () => {
    const idx = THEMES.findIndex(t => t.id === theme);
    setTheme(THEMES[(idx + 1) % THEMES.length].id);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeById }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
