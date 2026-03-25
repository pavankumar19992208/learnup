import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

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

  const petals = ['🌸', '🌺', '🌷', '🌹', '🌻', '💮', '🏵️', '🌼'];

  return (
    <div className="login-screen">
      {/* Floating petals background */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
          }}
        >
          {petals[i % petals.length]}
        </div>
      ))}

      <motion.div
        className="login-card glass"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          style={{ fontSize: '4rem', marginBottom: '16px' }}
        >
          🌸
        </motion.div>

        <h1 className="gradient-text">{t('welcomeBack')}</h1>
        <p>{t('enterPassword')}</p>

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
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {t('wrongPassword')}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '12px', fontSize: '1.1rem', padding: '16px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading || !password}
          >
            {loading ? '🌀 ...' : t('login')}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
