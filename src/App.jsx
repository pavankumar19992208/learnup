import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProgressProvider } from './contexts/ProgressContext';

import LoginScreen from './components/LoginScreen';
import MotivationalModal from './components/MotivationalModal';
import Dashboard from './components/Dashboard';
import ScheduleView from './components/ScheduleView';
import DayDetail from './components/DayDetail';
import RealAppsExplorer from './components/RealAppsExplorer';
import ProgressPage from './components/ProgressPage';
import Navbar from './components/Navbar';

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <ProgressProvider>
      <MotivationalModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<ScheduleView />} />
        <Route path="/day/:weekNum/:dayInWeek" element={<DayDetail />} />
        <Route path="/real-apps" element={<RealAppsExplorer />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ProgressProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/learnup">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
