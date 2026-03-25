import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getEnglishDay } from '../data/englishLearning';
import { saveEnglishReflection, getAllEnglishReflections } from '../firebase/progressService';

const MIN_WORDS = 30;

export default function EnglishSection({ absDay }) {
  const [reflection, setReflection] = useState('');
  const [saved, setSaved] = useState(null);  // previously saved entry
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [allReflections, setAllReflections] = useState({});
  const [loadingHistory, setLoadingHistory] = useState(false);

  const englishDay = getEnglishDay(absDay);

  // Load current day's existing reflection if any
  useEffect(() => {
    const localKey = 'learnup_english';
    try {
      const existing = JSON.parse(localStorage.getItem(localKey) || '{}');
      if (existing[absDay]) {
        setSaved(existing[absDay]);
        setReflection(existing[absDay].text);
      } else {
        setSaved(null);
        setReflection('');
      }
    } catch {}
  }, [absDay]);

  if (!englishDay) return null;

  const wordCount = reflection.trim().split(/\s+/).filter(Boolean).length;
  const minWords = englishDay.minWords || MIN_WORDS;
  const canSubmit = wordCount >= minWords && !saving;

  const handleSave = async () => {
    if (!canSubmit) return;
    setSaving(true);
    const entry = await saveEnglishReflection(absDay, reflection.trim());
    setSaved(entry);
    setSaving(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLoadHistory = async () => {
    setShowHistory(h => !h);
    if (!Object.keys(allReflections).length) {
      setLoadingHistory(true);
      const all = await getAllEnglishReflections();
      setAllReflections(all);
      setLoadingHistory(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{ marginTop: '8px' }}
    >
      {/* Section header */}
      <h3 className="section-title">
        🇬🇧 Daily English Practice
      </h3>

      {/* Video Resource */}
      <div className="card" style={{ marginBottom: '12px', padding: '18px', borderLeft: '4px solid var(--color-accent)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
          📺 Watch Today's BBC English Video
        </div>
        <div style={{ fontWeight: 600, marginBottom: '10px', fontSize: '0.95rem' }}>{englishDay.videoTitle}</div>
        <a
          href={englishDay.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
        >
          ▶ Open Video ↗
        </a>
      </div>

      {/* Writing prompt */}
      <div className="card" style={{ padding: '20px' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '10px' }}>
          ✍️ Today's English Writing Prompt
        </div>
        <p style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.6, marginBottom: '16px', color: 'var(--text-primary)' }}>
          {englishDay.prompt}
        </p>

        {/* Saved indicator */}
        {saved && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px',
            borderRadius: '8px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
            marginBottom: '14px', fontSize: '0.82rem', color: 'var(--color-accent)'
          }}>
            ✅ You have already submitted a response for today. You can update it below.
          </div>
        )}

        {/* Textarea */}
        <textarea
          value={reflection}
          onChange={e => setReflection(e.target.value)}
          rows={5}
          placeholder={`Write ${minWords}+ words in English...`}
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: '10px',
            border: `1px solid ${wordCount >= minWords ? 'var(--color-accent)' : 'var(--border-color)'}`,
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '0.95rem',
            fontFamily: 'inherit',
            lineHeight: 1.7,
            outline: 'none',
            resize: 'vertical',
            transition: 'border-color 0.3s',
          }}
        />

        {/* Word count + submit row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{
            fontSize: '0.85rem', fontWeight: 600,
            color: wordCount >= minWords ? 'var(--color-accent)' : wordCount > 0 ? 'var(--combine-color)' : 'var(--text-muted)'
          }}>
            {wordCount} / {minWords} words minimum {wordCount >= minWords ? '✓' : ''}
          </span>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleSave}
            disabled={!canSubmit}
            style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
          >
            {saving ? 'Saving...' : saved ? '✏️ Update Reflection' : '💾 Save Reflection'}
          </button>
        </div>

        {/* Success message */}
        <AnimatePresence>
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                marginTop: '12px', padding: '10px 14px', borderRadius: '8px',
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)',
                color: 'var(--color-accent)', fontSize: '0.9rem', fontWeight: 600
              }}
            >
              🎉 Reflection saved successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Journal history toggle */}
      <div style={{ marginTop: '12px' }}>
        <button
          className="btn btn-secondary btn-sm"
          onClick={handleLoadHistory}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          📖 {showHistory ? 'Hide' : 'View'} My English Journal
        </button>

        <AnimatePresence>
          {showHistory && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', marginTop: '12px' }}
            >
              <div className="card" style={{ padding: '18px' }}>
                <h4 style={{ marginBottom: '14px', fontSize: '0.95rem', fontWeight: 700 }}>📝 Your English Journal</h4>
                {loadingHistory && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading...</p>}
                {!loadingHistory && Object.keys(allReflections).length === 0 && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No entries yet. Your reflections will appear here!</p>
                )}
                {!loadingHistory && Object.keys(allReflections).sort((a, b) => Number(b) - Number(a)).map(dayKey => {
                  const entry = allReflections[dayKey];
                  return (
                    <div key={dayKey} style={{
                      padding: '12px 14px', borderRadius: '8px', marginBottom: '10px',
                      background: 'var(--bg-secondary)', border: '1px solid var(--border-color)'
                    }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Day {entry.day}
                        {entry.savedAt && typeof entry.savedAt === 'string' && (
                          <span style={{ color: 'var(--text-muted)', fontWeight: 400, marginLeft: '8px' }}>
                            — {new Date(entry.savedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{entry.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
