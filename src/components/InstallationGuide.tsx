import React from 'react';
import '../App.css';

const Step: React.FC<{ number: string, title: string, text: string }> = ({ number, title, text }) => (
  <div className="step-item">
    <div className="step-number">{number}</div>
    <div>
      <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--on-background)' }}>{title}</h4>
      <p style={{ color: 'var(--on-surface-muted)', fontSize: '15px' }}>{text}</p>
    </div>
  </div>
);

const InstallationGuide: React.FC = () => {
  return (
    <section id="install" className="section-padding">
      <div className="container">
        <div className="install-container">
          <div>
            <div className="badge" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)', marginBottom: '24px' }}>
              Soft Launch Guide
            </div>
            
            <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>How to Install Oluṣọ</h2>
            <p style={{ color: 'var(--on-surface-muted)', marginBottom: '40px', fontSize: '17px' }}>
              Since we're in soft launch, the app is distributed directly via APK. Follow these simple steps to secure your device.
            </p>

            <Step 
              number="1" 
              title="Download the APK" 
              text="Click the 'Download Now' button to get the latest version of Oluṣọ directly to your Android device." 
            />
            <Step 
              number="2" 
              title="Enable Unknown Sources" 
              text="If prompted, go to Settings > Security and enable 'Install from Unknown Sources' or 'Install Unknown Apps'." 
            />
            <Step 
              number="3" 
              title="Launch & Secure" 
              text="Open the downloaded file, follow the installation prompts, and complete your safety profile." 
            />
          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="install-mockup">
              <div style={{ fontSize: '40px' }}>📱</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--on-background)', marginBottom: '4px' }}>Android 8.0+ Required</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface-muted)' }}>Compatible with all major manufacturers</div>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '60px',
              height: '60px',
              backgroundColor: 'var(--primary)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(12deg)',
              boxShadow: 'var(--shadow-lg)',
              fontSize: '24px'
            }}>✓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
