import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { schedule } from '../data/schedule';

export default function ProgressPage() {
  const { t, tContent } = useLanguage();
  const { progress, getOverallProgress, getWeekProgress, getCurrentDay } = useProgress();

  const overallPercent = getOverallProgress();
  const currentDay = getCurrentDay();

  // Count total completed tasks
  const totalCompletedTasks = Object.values(progress.completedTasks || {})
    .reduce((sum, arr) => sum + (arr?.length || 0), 0);

  // Count completed days (all tasks done)
  let completedDays = 0;
  schedule.forEach(week => {
    week.days.forEach(day => {
      if (day.type === 'rest') return;
      const dayId = `w${week.week}d${day.day}`;
      const totalTasks = day.tasks?.length || 0;
      const completed = progress.completedTasks?.[dayId]?.length || 0;
      if (completed >= totalTasks && totalTasks > 0) completedDays++;
    });
  });

  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        style={{ fontSize: '1.5rem', marginBottom: '24px' }}>
        {t('progressTitle')}
      </motion.h1>

      {/* Stats Grid */}
      <motion.div className="progress-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="stat-card card">
          <div className="stat-number gradient-text">{overallPercent}%</div>
          <div className="stat-label">{t('overallProgress')}</div>
        </div>
        <div className="stat-card card">
          <div className="stat-number" style={{ color: 'var(--color-accent)' }}>{completedDays}</div>
          <div className="stat-label">{t('totalCompleted')}</div>
        </div>
        <div className="stat-card card">
          <div className="stat-number" style={{ color: 'var(--color-secondary)' }}>{totalCompletedTasks}</div>
          <div className="stat-label">{t('totalTasks')}</div>
        </div>
      </motion.div>

      {/* Streak */}
      <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ textAlign: 'center', padding: '24px', marginBottom: '24px' }}>
        <div className="streak-fire" style={{ fontSize: '3rem' }}>🔥</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '4px' }}>{progress.streak || 0}</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t('currentStreak')} ({t('days')})</div>
      </motion.div>

      {/* Main Progress Bar */}
      <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontWeight: 600 }}>{t('overallProgress')}</span>
          <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{overallPercent}%</span>
        </div>
        <div className="progress-bar-container" style={{ height: '12px' }}>
          <div className="progress-bar-fill" style={{ width: `${overallPercent}%` }} />
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>
          {t('dayTitle')} {currentDay} / 56
        </p>
      </motion.div>

      {/* Weekly Progress */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h3 className="section-title">📊 {t('weeklyProgress')}</h3>
        {schedule.map((week) => {
          const weekProg = getWeekProgress(week.week);
          return (
            <motion.div
              key={week.week}
              className="card"
              style={{ marginBottom: '10px', padding: '16px 20px' }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + week.week * 0.04 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                  {t('weekTitle')} {week.week}: {tContent(week.title)}
                </span>
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: weekProg === 100 ? 'var(--color-accent)' : 'var(--color-primary)' }}>
                  {weekProg}%
                  {weekProg === 100 && ' ✅'}
                </span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${weekProg}%` }} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Activity Calendar Mini */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <h3 className="section-title">📅 {t('calendarView')}</h3>
        <div className="card" style={{ padding: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={i} style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', padding: '4px' }}>
                {d}
              </div>
            ))}
            {Array.from({ length: 56 }).map((_, i) => {
              const absDay = i + 1;
              const weekNum = Math.ceil(absDay / 7);
              const dayInWeek = ((absDay - 1) % 7) + 1;
              const week = schedule.find(w => w.week === weekNum);
              const day = week?.days.find(d => d.dayInWeek === dayInWeek);
              const dayId = `w${weekNum}d${day?.day}`;
              const totalTasks = day?.tasks?.length || 0;
              const completedCount = progress.completedTasks?.[dayId]?.length || 0;
              const isRest = day?.type === 'rest';
              const isComplete = completedCount >= totalTasks && totalTasks > 0;
              const hasProgress = completedCount > 0;
              const isFuture = absDay > currentDay;

              return (
                <div
                  key={i}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    background: isComplete ? 'var(--color-accent)' :
                      isRest ? 'var(--border-color)' :
                        hasProgress ? 'var(--color-primary-glow)' :
                          isFuture ? 'transparent' : 'var(--border-color)',
                    color: isComplete ? 'white' : 'var(--text-muted)',
                    border: absDay === currentDay ? '2px solid var(--color-primary)' : '1px solid var(--border-color)',
                    opacity: isFuture ? 0.3 : 1,
                  }}
                >
                  {isComplete ? '✓' : isRest ? '🌺' : absDay}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
