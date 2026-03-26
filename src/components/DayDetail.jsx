import { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { schedule } from '../data/schedule';
import EnglishSection from './EnglishSection';

export default function DayDetail() {
  const { weekNum, dayInWeek } = useParams();
  const navigate = useNavigate();
  const { t, tContent, language } = useLanguage();
  const { isTaskCompleted, markComplete, markIncomplete, getDayCompletionPercent, isDayLocked } = useProgress();
  const [copiedId, setCopiedId] = useState(null);
  const [boostMsg, setBoostMsg] = useState(null);

  const TASK_BOOSTS = [
    "Great work, Priya! ✅ Keep going!",
    "That's one more down, Priya! 💪",
    "Well done, Priya! You're on fire! 🔥",
    "Yes! Priya is crushing it! ⚡",
    "Superb, Priya! लगे रहो! 🚀",
    "Amazing focus, Priya! One step closer! 🎯",
    "Priya, you're building something real today! 🛠️",
    "Task done! Priya, you're unstoppable! 🌟",
  ];

  const DAY_COMPLETE_BOOSTS = [
    "Day Complete! Priya, you are going to be a perfect developer — very soon! 🏆",
    "All tasks done! Priya, your consistency is your superpower! 💎",
    "Incredible work today, Priya! माँ-पापा को तुम पर गर्व होगा! 🌟",
    "You completed the full day, Priya! Don't stop now! 🚀",
  ];

  const showBoost = (isDayComplete) => {
    const pool = isDayComplete ? DAY_COMPLETE_BOOSTS : TASK_BOOSTS;
    const msg = pool[Math.floor(Math.random() * pool.length)];
    setBoostMsg(msg);
    setTimeout(() => setBoostMsg(null), 4000);
  };

  const week = schedule.find(w => w.week === parseInt(weekNum));
  const day = week?.days.find(d => d.dayInWeek === parseInt(dayInWeek));

  if (!day || !week) {
    return <div className="page"><p>Day not found</p></div>;
  }

  const dayId = `w${weekNum}d${day.day}`;
  const totalTasks = day.tasks?.length || 0;
  const completion = getDayCompletionPercent(dayId, totalTasks);
  const typeColors = { concept: '#8B5CF6', practice: '#E91E8C', combine: '#F59E0B', project: '#10B981', rest: '#6366F1' };

  const absDay = (parseInt(weekNum) - 1) * 7 + parseInt(dayInWeek);
  const isLocked = isDayLocked(absDay);

  const handleTaskToggle = async (taskId) => {
    if (isLocked) return;
    if (isTaskCompleted(dayId, taskId)) {
      await markIncomplete(dayId, taskId);
    } else {
      const updated = await markComplete(dayId, taskId);
      const newDone = updated?.completedTasks?.[dayId]?.length || 0;
      const dayDone = newDone >= totalTasks;
      showBoost(dayDone);
    }
  };

  const copyToClipboard = (text, id) => {
    if (isLocked) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="page">
      {/* Back button */}
      <motion.button
        className="btn btn-secondary btn-sm"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ marginBottom: '16px' }}
      >
        ← Back
      </motion.button>

      {/* Boost Toast */}
      <AnimatePresence>
        {boostMsg && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed', bottom: '90px',
              left: '50%', transform: 'translateX(-50%)',
              background: 'var(--gradient-primary)',
              color: '#fff', padding: '12px 24px', borderRadius: '50px',
              fontWeight: 700, fontSize: '0.88rem', zIndex: 500,
              whiteSpace: 'normal', wordBreak: 'break-word',
              width: 'max-content', maxWidth: 'calc(100vw - 40px)',
              textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}
          >
            {boostMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {isLocked && (
        <div className="card" style={{ background: 'var(--color-primary-glow)', border: '1px solid var(--border-color-strong)', padding: '16px', marginBottom: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontSize: '1.8rem' }}>🔒</span>
          <div>
            <strong style={{ fontSize: '1.05rem' }}>Day Locked</strong>
            <p style={{ margin: '4px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              You must complete all tasks in previous days to unlock interactive features here. Preview mode active.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <motion.div
        className="day-detail-header card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', position: 'relative' }}>
          <span className={`badge badge-${day.type}`}>{t(`${day.type}Day`)}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {t('weekTitle')} {weekNum} • {t('dayTitle')} {day.day}
          </span>
        </div>
        <h1 style={{ position: 'relative' }}>{tContent(day.title)}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px', position: 'relative' }}>
          <div className="progress-bar-container" style={{ flex: 1 }}>
            <div className="progress-bar-fill" style={{ width: `${completion}%` }} />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: typeColors[day.type] }}>
            {completion}%
          </span>
        </div>
      </motion.div>

      {/* Time Schedule */}
      {day.timeBlocks?.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="section-title">⏰ {t('timeSchedule')}</h3>
          {day.timeBlocks.map((block, i) => (
            <div key={i} className="time-block">
              <span className="time-label">{block.time}</span>
              <span>{tContent(block.activity)}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Topics */}
      {day.topics?.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h3 className="section-title">📚 {t('topicsCovered')}</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {day.topics.map((topic, i) => (
              <span key={i} className="badge" style={{
                background: 'var(--color-primary-glow)',
                color: 'var(--color-primary)',
                padding: '6px 14px', fontSize: '0.85rem'
              }}>
                {tContent(topic)}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tasks Checklist */}
      {day.tasks?.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="section-title">✅ {t('tasks')} ({day.tasks.filter(tk => isTaskCompleted(dayId, tk.id)).length}/{totalTasks})</h3>
          <div className="card" style={{ padding: '8px' }}>
            {day.tasks.map(task => {
              const checked = isTaskCompleted(dayId, task.id);
              return (
                <div
                  key={task.id}
                  className="task-item"
                  style={{ opacity: isLocked ? 0.6 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                  onClick={() => handleTaskToggle(task.id)}
                >
                  <div className={`task-checkbox ${checked ? 'checked' : ''}`} style={{ borderColor: isLocked ? 'var(--text-muted)' : undefined }} />
                  <span className={`task-text ${checked ? 'completed' : ''}`}>
                    {tContent(task.text)}
                    {task.type === 'code' && <span style={{ marginLeft: '6px', fontSize: '0.7rem', opacity: 0.6 }}>💻</span>}
                    {task.type === 'learn' && <span style={{ marginLeft: '6px', fontSize: '0.7rem', opacity: 0.6 }}>📖</span>}
                    {task.type === 'think' && <span style={{ marginLeft: '6px', fontSize: '0.7rem', opacity: 0.6 }}>🤔</span>}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Resources */}
      {day.resources?.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h3 className="section-title">🔗 {t('resources')}</h3>
          {day.resources.map((res, i) => (
            <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="resource-link">
              <span className="resource-icon">
                {res.type === 'video' ? '🎥' : res.type === 'docs' ? '📄' : res.type === 'practice' ? '💻' : '📝'}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{res.title}</div>
                <span className="resource-type">{res.type}</span>
              </div>
              <span style={{ color: 'var(--text-muted)' }}>↗</span>
            </a>
          ))}
        </motion.div>
      )}

      {/* Claude Prompt */}
      {tContent(day.claudePrompt) && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="section-title">🤖 {t('claudePrompt')}</h3>
          <div className="prompt-box">
            <p className="prompt-text">{tContent(day.claudePrompt)}</p>
            <button
              className="btn btn-sm btn-secondary copy-btn"
              disabled={isLocked}
              style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
              onClick={() => copyToClipboard(tContent(day.claudePrompt), 'main')}
            >
              {copiedId === 'main' ? t('copied') : t('copyPrompt')}
            </button>
          </div>
        </motion.div>
      )}

      {/* Real App Connection */}
      {day.realAppConnection && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <h3 className="section-title">📱 {t('realAppConnection')}</h3>
          <div className="card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{day.realAppConnection.app}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                → {tContent(day.realAppConnection.concept)}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem' }}>
              {tContent(day.realAppConnection.explanation)}
            </p>
          </div>
        </motion.div>
      )}

      {/* Thinking Questions */}
      {day.thinkingQuestions?.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="section-title">{t('thinkingQuestions')}</h3>
          {day.thinkingQuestions.map((q, i) => (
            <div key={i} className="card" style={{ marginBottom: '10px' }}>
              <p style={{ fontWeight: 600, marginBottom: '10px', fontSize: '0.95rem' }}>
                {i + 1}. {tContent(q.question)}
              </p>
              <button
                className="btn btn-sm btn-secondary"
                disabled={isLocked}
                style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                onClick={() => copyToClipboard(q.claudePrompt, `q${i}`)}
              >
                {copiedId === `q${i}` ? t('copied') : t('askClaude')}
              </button>
            </div>
          ))}
        </motion.div>
      )}

      {/* English Learning Section */}
      {day.type !== 'rest' && (
        <EnglishSection absDay={absDay} />
      )}

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', gap: '12px' }}
      >
        {day.dayInWeek > 1 && (
          <button className="btn btn-secondary" onClick={() => navigate(`/day/${weekNum}/${day.dayInWeek - 1}`)}>
            ← Previous Day
          </button>
        )}
        <div style={{ flex: 1 }} />
        {day.dayInWeek < 7 && (
          <button className="btn btn-primary" onClick={() => navigate(`/day/${weekNum}/${day.dayInWeek + 1}`)}>
            Next Day →
          </button>
        )}
      </motion.div>
    </div>
  );
}
