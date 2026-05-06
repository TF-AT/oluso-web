import React from 'react';
import '../App.css';

const Step: React.FC<{ num: string, title: string, desc: string }> = ({ num, title, desc }) => (
  <div className="step-item">
    <div className="step-number">{num}</div>
    <div>
      <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--on-background)' }}>{title}</h4>
      <p style={{ color: 'var(--on-surface-muted)', fontSize: '15px' }}>{desc}</p>
    </div>
  </div>
);

const Workflow: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div className="workflow-grid">
          <div>
            <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>Simple Workflow.<br />Professional Defense.</h2>
            
            <Step 
              num="1" 
              title="Configure" 
              desc="Set your duress codes, choose your trusted inner circle, and calibrate your physical triggers." 
            />
            <Step 
              num="2" 
              title="Secure" 
              desc="The app runs as a low-power background sentinel, monitoring for your specific physical trigger patterns." 
            />
            <Step 
              num="3" 
              title="Respond" 
              desc="When triggered, responders receive live audio, GPS, and situation data instantly via multi-channel alerts." 
            />
          </div>
          
          <div className="flex-center" style={{ 
            position: 'relative', 
            backgroundColor: 'var(--background)', 
            borderRadius: '40px', 
            padding: '20px', 
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden'
          }}>
             <div className="phone-mockup">
                <div style={{ width: '60px', height: '4px', backgroundColor: '#333', alignSelf: 'center', borderRadius: '2px', marginBottom: '20px' }} />
                <div className="phone-screen">
                  <div className="phone-sos-button">
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>SOS</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
