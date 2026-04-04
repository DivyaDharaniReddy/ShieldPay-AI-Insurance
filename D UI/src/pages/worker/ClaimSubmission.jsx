import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, MapPin, Camera, CheckCircle2, ChevronRight, FileText, AlertTriangle } from 'lucide-react';

const ClaimSubmission = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ type: 'health', date: '', amount: '', description: '', location: 'Mumbai, IN' });

  const steps = ["Details", "Documents", "Verification", "AI Validation"];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            key="step1" 
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <label style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>CLAIM TYPE</label>
                   <select className="glass-card" style={{ padding: '14px', color: 'white', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)' }}>
                      <option value="health">Health Emergency</option>
                      <option value="income">Income Protection</option>
                      <option value="accident">Accident Relief</option>
                      <option value="weather">Weather Delay</option>
                   </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <label style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>INCIDENT DATE</label>
                   <input type="date" className="glass-card" style={{ padding: '14px', color: 'white', border: '1px solid var(--glass-border)' }} />
                </div>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>CLAIM DESCRIPTION</label>
                <textarea 
                  className="glass-card" 
                  style={{ padding: '14px', color: 'white', border: '1px solid var(--glass-border)', minHeight: '120px', resize: 'none' }} 
                  placeholder="Describe the incident in detail for AI analysis..."
                />
             </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            key="step2" 
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
             <h4 style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Upload supporting documents (Reports, Bills, IDs)</h4>
             <div style={{ border: '2px dashed var(--glass-border)', borderRadius: '16px', padding: '60px', textAlign: 'center', cursor: 'pointer' }}>
                <Upload size={48} color="var(--primary)" style={{ margin: '0 auto 20px' }} />
                <p>Drag & Drop files here, or <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Browse Files</span></p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '10px' }}>Maximum file size: 10MB (JPG, PNG, PDF)</p>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                {["hospital_bill.jpg", "id_card.png"].map((file, i) => (
                   <div key={i} className="glass-card" style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
                      <FileText size={16} /> {file} <span style={{ marginLeft: 'auto', color: 'var(--success)' }}>UPLOADED</span>
                   </div>
                ))}
             </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            key="step3" 
            style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', textAlign: 'center' }}
          >
             <div style={{ width: '120px', height: '120px', background: 'rgba(0, 209, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--secondary)' }}>
                <MapPin size={48} color="var(--secondary)" />
             </div>
             <div>
                <h4 style={{ fontSize: '22px', marginBottom: '10px' }}>Verify Your Location</h4>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>We need to confirm your location at the time of incident to match against risk trigger data.</p>
             </div>
             <div className="glass-card" style={{ padding: '20px 40px', fontSize: '18px', fontWeight: 'bold', border: '1px solid var(--secondary)' }}>
                {formData.location}
             </div>
             <button className="btn-glass" style={{ display: 'flex', gap: '10px' }}><Camera size={18} /> Update Location via Photo</button>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            key="step4" 
            style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}
          >
             <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                   <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      style={{ position: 'absolute', inset: 0, border: '4px solid transparent', borderTopColor: 'var(--primary)', borderRadius: '50%' }}
                   />
                   <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 color="var(--primary)" size={48} />
                   </div>
                </div>
             </div>
             <div>
                <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>AI Verification in Progress</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Our neural engine is analyzing your claim details and documentation.</p>
             </div>
             
             <div className="glass-panel" style={{ padding: '20px', textAlign: 'left', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', gap: '15px', color: 'var(--success)', marginBottom: '12px' }}>
                   <CheckCircle2 size={18} /> Document Validity: 100% Match
                </div>
                <div style={{ display: 'flex', gap: '15px', color: 'var(--success)', marginBottom: '12px' }}>
                   <CheckCircle2 size={18} /> Incident Verification: GPS Matches Risk Heatmap
                </div>
                <div style={{ display: 'flex', gap: '15px', color: 'var(--primary)' }}>
                   <AlertTriangle size={18} /> Final Review: Flagged for payout simulation
                </div>
             </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div style={{ display: 'flex', background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
           <div style={{ marginBottom: '60px' }}>
              <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>File a <span style={{ color: 'var(--primary)' }}>Smart Claim</span></h1>
              <p style={{ color: 'var(--text-secondary)' }}>Complete a few steps to activate your instant AI-powered payout.</p>
           </div>

           {/* Stepper Progress Bar */}
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '24px', left: '40px', right: '40px', height: '2px', background: 'var(--glass-border)', zIndex: 0 }}>
                 <motion.div 
                    initial={{ width: '0%' }}
                    animate={{ width: `${(step - 1) * 33.33}%` }}
                    style={{ height: '100%', background: 'var(--primary)' }}
                 />
              </div>
              {steps.map((s, i) => (
                 <div key={i} style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '80px' }}>
                    <div style={{ 
                       width: '50px', height: '50px', borderRadius: '50%', margin: '0 auto 10px',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', 
                       background: step > i + 1 ? 'var(--primary)' : step === i + 1 ? 'var(--bg-deep)' : 'var(--bg-deep)',
                       border: step >= i + 1 ? '2px solid var(--primary)' : '2px solid var(--glass-border)',
                       color: step > i + 1 ? 'black' : 'white',
                       fontWeight: 'bold',
                       transition: 'all 0.3s ease'
                    }}>
                       {step > i + 1 ? <CheckCircle2 size={24} /> : i + 1}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: step === i + 1 ? 'bold' : 'normal', color: step >= i + 1 ? 'white' : 'var(--text-secondary)' }}>{s}</span>
                 </div>
              ))}
           </div>

           {/* Form Area */}
           <div className="glass-panel" style={{ padding: '60px', minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                {renderStep()}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
                 <button 
                   onClick={prevStep} 
                   className="btn-glass" 
                   style={{ visibility: step === 1 ? 'hidden' : 'visible', padding: '12px 30px' }}
                 >
                    PREVIOUS
                 </button>
                 <button 
                   onClick={nextStep} 
                   className="btn-primary" 
                   style={{ padding: '12px 40px' }}
                 >
                    {step === 4 ? "COMPLETE SUBMISSION" : "NEXT STEP"} <ChevronRight />
                 </button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default ClaimSubmission;
