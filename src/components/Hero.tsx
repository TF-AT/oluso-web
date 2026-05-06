import React from 'react';
import '../App.css';

const Hero: React.FC = () => {
  const APK_URL = "#"; // Replace with actual APK link when ready
  
  const scrollToInstall = () => {
    document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-pulse" />

      <div className="container">
        <div className="hero-content animate-fade-in">
          <div className="badge" style={{ backgroundColor: 'rgba(229, 57, 53, 0.1)', color: 'var(--primary)', border: '1px solid rgba(229, 57, 53, 0.2)', marginBottom: '24px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--primary)',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulseRed 2s infinite',
              marginRight: '8px'
            }} />
            LIVE SECURITY INTELLIGENCE ACTIVE
          </div>

          <h1 className="hero-title">
            The panic button you <br />
            <span style={{ color: 'var(--primary)' }}>never have to reach for.</span>
          </h1>

          <p className="hero-subtitle">
            A silent, intelligent personal safety companion built for high-risk environments. Featuring <span style={{ color: 'var(--on-background)', fontWeight: 600 }}>Invisible Triggers</span> and absolute reliability when seconds count.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={APK_URL} className="btn btn-primary">
              Download Now <span>📥</span>
            </a>
            <button onClick={scrollToInstall} className="btn btn-secondary">
              How It Works
            </button>
          </div>
          
          <div className="hero-trust">
            <div className="stars">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <span style={{ fontSize: '14px', color: 'var(--on-surface-muted)' }}>
              Trusted by <span style={{ color: 'var(--on-background)', fontWeight: 600 }}>12,000+</span> Nigerians
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
