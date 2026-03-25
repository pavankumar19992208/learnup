import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme, THEMES } from '../contexts/ThemeContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, setThemeById } = useTheme();
  const [showThemePicker, setShowThemePicker] = useState(false);

  const navItems = [
    { to: '/', icon: '🏠', label: t('dashboard') },
    { to: '/schedule', icon: '📅', label: t('schedule') },
    { to: '/real-apps', icon: '📱', label: t('realApps') },
    { to: '/progress', icon: '📊', label: t('progress') },
  ];

  const currentTheme = THEMES.find(t => t.id === theme) || THEMES[0];

  return (
    <>
      {/* Top bar with toggles */}
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--gradient-primary)', flexShrink: 0 }} />
          <span className="topbar-title gradient-text" style={{ fontSize: '1.3rem', letterSpacing: '-0.03em' }}>LearnUp</span>
        </div>

        <div className="topbar-actions">
          {/* Language Switch */}
          <div className="switch-toggle" role="radiogroup" aria-label="Language">
            <span
              className={`switch-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => language !== 'en' && toggleLanguage()}
              role="radio" aria-checked={language === 'en'}
            >EN</span>
            <span
              className={`switch-option ${language === 'hi' ? 'active' : ''}`}
              onClick={() => language !== 'hi' && toggleLanguage()}
              role="radio" aria-checked={language === 'hi'}
            >हिंदी</span>
          </div>

          {/* Theme Picker Button */}
          <div style={{ position: 'relative' }}>
            <button
              className="switch-toggle"
              onClick={() => setShowThemePicker(v => !v)}
              style={{ cursor: 'pointer', gap: '6px', fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 600 }}
              aria-label="Change theme"
            >
              <span>{currentTheme.emoji}</span>
              <span style={{ color: 'var(--text-muted)' }}>Theme</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>▾</span>
            </button>

            {/* Dropdown */}
            {showThemePicker && (
              <>
                {/* Backdrop */}
                <div
                  style={{ position: 'fixed', inset: 0, zIndex: 300 }}
                  onClick={() => setShowThemePicker(false)}
                />
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                  borderRadius: '12px', padding: '6px', zIndex: 400,
                  boxShadow: 'var(--shadow-lg)', minWidth: '160px',
                }}>
                  {THEMES.map(th => (
                    <button
                      key={th.id}
                      onClick={() => { setThemeById(th.id); setShowThemePicker(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        width: '100%', padding: '9px 12px', borderRadius: '8px',
                        border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                        fontSize: '0.88rem', fontWeight: th.id === theme ? 700 : 500,
                        background: th.id === theme ? 'var(--color-primary-glow)' : 'transparent',
                        color: th.id === theme ? 'var(--color-primary)' : 'var(--text-primary)',
                        transition: 'all 0.2s',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '1rem' }}>{th.emoji}</span>
                      <span>{th.label.replace(/^[^\s]+\s/, '')}</span>
                      {th.id === theme && <span style={{ marginLeft: 'auto', fontSize: '0.75rem' }}>✓</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
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
