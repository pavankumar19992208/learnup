import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { realApps } from '../data/realApps';

export default function RealAppsExplorer() {
  const [openApp, setOpenApp] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const { t, tContent } = useLanguage();

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="page">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{t('realAppsTitle')}</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>
          {t('realAppsSubtitle')}
        </p>
      </motion.div>

      {realApps.map((app, idx) => {
        const isOpen = openApp === idx;

        return (
          <motion.div
            key={app.name}
            className="real-app-card card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            style={{ padding: 0 }}
          >
            <button
              className="real-app-header"
              onClick={() => setOpenApp(isOpen ? null : idx)}
            >
              <div className="app-icon" style={{ background: `${app.color}20` }}>
                {app.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{app.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {tContent(app.description)}
                </div>
              </div>
              <span className={`week-chevron ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 20px 20px' }}>
                    {/* Concept Table */}
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      🐍 {t('pythonConcepts')}
                    </h4>
                    <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
                      <table className="concept-table">
                        <thead>
                          <tr>
                            <th>{t('feature')}</th>
                            <th>{t('concept')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {app.concepts.map((c, i) => (
                            <tr key={i}>
                              <td>{tContent(c.feature)}</td>
                              <td style={{ color: 'var(--color-primary)', fontWeight: 500 }}>{tContent(c.concept)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Thinking Questions */}
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      🤔 {t('thinkQuestions')}
                    </h4>
                    {app.questions.map((q, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 14px', borderRadius: '10px', marginBottom: '8px',
                        background: 'var(--color-primary-glow)',
                        gap: '12px',
                      }}>
                        <p style={{ fontSize: '0.85rem', flex: 1 }}>
                          {i + 1}. {tContent(q.question)}
                        </p>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => copyToClipboard(q.claudePrompt, `${app.name}-q${i}`)}
                          style={{ flexShrink: 0, fontSize: '0.75rem' }}
                        >
                          {copiedId === `${app.name}-q${i}` ? '✅' : t('askClaude')}
                        </button>
                      </div>
                    ))}

                    {/* Hands-on Task */}
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '16px', marginBottom: '10px' }}>
                      {t('handsOnTask')}
                    </h4>
                    <div className="prompt-box">
                      <p className="prompt-text" style={{ fontSize: '0.85rem' }}>
                        {tContent(app.task)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
