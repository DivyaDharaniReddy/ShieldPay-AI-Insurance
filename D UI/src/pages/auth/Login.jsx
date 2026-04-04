import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, EyeOff, Github, Chrome } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        // Navigate based on role (hardcoded for demo)
        if (formData.email.includes('admin')) {
          navigate('/admin');
        } else {
          navigate('/worker/dashboard');
        }
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-deep)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: 0.1, background: 'linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%)', pointerEvents: 'none' }}></div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-panel" 
        style={{ padding: '60px 40px', width: '100%', maxWidth: '450px', position: 'relative', zIndex: 10 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Shield color="var(--primary)" size={48} style={{ margin: '0 auto 15px' }} />
          <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Log In to <span style={{ color: 'var(--primary)' }}>GigShield</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome back to your protected workspace.</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}>EMAIL ADDRESS</label>
            <input 
              type="email" 
              required
              className="glass-card" 
              style={{ padding: '14px', color: 'white', outline: 'none' }} 
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}>PASSWORD</label>
                <a href="#" style={{ fontSize: '12px', color: 'var(--primary)', textDecoration: 'none' }}>Forgot?</a>
            </div>
            <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  className="glass-card" 
                  style={{ padding: '14px', color: 'white', outline: 'none', width: '100%' }} 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
          </div>

          <button className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '16px' }} disabled={loading}>
            {loading ? "AUTHENTICATING..." : "SIGN IN"}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0', gap: '15px' }}>
            <hr style={{ flex: 1, opacity: 0.1 }} /><span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>OR CONTINUE WITH</span><hr style={{ flex: 1, opacity: 0.1 }} />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-glass" style={{ flex: 1, display: 'flex', gap: '10px', fontSize: '14px' }}><Chrome size={18} /> Google</button>
            <button className="btn-glass" style={{ flex: 1, display: 'flex', gap: '10px', fontSize: '14px' }}><Github size={18} /> GitHub</button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            New to GigShield? <Link to="/register" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
