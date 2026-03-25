import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getRandomMessage } from '../data/motivationalMessages';

export default function MotivationalModal() {
  const [show, setShow] = useState(true);
  const [message] = useState(() => getRandomMessage());
  const { t } = useLanguage();

  if (!show) return null;

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
          style={{ borderRadius: '20px', maxWidth: '480px' }}
        >
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block', padding: '4px 14px', borderRadius: '20px',
              background: 'var(--color-primary-glow)', color: 'var(--color-primary)',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase', marginBottom: '20px'
            }}
          >
            ⚡ आज का संदेश — Priya के लिए
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.75, fontWeight: 500, marginBottom: '24px' }}
          >
            {message.hi}
          </motion.p>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '24px' }} />

          {/* CTA */}
          <motion.button
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '14px 36px' }}
            onClick={() => setShow(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            🚀 {t('letsStart')}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
