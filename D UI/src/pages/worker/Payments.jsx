import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { motion } from 'framer-motion';
import { CreditCard, Download, CheckCircle, Clock, Search, Filter } from 'lucide-react';

const PaymentsPage = () => {
  const [payments, setPayments] = useState([
    { id: 'TXN-9021', date: '2024-03-28', type: 'PREMIUM', amount: '$45.00', status: 'CONFIRMED', method: 'Credit Card (•••• 1234)' },
    { id: 'TXN-9020', date: '2024-03-20', type: 'PAYOUT', amount: '+$450.00', status: 'CONFIRMED', method: 'Bank Account (•••• 5678)' },
    { id: 'TXN-9019', date: '2024-02-28', type: 'PREMIUM', amount: '$45.00', status: 'CONFIRMED', method: 'Credit Card (•••• 1234)' },
    { id: 'TXN-9018', date: '2024-02-15', type: 'PREMIUM', amount: '$45.00', status: 'PENDING', method: 'Credit Card (•••• 1234)' },
  ]);

  return (
    <div style={{ display: 'flex', background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
           <div>
              <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Payment <span style={{ color: 'var(--primary)' }}>History</span></h1>
              <p style={{ color: 'var(--text-secondary)' }}>Manage your premiums, payouts, and automated billing methods.</p>
           </div>
           <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn-primary" style={{ padding: '12px 30px' }}><CreditCard size={18} /> Add New Method</button>
           </div>
        </div>

        {/* Payment Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' }}>
           <div className="glass-panel" style={{ padding: '30px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '10px' }}>TOTAL PAID (2024)</p>
              <h3 style={{ fontSize: '32px', fontWeight: '800' }}>$135.00</h3>
           </div>
           <div className="glass-panel" style={{ padding: '30px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '10px' }}>TOTAL PAYOUTS RECEIVED</p>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--success)' }}>$450.00</h3>
           </div>
           <div className="glass-panel" style={{ padding: '30px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '10px' }}>NEXT PREMIUM DUE</p>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)' }}>$45.00 <span style={{ fontSize: '14px', fontWeight: 'normal', color: 'white' }}>on Apr 28</span></h3>
           </div>
        </div>

        {/* Search & Table */}
        <div className="glass-panel" style={{ padding: '30px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                 <div className="glass-card" style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Search size={18} color="rgba(255,255,255,0.4)" />
                    <input type="text" placeholder="Search transactions..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none' }} />
                 </div>
                 <button className="btn-glass" style={{ display: 'flex', gap: '10px' }}><Filter size={18} /> Filters</button>
              </div>
              <button className="btn-glass" style={{ display: 'flex', gap: '10px' }}><Download size={18} /> Export Statement</button>
           </div>

           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '12px', textAlign: 'left' }}>
                 <tr>
                    <th style={{ padding: '20px' }}>TRANSACTION ID</th>
                    <th>DATE</th>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>METHOD</th>
                    <th>STATUS</th>
                    <th>RECEIPT</th>
                 </tr>
              </thead>
              <tbody style={{ fontSize: '14px' }}>
                 {payments.map((p, i) => (
                    <motion.tr 
                       key={i} 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                       style={{ borderBottom: '1px solid var(--glass-border)', transition: 'all 0.3s ease' }}
                    >
                       <td style={{ padding: '20px' }}>{p.id}</td>
                       <td>{p.date}</td>
                       <td>
                          <span style={{ padding: '4px 12px', background: p.type === 'PAYOUT' ? 'rgba(0, 245, 160, 0.1)' : 'rgba(255, 122, 0, 0.1)', color: p.type === 'PAYOUT' ? 'var(--success)' : 'var(--primary)', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' }}>
                            {p.type}
                          </span>
                       </td>
                       <td style={{ fontWeight: 'bold' }}>{p.amount}</td>
                       <td style={{ color: 'var(--text-secondary)' }}>{p.method}</td>
                       <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                             {p.status === 'CONFIRMED' ? <CheckCircle size={14} color="var(--success)" /> : <Clock size={14} color="var(--primary)" />}
                             {p.status}
                          </div>
                       </td>
                       <td>
                          <button className="btn-glass" style={{ padding: '6px 12px', fontSize: '10px' }}>VIEW</button>
                       </td>
                    </motion.tr>
                 ))}
              </tbody>
           </table>
        </div>
      </main>
    </div>
  );
};

export default PaymentsPage;
