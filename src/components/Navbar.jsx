import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { to: '/', icon: '🏠', label: t('dashboard') },
    { to: '/schedule', icon: '📅', label: t('schedule') },
    { to: '/real-apps', icon: '📱', label: t('realApps') },
    { to: '/progress', icon: '📊', label: t('progress') },
  ];

  return (
    <>
      {/* Top bar with toggles */}
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--gradient-primary)' }} />
          <span className="topbar-title gradient-text" style={{ fontSize: '1.3rem', letterSpacing: '-0.03em' }}>LearnUp</span>
        </div>
        <div className="topbar-actions">
          {/* Language Switch */}
          <div className="switch-toggle" role="radiogroup" aria-label="Language">
            <span
              className={`switch-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => language !== 'en' && toggleLanguage()}
              role="radio"
              aria-checked={language === 'en'}
            >
              EN
            </span>
            <span
              className={`switch-option ${language === 'hi' ? 'active' : ''}`}
              onClick={() => language !== 'hi' && toggleLanguage()}
              role="radio"
              aria-checked={language === 'hi'}
            >
              हिंदी
            </span>
          </div>

          {/* Theme Switch */}
          <div className="switch-toggle" role="radiogroup" aria-label="Theme">
            <span
              className={`switch-option ${theme === 'light' ? 'active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
              role="radio"
              aria-checked={theme === 'light'}
            >
              ☀️ {t('lightLabel')}
            </span>
            <span
              className={`switch-option ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
              role="radio"
              aria-checked={theme === 'dark'}
            >
              🌙 {t('darkLabel')}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="navbar">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end={to === '/'}
          >
            <span className="nav-icon">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
