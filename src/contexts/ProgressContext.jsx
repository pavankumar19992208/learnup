import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  getUserProgress, 
  markTaskComplete as fbMarkComplete, 
  markTaskIncomplete as fbMarkIncomplete,
  subscribeToProgress 
} from '../firebase/progressService';
import { schedule } from '../data/schedule';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    completedTasks: {},
    streak: 0,
    lastActiveDate: null,
    startDate: new Date().toISOString().split('T')[0],
    totalDaysCompleted: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const data = await getUserProgress();
      setProgress(data);
      setLoading(false);
    };
    init();

    const unsubscribe = subscribeToProgress((data) => {
      setProgress(data);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const markComplete = useCallback(async (dayId, taskId) => {
    const updated = await fbMarkComplete(dayId, taskId);
    setProgress(updated);
    return updated;
  }, []);

  const markIncomplete = useCallback(async (dayId, taskId) => {
    const updated = await fbMarkIncomplete(dayId, taskId);
    setProgress(updated);
    return updated;
  }, []);

  const isTaskCompleted = useCallback((dayId, taskId) => {
    return progress.completedTasks[dayId]?.includes(taskId) || false;
  }, [progress.completedTasks]);

  const getDayCompletionPercent = useCallback((dayId, totalTasks) => {
    const completed = progress.completedTasks[dayId]?.length || 0;
    return totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;
  }, [progress.completedTasks]);

  const isDayComplete = useCallback((dayId, totalTasks) => {
    return getDayCompletionPercent(dayId, totalTasks) === 100;
  }, [getDayCompletionPercent]);

  const getOverallProgress = useCallback(() => {
    let totalTasks = 0;
    let completedCount = 0;
    
    schedule.forEach(week => {
      week.days.forEach(day => {
        if (day.type !== 'rest') {
          const dayTasks = day.tasks?.length || 0;
          totalTasks += dayTasks;
          completedCount += progress.completedTasks[`w${week.week}d${day.day}`]?.length || 0;
        }
      });
    });

    return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  }, [progress.completedTasks]);

  const getWeekProgress = useCallback((weekNum) => {
    const week = schedule.find(w => w.week === weekNum);
    if (!week) return 0;
    
    let totalTasks = 0;
    let completedCount = 0;
    
    week.days.forEach(day => {
      if (day.type !== 'rest') {
        totalTasks += day.tasks?.length || 0;
        completedCount += progress.completedTasks[`w${weekNum}d${day.day}`]?.length || 0;
      }
    });

    return totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  }, [progress.completedTasks]);

  const getIncompleteDays = useCallback(() => {
    const today = getCurrentDay();
    const incomplete = [];
    
    schedule.forEach(week => {
      week.days.forEach(day => {
        if (day.type === 'rest') return;
        const dayNum = (week.week - 1) * 7 + day.dayInWeek;
        if (dayNum >= today) return;
        
        const dayId = `w${week.week}d${day.day}`;
        const totalTasks = day.tasks?.length || 0;
        const completedCount = progress.completedTasks[dayId]?.length || 0;
        
        if (completedCount < totalTasks && totalTasks > 0) {
          incomplete.push({
            week: week.week,
            day: day.day,
            dayInWeek: day.dayInWeek,
            title: day.title,
            dayId,
            totalTasks,
            completedCount,
            tasks: day.tasks
          });
        }
      });
    });
    
    return incomplete;
  }, [progress.completedTasks]);

  const getCurrentDay = useCallback(() => {
    const start = new Date(progress.startDate);
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return Math.min(Math.max(diff + 1, 1), 56);
  }, [progress.startDate]);

  const isDayLocked = useCallback((targetAbsDay) => {
    for (let week of schedule) {
      for (let day of week.days) {
        const absDay = (week.week - 1) * 7 + day.dayInWeek;
        if (absDay >= targetAbsDay) return false;
        
        if (day.type !== 'rest') {
          const dayTasks = day.tasks?.length || 0;
          if (dayTasks > 0) {
            const dayId = `w${week.week}d${day.day}`;
            const completed = progress.completedTasks[dayId]?.length || 0;
            if (completed < dayTasks) return true;
          }
        }
      }
    }
    return false;
  }, [progress.completedTasks]);

  return (
    <ProgressContext.Provider value={{
      progress,
      loading,
      markComplete,
      markIncomplete,
      isTaskCompleted,
      getDayCompletionPercent,
      isDayComplete,
      getOverallProgress,
      getWeekProgress,
      getIncompleteDays,
      getCurrentDay,
      isDayLocked,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
