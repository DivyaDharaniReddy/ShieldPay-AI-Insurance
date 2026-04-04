import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import WorkerDashboard from './pages/worker/Dashboard';
import BuyPolicy from './pages/worker/BuyPolicy';
import ClaimSubmission from './pages/worker/ClaimSubmission';
import PaymentsPage from './pages/worker/Payments';
import AdminDashboard from './pages/admin/AdminDashboard';

// Simple Settings Shell
const Settings = () => <WorkerDashboard />; 

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Worker Routes */}
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          <Route path="/worker/buy-policy" element={<BuyPolicy />} />
          <Route path="/worker/file-claim" element={<ClaimSubmission />} />
          <Route path="/worker/payments" element={<PaymentsPage />} />
          <Route path="/worker/*" element={<WorkerDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/fraud" element={<AdminDashboard />} />
          <Route path="/admin/workers" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />

          {/* Settings Shell */}
          <Route path="/settings" element={<Settings />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
