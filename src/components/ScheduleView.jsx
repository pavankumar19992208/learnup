import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { schedule } from '../data/schedule';

export default function ScheduleView() {
  const [openWeek, setOpenWeek] = useState(null);
  const { t, tContent } = useLanguage();
  const { getWeekProgress, getDayCompletionPercent, isDayLocked } = useProgress();
  const navigate = useNavigate();
  const typeColors = { concept: '#8B5CF6', practice: '#E91E8C', combine: '#F59E0B', project: '#10B981', rest: '#6366F1' };
  const typeEmoji = { concept: '📖', practice: '💻', combine: '🔗', project: '🚀', rest: '🌺' };

  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
        📅 {t('schedule')}
      </motion.h1>

      {schedule.map((week) => {
        const weekProgress = getWeekProgress(week.week);
        const isOpen = openWeek === week.week;

        return (
          <motion.div
            key={week.week}
            className="week-card card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: week.week * 0.05 }}
            style={{ padding: 0 }}
          >
            <button className="week-header" onClick={() => setOpenWeek(isOpen ? null : week.week)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <span style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `linear-gradient(135deg, ${typeColors.concept}, ${typeColors.practice})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
                }}>
                  W{week.week}
                </span>
                <div>
                  <span className="week-title">{tContent(week.title)}</span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {weekProgress}% {t('completed')}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="week-progress-bar">
                  <div className="week-progress-fill" style={{ width: `${weekProgress}%` }} />
                </div>
                <span className={`week-chevron ${isOpen ? 'open' : ''}`}>▼</span>
              </div>
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
                  <div className="week-days">
                    {week.days.map((day) => {
                      const absDay = (week.week - 1) * 7 + day.dayInWeek;
                      const dayId = `w${week.week}d${day.day}`;
                      const totalTasks = day.tasks?.length || 0;
                      const completion = getDayCompletionPercent(dayId, totalTasks);
                      const isLocked = isDayLocked(absDay);

                      return (
                        <motion.div
                          key={day.dayInWeek}
                          className={`day-card-mini ${completion === 100 && totalTasks > 0 ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
                          style={{
                            background: day.type === 'rest' ? 'var(--bg-secondary)' : undefined,
                            opacity: isLocked ? 0.7 : 1,
                          }}
                          onClick={() => day.type !== 'rest' && navigate(`/day/${week.week}/${day.dayInWeek}`)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
                            {isLocked ? '🔒' : typeEmoji[day.type]}
                          </div>
                          <div className="day-num" style={{ color: isLocked ? 'var(--text-muted)' : typeColors[day.type] }}>
                            {day.type === 'rest' ? '😴' : day.day}
                          </div>
                          <div className="day-type">{t(`${day.type}Day`)}</div>
                          
                          {totalTasks > 0 && !isLocked && (
                            <div className="progress-bar-container" style={{ height: '4px', marginTop: '8px', background: 'var(--border-color-strong)' }}>
                              <div className="progress-bar-fill" style={{ width: `${completion}%`, background: typeColors[day.type] }} />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
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
