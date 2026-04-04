import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Bell, CloudLightning, Activity, DollarSign, ArrowUpRight, TrendingDown, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { getWorkerProfile } from '../../services/MockApi';

const WorkerDashboard = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const profile = getWorkerProfile();
    setData(profile.data);
    
    const target = profile.data.protectedEarnings;
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < target) return Math.min(prev + (target / 50), target);
        clearInterval(interval);
        return target;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  const renderContent = () => {
    if (location.pathname === '/worker/risk') {
      return (
        <div className="glass-panel" style={{ padding: '60px', textAlign: 'center' }}>
           <Activity size={64} color="var(--primary)" style={{ marginBottom: '30px' }} className="ai-glow" />
           <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Deep Neural Risk Insights</h2>
           <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>Detailed analysis for your current gig profile. Your safety score is calculated using multi-vector data including environmental triggers, historical volatility, and sector trends.</p>
           
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
              {["Environmental Stability", "Income Consistency", "Payout Reliability"].map((text, i) => (
                 <div key={i} className="glass-card" style={{ padding: '30px' }}>
                    <ShieldCheck size={32} color="var(--success)" style={{ marginBottom: '15px' }} />
                    <h4>{text}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '10px' }}>Verified High: 98% Accuracy</p>
                 </div>
              ))}
           </div>
        </div>
      );
    }

    // Default Overview
    return (
      <>
        {/* Worker Widgets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '40px' }}>
          <motion.div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }} whileHover={{ scale: 1.02 }}>
             <h3 style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: 'bold' }}>REAL-TIME RISK SHIELD</h3>
             <div style={{ position: 'relative', width: '190px', height: '190px', margin: '0 auto' }}>
                <svg width="190" height="190" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.03)" strokeWidth="6" fill="none" />
                    <motion.circle cx="50" cy="50" r="45" stroke="var(--primary)" strokeWidth="6" fill="none" strokeDasharray="283" initial={{ strokeDashoffset: 283 }} animate={{ strokeDashoffset: 283 - (283 * data.riskScore / 100) }} transition={{ duration: 2.5, ease: "circOut" }} strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 8px var(--primary-glow))' }} />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                   <span style={{ fontSize: '52px', fontWeight: '900' }}>{Math.round(data.riskScore)}</span>
                   <span style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'block', marginTop: '-5px' }}>SAFE %</span>
                </div>
             </div>
          </motion.div>

          <div className="glass-panel" style={{ padding: '40px' }}>
             <h3 style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '40px', fontWeight: 'bold' }}>INSURED ASSETS</h3>
             <span style={{ fontSize: '58px', fontWeight: '900', letterSpacing: '-2px' }}>${counter.toLocaleString()}</span>
             <p style={{ color: 'var(--success)', marginTop: '20px' }}>Trending +12.5% Up</p>
          </div>

          <div className="glass-panel" style={{ padding: '40px', borderTop: '4px solid var(--secondary)' }}>
             <h3 style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: 'bold' }}>AI ADVISOR HUB</h3>
             {data.recommendations.map((rec, i) => (
                <div key={i} className="glass-card-neon" style={{ padding: '20px', marginBottom: '10px' }}>
                   <h5>{rec.title}</h5>
                   <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{rec.description}</p>
                </div>
             ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
           <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '30px' }}>Active Protection</h3>
              {data.activePolicies.map((p, i) => (
                 <div key={i} className="glass-card" style={{ padding: '20px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{p.type}</span>
                    <span style={{ color: 'var(--success)' }}>{p.status}</span>
                 </div>
              ))}
           </div>
           <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '30px' }}>Logistics</h3>
              <div style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', left: '17px', top: '0', bottom: '0', width: '2px', background: 'var(--glass-border)' }}></div>
                 {data.recentClaims.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: '25px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                       <div style={{ width: '36px', height: '36px', background: 'var(--bg-deep)', border: '2px solid #00F5A0', borderRadius: '50%' }}></div>
                       <span>{c.type} - {c.amount}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ display: 'flex', background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Sidebar isAdmin={false} />
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
           <h1 style={{ fontSize: '36px', fontWeight: '800' }}>Worker <span style={{ color: 'var(--primary)' }}>Portal</span></h1>
           <div className="glass-panel" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '18px' }}>
              <CloudLightning size={24} color="var(--secondary)" />
              <div>
                 <p style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>ENVIRONMENT</p>
                 <p style={{ fontWeight: 'bold' }}>{data.environment.weather} • {data.environment.location}</p>
              </div>
           </div>
        </div>

        {renderContent()}

      </main>
    </div>
  );
};

export default WorkerDashboard;
