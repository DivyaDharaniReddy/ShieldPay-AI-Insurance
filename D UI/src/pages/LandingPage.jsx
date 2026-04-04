import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Activity, ChevronRight, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container" style={{ background: 'var(--bg-deep)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Hero AI Glow */}
      <div className="hero-glow" style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }}></div>

      {/* Navbar */}
      <nav style={{ padding: '24px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ fontSize: '24px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield color="var(--primary)" size={32} />
          <span style={{ letterSpacing: '2px' }}>GIG<span style={{ color: 'var(--primary)' }}>SHIELD</span> <span style={{ fontWeight: '300', fontSize: '18px' }}>AI</span></span>
        </div>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#features" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: '500' }}>Features</a>
          <a href="#dashboard" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: '500' }}>Analytics</a>
          <Link to="/login" className="btn-glass" style={{ textDecoration: 'none' }}>Log In</Link>
          <Link to="/register" className="btn-primary" style={{ textDecoration: 'none' }}>Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '120px 64px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 122, 0, 0.1)', border: '1px solid var(--primary-glow)', borderRadius: '30px', color: 'var(--primary)', fontWeight: '700', fontSize: '12px', marginBottom: '24px', letterSpacing: '1px' }}>
            WORLD'S #1 AI-POWERED GIG INSURANCE
          </div>
          <h1 style={{ fontSize: '72px', fontWeight: '800', maxWidth: '900px', margin: '0 auto 24px', lineHeight: '1.1' }}>
            Future-Proof Your Earnings with <span style={{ color: 'var(--primary)' }}>Real-Time AI</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            GigShield AI uses parametric triggers and predictive modeling to offer instant payouts. No paperwork. No waiting. Just protection.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/register" className="btn-primary" style={{ padding: '18px 40px', fontSize: '18px', textDecoration: 'none' }}>
              Protect My Earnings Now <ChevronRight />
            </Link>
            <Link to="/login" className="btn-glass" style={{ padding: '18px 40px', fontSize: '18px', textDecoration: 'none' }}>View AI Dashboard</Link>
          </div>
        </motion.div>

        {/* Animated Background Mesh (Pseudo-canvas) */}
        <div className="mesh-animation" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%', pointerEvents: 'none', opacity: 0.1 }}>
             {/* Imagine complex nodes here */}
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '80px', padding: '60px', background: 'rgba(255, 255, 255, 0.02)', borderY: '1px solid var(--glass-border)' }}>
        {[
          { label: 'WORKERS PROTECTED', value: '1.2M+' },
          { label: 'AVG PAYOUT TIME', value: '18 SEC' },
          { label: 'TRUST SCORE', value: '99.8%' },
          { label: 'CLAIMS AUTOMATED', value: '94%' },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               style={{ fontSize: '36px', fontWeight: '800', color: 'white' }}
            >
              {stat.value}
            </motion.div>
            <div style={{ fontSize: '12px', letterSpacing: '1px', opacity: 0.5, marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: '100px 64px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '42px', marginBottom: '60px' }}>Engineered for the <span style={{ color: 'var(--secondary)' }}>Gig Economy</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {[
            { 
              icon: <Zap color="var(--primary)" />, 
              title: "AI Risk Prediction", 
              desc: "Our neural networks predict income dips before they happen, suggesting policies in real-time."
            },
            { 
              icon: <Activity color="var(--secondary)" />, 
              title: "Automatic Claims", 
              desc: "Weather changes? AQI spikes? Flights delayed? Your claim triggers automatically based on external data."
            },
            { 
              icon: <Lock color="#00F5A0" />, 
              title: "Fraud Detection", 
              desc: "Military-grade AI verification ensures every payout is legitimate and instantaneous."
            },
          ].map((feat, i) => (
            <motion.div 
              key={i} 
              className="glass-card" 
              style={{ padding: '40px' }}
              whileHover={{ scale: 1.02 }}
            >
              <div style={{ marginBottom: '20px' }}>{feat.icon}</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>{feat.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 64px 40px', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Shield color="var(--primary)" size={32} />
              <span>GIG<span style={{ color: 'var(--primary)' }}>SHIELD</span> AI</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>The world's first parametric insurance platform powered by collective intelligence and real-time risk data.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Enterprise", "API Docs"] },
            { title: "Company", links: ["About", "Careers", "Security", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Licensing", "Cookie Policy"] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ marginBottom: '20px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((link, j) => (
                  <li key={j} style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', opacity: 0.3, fontSize: '14px', borderTop: '1px solid var(--glass-border)', paddingTop: '40px' }}>
          &copy; 2026 GigShield AI Technologies. All Rights Reserved. Built for the future of work.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
