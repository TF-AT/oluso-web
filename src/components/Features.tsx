import React from 'react';
import '../App.css';

const FeatureCard: React.FC<{ title: string, desc: string, icon: string }> = ({ title, desc, icon }) => (
  <div className={`glass feature-card ${title === 'Threat Wire' ? 'threat-wire' : ''}`}>
    <div className="feature-icon-wrapper">{icon}</div>
    <div className="feature-title-row">
      <h3>{title}</h3>
      {title === 'Threat Wire' && (
        <span className="badge" style={{ fontSize: '10px', backgroundColor: 'var(--accent-soft)', color: 'var(--accent)', padding: '2px 8px', border: '1px solid rgba(255, 179, 0, 0.2)' }}>
          Soon
        </span>
      )}
    </div>
    <p style={{ color: 'var(--on-surface-muted)', fontSize: '15px', lineHeight: 1.6 }}>{desc}</p>
  </div>
);

const Features: React.FC = () => {
  const data = [
    {
      title: 'Invisible Triggers',
      desc: 'Activate SOS via physical volume buttons or a double-shake gesture. Oluṣọ responds even if your screen is locked or your phone is in your pocket.',
      icon: '📱'
    },
    {
      title: 'Duress Mode',
      desc: 'Enter a "Fake Cancel" PIN. The app appears to close while continuing to stream audio and location to responders silently.',
      icon: '🔐'
    },
    {
      title: 'Threat Wire',
      desc: 'Real-time integration with local security intelligence. Receive instant alerts when moving toward high-risk zones or during civil unrest.',
      icon: '✨'
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Invisible Protection. Instant Response.</h2>
          <p style={{ color: 'var(--on-surface-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Engineered to function under duress, Oluṣọ integrates deeply with your device to provide safety without drawing attention.
          </p>
        </div>
        
        <div className="features-grid">
          {data.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
