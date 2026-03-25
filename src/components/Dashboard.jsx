import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { schedule } from '../data/schedule';

export default function Dashboard() {
  const { t, tContent } = useLanguage();
  const { progress, getOverallProgress, getCurrentDay, isTaskCompleted, getIncompleteDays } = useProgress();
  const navigate = useNavigate();

  const currentDay = getCurrentDay();
  const overallPercent = getOverallProgress();
  const incompleteDays = getIncompleteDays();

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return t('goodMorning');
    if (hour < 17) return t('goodAfternoon');
    return t('goodEvening');
  }, [t]);

  const todayInfo = useMemo(() => {
    const weekNum = Math.ceil(currentDay / 7);
    const dayInWeek = ((currentDay - 1) % 7) + 1;
    const week = schedule.find(w => w.week === weekNum);
    if (!week) return null;
    const day = week.days.find(d => d.dayInWeek === dayInWeek);
    return day ? { ...day, weekNum, dayId: `w${weekNum}d${day.day}` } : null;
  }, [currentDay]);

  const typeColors = { concept: '#8B5CF6', practice: '#E91E8C', combine: '#F59E0B', project: '#10B981', rest: '#6366F1' };

  return (
    <div className="page">
      {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{greeting}</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          {t('dayTitle')} {currentDay} / 56
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}
      >
        {/* Progress Circle */}
        <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div className="progress-ring-container" style={{ width: 70, height: 70, margin: '0 auto 8px' }}>
            <svg width="70" height="70">
              <circle cx="35" cy="35" r="30" fill="none" stroke="var(--border-color)" strokeWidth="5" />
              <circle
                cx="35" cy="35" r="30" fill="none"
                stroke="url(#progressGrad)" strokeWidth="5"
                strokeDasharray={`${(overallPercent / 100) * 188.5} 188.5`}
                strokeLinecap="round"
                transform="rotate(-90 35 35)"
                style={{ transition: 'stroke-dasharray 0.6s ease' }}
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E91E8C" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="percentage" style={{ fontSize: '0.9rem' }}>{overallPercent}%</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('overallProgress')}</div>
        </div>

        {/* Streak */}
        <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div className="streak-fire" style={{ fontSize: '2rem' }}>🔥</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0' }}>{progress.streak || 0}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('currentStreak')}</div>
        </div>

        {/* Days */}
        <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
          <div style={{ fontSize: '2rem' }}>📅</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, margin: '4px 0' }}>{currentDay}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('dayTitle')} / 56</div>
        </div>
      </motion.div>

      {/* Today's Card */}
      {todayInfo && todayInfo.type !== 'rest' && (
        <motion.div
          className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ marginBottom: '20px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          onClick={() => navigate(`/day/${todayInfo.weekNum}/${todayInfo.dayInWeek}`)}
          whileHover={{ scale: 1.01 }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `${typeColors[todayInfo.type]}` }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '1.1rem' }}>{t('todaysPlan')}</h3>
            <span className={`badge badge-${todayInfo.type}`}>
              {t(`${todayInfo.type}Day`)}
            </span>
          </div>
          <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px' }}>{tContent(todayInfo.title)}</p>
          {todayInfo.tasks && (
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {todayInfo.tasks.map(task => (
                <span key={task.id} style={{
                  width: '24px', height: '24px', borderRadius: '6px', display: 'inline-flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem',
                  background: isTaskCompleted(todayInfo.dayId, task.id) ? 'var(--color-accent)' : 'var(--border-color)',
                  color: isTaskCompleted(todayInfo.dayId, task.id) ? 'white' : 'var(--text-muted)',
                }}>
                  {isTaskCompleted(todayInfo.dayId, task.id) ? '✓' : '○'}
                </span>
              ))}
            </div>
          )}
          <button className="btn btn-primary btn-sm" style={{ marginTop: '16px', width: '100%' }}>
            {t('startLearning')} →
          </button>
        </motion.div>
      )}

      {todayInfo && todayInfo.type === 'rest' && (
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', padding: '32px', marginBottom: '20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🌺</div>
          <h3>{t('restDay')}</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            {tContent({ en: "Take a break or catch up on any missed topics!", hi: "आराम करो या कोई छूटा हुआ topic पूरा करो!" })}
          </p>
        </motion.div>
      )}

      {/* Incomplete Tasks */}
      {incompleteDays.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="section-title">⚠️ {t('incompletePrevious')}</h3>
          <div className="incomplete-panel">
            {incompleteDays.slice(0, 5).map(item => (
              <div
                key={item.dayId}
                onClick={() => navigate(`/day/${item.week}/${item.dayInWeek}`)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px', borderRadius: '10px', marginBottom: '6px',
                  cursor: 'pointer', transition: 'background 0.2s',
                }}
                className="task-item"
              >
                <div>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                    {t('weekTitle')} {item.week}, {t('dayTitle')} {item.day}
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{tContent(item.title)}</p>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  {item.completedCount}/{item.totalTasks}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
