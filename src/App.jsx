import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import TracksPage from './pages/TracksPage';
import TrackDetailPage from './pages/TrackDetailPage';
import MentorPage from './pages/MentorPage';
import AchievementsPage from './pages/AchievementsPage';
import SimulatorPage from './pages/SimulatorPage';
import MissionsPage from './pages/MissionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/tracks/:id" element={<TrackDetailPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/simulator" element={<SimulatorPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
