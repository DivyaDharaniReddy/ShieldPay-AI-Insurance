import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Users, ShieldAlert, FileText, TrendingUp, Search, Filter, AlertTriangle, Check, X, Shield, RefreshCw } from 'lucide-react';
import { getAdminStats } from '../../services/MockApi';

const COLORS = ['#FF7A00', '#00D1FF', '#00F5A0', '#FF4D4D'];

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setStats(getAdminStats().data);
  }, []);

  if (!stats) return null;

  const renderContent = () => {
    const path = location.pathname;

    if (path === '/admin/fraud') {
      return (
        <div className="glass-panel" style={{ padding: '40px', borderLeft: '6px solid var(--error)' }}>
           <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '40px' }}>Fraud Neural Hub (Direct Feed)</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {stats.fraudQueue.map((item, i) => (
                 <div key={i} className="glass-card" style={{ padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h4 style={{ fontSize: '20px', fontWeight: '800' }}>{item.worker}</h4>
                        <p style={{ color: 'var(--error)', fontWeight: 'bold' }}>Risk: {item.riskLevel}</p>
                    </div>
                    <p style={{ flex: 1, marginLeft: '40px' }}>{item.reason}</p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button className="btn-glass" style={{ color: 'var(--success)' }}>Approve</button>
                        <button className="btn-glass" style={{ color: 'var(--error)' }}>Reject</button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      );
    }

    if (path === '/admin/workers') {
       return (
         <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '40px' }}>Worker Registry</h3>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
               <thead>
                  <tr style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--glass-border)' }}>
                     <th style={{ padding: '15px' }}>NAME</th>
                     <th>ID</th>
                     <th>RISK LEVEL</th>
                     <th>STATUS</th>
                     <th>ACTIONS</th>
                  </tr>
               </thead>
               <tbody>
                  {["Alex Johnson", "Sarah Miller", "John Smith"].map((name, i) => (
                     <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                        <td style={{ padding: '15px' }}>{name}</td>
                        <td>W-100{i}</td>
                        <td><span style={{ color: 'var(--success)' }}>LOW</span></td>
                        <td>ACTIVE</td>
                        <td><button className="btn-glass" style={{ padding: '5px 15px', fontSize: '12px' }}>VIEW</button></td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
       );
    }

    // Default Intelligence Dashboard View
    return (
      <>
        {/* Global Admin Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '40px' }}>
          {[
            { label: 'Ecosystem Workers', value: stats.totalWorkers.toLocaleString(), icon: <Users size={20} />, trend: '+12.4%', color: 'var(--primary)' },
            { label: 'Live Risk Policies', value: stats.activePolicies.toLocaleString(), icon: <FileText size={20} />, trend: '+5.2%', color: 'var(--secondary)' },
            { label: 'Daily Claims (AI)', value: stats.claimsToday, icon: <TrendingUp size={20} />, trend: '-2.1%', color: 'var(--success)' },
            { label: 'Critical Neural Alerts', value: stats.fraudAlerts, icon: <ShieldAlert size={20} />, trend: 'MANUAL ACTION', color: 'var(--error)' },
          ].map((stat, i) => (
            <motion.div key={i} className="glass-panel" style={{ padding: '30px', borderBottom: `4px solid ${stat.color}` }} whileHover={{ scale: 1.05 }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                     {stat.icon}
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: '900', color: stat.color, letterSpacing: '1px' }}>{stat.trend}</span>
               </div>
               <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '600' }}>{stat.label}</p>
               <h3 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-1px' }}>{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Data Architecture Intelligence */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginBottom: '40px' }}>
           <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '35px', fontSize: '20px', fontWeight: '800' }}>Global Revenue Velocity (Projected)</h3>
              <div style={{ width: '100%', height: '320px' }}>
                 <ResponsiveContainer>
                    <LineChart data={stats.revenueData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                       <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" fontSize={12} tickLine={false} axisLine={false} />
                       <YAxis stroke="rgba(255,255,255,0.2)" fontSize={12} tickLine={false} axisLine={false} />
                       <Tooltip contentStyle={{ background: 'rgba(13, 13, 18, 0.9)', border: '1px solid rgba(255,122,0,0.3)', borderRadius: '16px', backdropFilter: 'blur(10px)' }} />
                       <Line type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={4} dot={{ fill: 'var(--primary)', r: 6, strokeWidth: 0 }} />
                    </LineChart>
                 </ResponsiveContainer>
              </div>
           </div>

           <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '35px', fontSize: '20px', fontWeight: '800' }}>Policy Market Share</h3>
              <div style={{ width: '100%', height: '320px' }}>
                 <ResponsiveContainer>
                    <PieChart>
                       <Pie data={stats.policyDistribution} innerRadius={70} outerRadius={100} paddingAngle={8} dataKey="value">
                          {stats.policyDistribution.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                          ))}
                       </Pie>
                       <Tooltip contentStyle={{ background: 'rgba(13, 13, 18, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }} />
                    </PieChart>
                 </ResponsiveContainer>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px' }}>
                    {stats.policyDistribution.map((entry, index) => (
                       <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: '700' }}>
                          <div style={{ width: '12px', height: '12px', background: COLORS[index], borderRadius: '4px' }}></div>
                          <span style={{ color: 'var(--text-secondary)' }}>{entry.name} ({entry.value}%)</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </>
    );
  };

  return (
    <div style={{ display: 'flex', background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Sidebar isAdmin={true} />
      
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px', background: 'radial-gradient(circle at bottom left, rgba(255, 122, 0, 0.05), transparent 60%)' }}>
        {/* Intelligence Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
           <div>
              <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '8px' }}>Neural <span style={{ color: 'var(--primary)' }}>Control Hub</span></h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                 <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>System Latency: <span style={{ color: 'var(--success)' }}>18ms</span> • Database: <span style={{ color: 'var(--success)' }}>SYNCED</span></p>
                 <RefreshCw size={14} color="var(--text-secondary)" className="ai-glow" />
              </div>
           </div>
           <div style={{ display: 'flex', gap: '25px' }}>
              <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', padding: '10px 24px', gap: '15px', borderRadius: '14px' }}>
                 <Search size={22} color="var(--text-secondary)" />
                 <input type="text" placeholder="Global system lookup..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none', width: '280px', fontSize: '15px' }} />
              </div>
              <button className="btn-primary" style={{ padding: '12px 30px', fontSize: '14px' }}><Shield size={18} /> GENERATE REPORT</button>
           </div>
        </div>

        {renderContent()}

      </main>
    </div>
  );
};

export default AdminDashboard;
