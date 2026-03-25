import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getRandomMessage } from '../data/motivationalMessages';

export default function MotivationalModal() {
  const [show, setShow] = useState(true);
  const [message] = useState(() => getRandomMessage());
  const { tContent, t } = useLanguage();
  const { theme } = useTheme();

  if (!show) return null;

  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShow(false)}
      >
        <motion.div
          className="modal-content glass"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            style={{ fontSize: '3rem', marginBottom: '16px' }}
          >
            🚀
          </motion.div>

          {/* Heading — fully bilingual */}
          <h2 className="gradient-text">{t('modalHeading')}</h2>

          {/* Message — already bilingual via tContent */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}
          >
            {message.hi}
          </motion.p>

          {/* CTA button — bilingual */}
          <motion.button
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '16px 40px', marginTop: '8px' }}
            onClick={() => setShow(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {t('letsStart')}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
