import { week1 } from './weeks/week1';
import { week2 } from './weeks/week2';
import { week3 } from './weeks/week3';
import { week4 } from './weeks/week4';
import { week5 } from './weeks/week5';
import { week6 } from './weeks/week6';
import { week7 } from './weeks/week7';
import { week8 } from './weeks/week8';

export const schedule = [week1, week2, week3, week4, week5, week6, week7, week8];

export const getDayData = (weekNum, dayInWeek) => {
  const week = schedule.find(w => w.week === weekNum);
  if (!week) return null;
  return week.days.find(d => d.dayInWeek === dayInWeek) || null;
};

export const getDayById = (dayId) => {
  // dayId format: "w1d1" = week 1, day 1
  const match = dayId.match(/w(\d+)d(\d+)/);
  if (!match) return null;
  const weekNum = parseInt(match[1]);
  const dayNum = parseInt(match[2]);
  const week = schedule.find(w => w.week === weekNum);
  if (!week) return null;
  return week.days.find(d => d.day === dayNum) || null;
};

export const getAbsoluteDay = (weekNum, dayInWeek) => {
  return (weekNum - 1) * 7 + dayInWeek;
};

export const getWeekAndDay = (absoluteDay) => {
  const week = Math.ceil(absoluteDay / 7);
  const day = ((absoluteDay - 1) % 7) + 1;
  return { week, day };
};
