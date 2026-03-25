import { db, isFirebaseConfigured } from './config';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  serverTimestamp
} from 'firebase/firestore';

const STORAGE_KEY = 'learnup_progress';

// Local storage fallback
const getLocalProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch { return null; }
};

const saveLocalProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

const defaultProgress = {
  completedTasks: {},
  streak: 0,
  lastActiveDate: null,
  startDate: new Date().toISOString().split('T')[0],
  totalDaysCompleted: 0
};

// Get user progress
export const getUserProgress = async (userId = 'priya') => {
  if (!isFirebaseConfigured()) {
    return getLocalProgress() || { ...defaultProgress };
  }
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      await setDoc(docRef, defaultProgress);
      return { ...defaultProgress };
    }
  } catch (error) {
    console.warn('Firestore read failed, using local:', error);
    return getLocalProgress() || { ...defaultProgress };
  }
};

// Mark task complete
export const markTaskComplete = async (dayId, taskId, userId = 'priya') => {
  const progress = (await getUserProgress(userId)) || { ...defaultProgress };
  
  if (!progress.completedTasks[dayId]) {
    progress.completedTasks[dayId] = [];
  }
  if (!progress.completedTasks[dayId].includes(taskId)) {
    progress.completedTasks[dayId].push(taskId);
  }

  // Update streak
  const today = new Date().toISOString().split('T')[0];
  if (progress.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (progress.lastActiveDate === yesterday) {
      progress.streak = (progress.streak || 0) + 1;
    } else if (progress.lastActiveDate !== today) {
      progress.streak = 1;
    }
    progress.lastActiveDate = today;
  }

  if (!isFirebaseConfigured()) {
    saveLocalProgress(progress);
    return progress;
  }

  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, progress, { merge: true });
    return progress;
  } catch (error) {
    console.warn('Firestore write failed, saving locally:', error);
    saveLocalProgress(progress);
    return progress;
  }
};

// Mark task incomplete
export const markTaskIncomplete = async (dayId, taskId, userId = 'priya') => {
  const progress = (await getUserProgress(userId)) || { ...defaultProgress };
  
  if (progress.completedTasks[dayId]) {
    progress.completedTasks[dayId] = progress.completedTasks[dayId].filter(id => id !== taskId);
    if (progress.completedTasks[dayId].length === 0) {
      delete progress.completedTasks[dayId];
    }
  }

  if (!isFirebaseConfigured()) {
    saveLocalProgress(progress);
    return progress;
  }

  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, progress, { merge: true });
    return progress;
  } catch (error) {
    console.warn('Firestore write failed, saving locally:', error);
    saveLocalProgress(progress);
    return progress;
  }
};

// Subscribe to real-time updates
export const subscribeToProgress = (callback, userId = 'priya') => {
  if (!isFirebaseConfigured()) {
    // For local storage, just call with current data
    const data = getLocalProgress() || { ...defaultProgress };
    callback(data);
    // Return a fake unsubscribe
    return () => {};
  }

  try {
    const docRef = doc(db, 'users', userId);
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        saveLocalProgress(data); // Keep local in sync
        callback(data);
      } else {
        callback({ ...defaultProgress });
      }
    }, (error) => {
      console.warn('Snapshot listener error:', error);
      const data = getLocalProgress() || { ...defaultProgress };
      callback(data);
    });
  } catch (error) {
    console.warn('Failed to subscribe:', error);
    const data = getLocalProgress() || { ...defaultProgress };
    callback(data);
    return () => {};
  }
};

// Reset progress
export const resetProgress = async (userId = 'priya') => {
  const fresh = { ...defaultProgress, startDate: new Date().toISOString().split('T')[0] };
  
  if (!isFirebaseConfigured()) {
    saveLocalProgress(fresh);
    return fresh;
  }

  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, fresh);
    return fresh;
  } catch (error) {
    saveLocalProgress(fresh);
    return fresh;
  }
};

// Save an English reflection entry for a given day
export const saveEnglishReflection = async (dayNum, reflectionText, userId = 'priya') => {
  const entry = {
    day: dayNum,
    text: reflectionText,
    savedAt: new Date().toISOString(),
  };

  // Always save to localStorage too
  const localKey = `learnup_english`;
  try {
    const existing = JSON.parse(localStorage.getItem(localKey) || '{}');
    existing[dayNum] = entry;
    localStorage.setItem(localKey, JSON.stringify(existing));
  } catch {}

  if (!isFirebaseConfigured()) return entry;

  try {
    const docRef = doc(db, 'users', userId, 'englishJournal', `day${dayNum}`);
    await setDoc(docRef, { ...entry, savedAt: serverTimestamp() });
    return entry;
  } catch (error) {
    console.warn('Firestore reflection save failed:', error);
    return entry;
  }
};

// Get all English reflections for Priya
export const getAllEnglishReflections = async (userId = 'priya') => {
  // Always check local first
  const localKey = `learnup_english`;
  let localData = {};
  try {
    localData = JSON.parse(localStorage.getItem(localKey) || '{}');
  } catch {}

  if (!isFirebaseConfigured()) return localData;

  try {
    const colRef = collection(db, 'users', userId, 'englishJournal');
    const snapshot = await getDocs(colRef);
    const result = {};
    snapshot.forEach(d => {
      const data = d.data();
      result[data.day] = data;
    });
    // Merge local with cloud (cloud wins)
    return { ...localData, ...result };
  } catch (error) {
    console.warn('Firestore reflection fetch failed:', error);
    return localData;
  }
};
