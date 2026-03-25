import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const FEATURE_TAGS = ['Python · AI · English', '56-Day Learning Journey', 'Track · Build · Grow'];

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const success = login(password);
      if (!success) {
        setError(true);
        setPassword('');
        setTimeout(() => setError(false), 3000);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="login-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Subtle background mesh */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-primary-glow) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <motion.div
        className="login-card glass"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'relative', zIndex: 1, borderRadius: '20px' }}
      >
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          style={{
            width: '64px', height: '64px', borderRadius: '16px',
            background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', fontSize: '2rem',
            boxShadow: 'var(--shadow-glow)',
          }}
        >
          🚀
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '6px' }}>LearnUp</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4px', fontSize: '0.9rem' }}>
            Your personal 56-day coding journey
          </p>
          {/* Feature tags */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '28px', marginTop: '10px' }}>
            {FEATURE_TAGS.map(tag => (
              <span key={tag} style={{
                fontSize: '0.72rem', padding: '3px 10px', borderRadius: '20px',
                background: 'var(--color-primary-glow)', color: 'var(--color-primary)',
                fontWeight: 600, border: '1px solid var(--border-color)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <input
              type="password"
              className="login-input"
              placeholder={t('passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              id="login-password"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                className="login-error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ⚠️ {t('wrongPassword')}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '14px', fontSize: '1rem', padding: '15px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading || !password}
          >
            {loading ? 'Verifying...' : t('login')}
          </motion.button>
        </form>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '20px' }}>
          Made with ❤️ by Pavan — only for Priya
        </p>
      </motion.div>
    </div>
  );
}
