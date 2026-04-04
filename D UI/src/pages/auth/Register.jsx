import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, User, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'worker' });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const checkStrength = (pass) => {
    let strength = 0;
    if (pass.length > 5) strength += 25;
    if (/[A-Z]/.test(pass)) strength += 25;
    if (/[0-9]/.test(pass)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 25;
    setPasswordStrength(strength);
    setFormData({ ...formData, password: pass });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setTimeout(() => navigate('/worker/dashboard'), 1000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-deep)', padding: '20px' }}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel" 
        style={{ padding: '60px 40px', width: '100%', maxWidth: '900px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', overflow: 'hidden' }}
      >
        {/* Left Side: Illustration */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--glass-border)', paddingRight: '60px' }}>
          <Shield size={64} color="var(--primary)" style={{ marginBottom: '30px' }} />
          <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>Begin your journey to <span style={{ color: 'var(--primary)' }}>financial resilience</span>.</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
            {[
              "Join 1.2M+ protected gig workers.",
              "Instant payouts when policies trigger.",
              "No medical exams or tedious paperwork.",
              "AI-driven risk assessment in real-time."
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <CheckCircle size={20} color="var(--success)" />
                <span style={{ color: 'var(--text-secondary)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          <h3 style={{ fontSize: '24px', marginBottom: '30px' }}>Join GigShield AI</h3>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="text" 
                  required
                  placeholder="Full Name"
                  className="glass-card" 
                  style={{ padding: '14px 14px 14px 45px', color: 'white', width: '100%', outline: 'none' }}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="email" 
                  required
                  placeholder="Email Address"
                  className="glass-card" 
                  style={{ padding: '14px 14px 14px 45px', color: 'white', width: '100%', outline: 'none' }}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                <input 
                  type="password" 
                  required
                  placeholder="Create Password"
                  className="glass-card" 
                  style={{ padding: '14px 14px 14px 45px', color: 'white', width: '100%', outline: 'none' }}
                  onChange={(e) => checkStrength(e.target.value)}
                />
            </div>

            {/* Password Strength Meter */}
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${passwordStrength}%` }}
                    style={{ height: '100%', background: passwordStrength < 50 ? 'var(--error)' : passwordStrength < 100 ? 'var(--primary)' : 'var(--success)' }}
                />
            </div>
            {formData.password && (
                <p style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '-10px' }}>
                    {passwordStrength < 50 ? "Weak: Add numbers & symbols" : passwordStrength < 100 ? "Medium: Almost there" : "Strong: Perfect!"}
                </p>
            )}

            <button className="btn-primary" style={{ marginTop: '10px', padding: '15px' }}>
              ACTIVATE MY ACCOUNT
            </button>
            <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)' }}>
                Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Sign In</Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
