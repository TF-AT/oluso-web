import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div className="nav-logo-icon" style={{ width: '24px', height: '24px', fontSize: '14px' }}>🛡️</div>
              <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Oluṣọ</span>
            </div>
            <p style={{ color: 'var(--on-surface-muted)', maxWidth: '280px', fontSize: '14px' }}>
              Institutional-grade security for the modern African citizen. Always watching. Always ready.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '14px', marginBottom: '24px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Product</h4>
            <ul className="footer-list">
              <li>Safety Features</li>
              <li>Duress Protocol</li>
              <li>Intelligence Network</li>
              <li>Pricing</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '14px', marginBottom: '24px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contact</h4>
            <ul className="footer-list">
              <li>📧 safety@oluso.app</li>
              <li>📍 Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Oluṣọ Tech. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
