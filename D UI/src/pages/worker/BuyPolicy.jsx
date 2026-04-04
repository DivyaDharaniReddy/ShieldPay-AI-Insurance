import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { motion } from 'framer-motion';
import { ShieldCheck, CloudRain, Truck, Briefcase, ChevronRight, Zap, Info } from 'lucide-react';

const BuyPolicy = () => {
  const [selectedPlan, setSelectedPlan] = useState('essential');
  const [coverage, setCoverage] = useState(5000);

  const plans = [
    { id: 'essential', name: 'Essential Shield', price: 25, icon: <Truck color="var(--primary)" />, features: ["Accident Coverage", "24h Claim Processing", "Basic Medical Support"], premiumColor: 'var(--primary)' },
    { id: 'pro', name: 'Pro Protector', price: 55, icon: <CloudRain color="var(--secondary)" />, features: ["Everything in Essential", "Weather Downtime Protection", "Income Loss Guarantee"], premiumColor: 'var(--secondary)' },
    { id: 'elite', name: 'Elite Guardian', price: 95, icon: <Zap color="#00F5A0" />, features: ["Everything in Pro", "Health & Dental Support", "Priority AI Approval", "Legal Assistance"], premiumColor: '#00F5A0' },
  ];

  return (
    <div style={{ display: 'flex', background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Sidebar />
      
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px' }}>
        <div style={{ marginBottom: '40px' }}>
           <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Select Your <span style={{ color: 'var(--primary)' }}>Protection Plan</span></h1>
           <p style={{ color: 'var(--text-secondary)' }}>AI-personalized policies based on your gig profile and risk history.</p>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '60px' }}>
           {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                onClick={() => setSelectedPlan(plan.id)}
                className="glass-panel" 
                style={{ padding: '40px', border: selectedPlan === plan.id ? `2px solid ${plan.premiumColor}` : '1px solid var(--glass-border)', cursor: 'pointer', position: 'relative' }}
                whileHover={{ y: -5 }}
              >
                 {selectedPlan === plan.id && (
                    <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: plan.premiumColor, color: 'black', padding: '4px 12px', borderRadius: '10px', fontSize: '10px', fontWeight: 'bold' }}>
                       CURRENT SELECTION
                    </div>
                 )}
                 <div style={{ marginBottom: '30px' }}>{plan.icon}</div>
                 <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{plan.name}</h3>
                 <p style={{ fontSize: '36px', fontWeight: '800', marginBottom: '30px' }}>${plan.price}<span style={{ fontSize: '14px', fontWeight: '400', color: 'var(--text-secondary)' }}>/mo</span></p>
                 
                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {plan.features.map((f, j) => (
                       <div key={j} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                          <ShieldCheck size={18} color={plan.premiumColor} /> {f}
                       </div>
                    ))}
                 </div>
                 
                 <button className="btn-glass" style={{ width: '100%', marginTop: '30px', borderColor: selectedPlan === plan.id ? plan.premiumColor : 'var(--glass-border)' }}>
                    View Coverage Details
                 </button>
              </motion.div>
           ))}
        </div>

        {/* Coverage Slider */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
           <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                 <h3>Coverage Slider</h3>
                 <div style={{ padding: '4px 12px', background: 'rgba(255, 122, 0, 0.1)', color: 'var(--primary)', borderRadius: '10px', fontWeight: 'bold' }}>
                    RECOMMENDED: ${coverage}
                 </div>
              </div>
              <input 
                 type="range" 
                 min="1000" 
                 max="20000" 
                 step="500" 
                 value={coverage} 
                 onChange={(e) => setCoverage(e.target.value)}
                 style={{ width: '100%', height: '8px', cursor: 'pointer', appearance: 'none', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', outline: 'none' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', color: 'var(--text-secondary)', fontSize: '12px' }}>
                 <span>$1,000</span>
                 <span>$10,000</span>
                 <span>$20,000+</span>
              </div>
              
              <div style={{ marginTop: '40px', display: 'flex', gap: '20px', alignItems: 'center', padding: '20px', background: 'rgba(0, 209, 255, 0.05)', borderRadius: '12px' }}>
                 <Info color="var(--secondary)" />
                 <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Increasing your coverage expands your protection against high-impact events like total disability or major illness.</p>
              </div>
           </div>

           <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '30px' }}>Order Summary</h3>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Plan Base</span>
                    <span>${plans.find(p => p.id === selectedPlan).price}.00</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Extra Coverage</span>
                    <span>${(coverage / 1000) * 2}.00</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>AI Discount</span>
                    <span style={{ color: 'var(--success)' }}>-$5.00</span>
                 </div>
                 <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)' }} />
                 <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold' }}>
                    <span>Monthly Total</span>
                    <span style={{ color: 'var(--primary)' }}>${plans.find(p => p.id === selectedPlan).price + (coverage / 1000) * 2 - 5}.00</span>
                 </div>
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '30px', padding: '15px' }}>
                 ACTIVATE POLICY <ChevronRight />
              </button>
           </div>
        </div>
      </main>
    </div>
  );
};

export default BuyPolicy;
