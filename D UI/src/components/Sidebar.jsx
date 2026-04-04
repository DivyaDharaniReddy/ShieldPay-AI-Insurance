import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, LayoutDashboard, ShoppingBag, ClipboardList, CreditCard, Settings, LogOut, Users, Zap, ShieldAlert, BarChart3, Activity } from 'lucide-react';

const Sidebar = ({ isAdmin = false }) => {
  const links = isAdmin ? [
    { name: 'Admin Overview', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Fraud Neural Hub', icon: <ShieldAlert size={20} />, path: '/admin/fraud' },
    { name: 'Worker Registry', icon: <Users size={20} />, path: '/admin/workers' },
    { name: 'Claims Audit', icon: <ClipboardList size={20} />, path: '/admin/analytics' },
    { name: 'Global Analytics', icon: <BarChart3 size={20} />, path: '/admin/stats' },
  ] : [
    { name: 'Worker Dashboard', icon: <LayoutDashboard size={20} />, path: '/worker/dashboard' },
    { name: 'Buy Policy', icon: <ShoppingBag size={20} />, path: '/worker/buy-policy' },
    { name: 'My Claims', icon: <ClipboardList size={20} />, path: '/worker/file-claim' },
    { name: 'Earnings & Payouts', icon: <CreditCard size={20} />, path: '/worker/payments' },
    { name: 'AI Risk Insights', icon: <Activity size={20} />, path: '/worker/risk' },
  ];

  return (
    <div style={{ width: '280px', height: '100vh', padding: '40px 20px', borderRight: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', position: 'fixed', left: 0, top: 0, zIndex: 100, background: 'rgba(13, 13, 18, 0.4)', backdropFilter: 'blur(32px)' }}>
      <div style={{ padding: '0 20px', marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Shield color="var(--primary)" size={32} className="ai-glow" />
        <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '1px' }}>GIG<span style={{ color: 'var(--primary)' }}>SHIELD</span></span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {links.map((link, i) => (
          <NavLink 
            key={i} 
            to={link.path}
            style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '14px 20px',
                borderRadius: '16px',
                textDecoration: 'none',
                color: isActive ? 'white' : 'var(--text-secondary)',
                background: isActive ? 'rgba(255, 122, 0, 0.15)' : 'transparent',
                border: isActive ? '1px solid var(--primary-glow)' : '1px solid transparent',
                boxShadow: isActive ? '0 4px 15px rgba(255, 122, 0, 0.1)' : 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
             })}
          >
            {link.icon}
            <span style={{ fontWeight: '500', fontSize: '14px' }}>{link.name}</span>
          </NavLink>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '30px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <NavLink 
            to="/settings"
            style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '14px 20px', borderRadius: '16px', textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
        >
            <Settings size={20} /> <span style={{ fontWeight: '500' }}>System Config</span>
        </NavLink>
        <NavLink 
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '14px 20px', borderRadius: '16px', textDecoration: 'none', color: '#ff4d4d', transition: 'all 0.3s' }}
        >
            <LogOut size={20} /> <span style={{ fontWeight: '500' }}>Logout Session</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
