import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔥 REPLACE THESE WITH YOUR FIREBASE PROJECT CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBo3K9HvV-2IeGsjcdxFn51x4hhRQ9kLlg",
  authDomain: "learnup-427d3.firebaseapp.com",
  projectId: "learnup-427d3",
  storageBucket: "learnup-427d3.firebasestorage.app",
  messagingSenderId: "494197119265",
  appId: "1:494197119265:web:84270e6487d9b4315f0660",
  measurementId: "G-W8DCJ4YB03"
};

let app = null;
let db = null;

try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (error) {
  console.warn('Firebase initialization failed, using localStorage fallback:', error);
}

export { app, db };
export const isFirebaseConfigured = () => db !== null;
