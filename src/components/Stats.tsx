import React, { useState, useEffect } from 'react';
import '../App.css';

const Stats: React.FC = () => {
  const [responders, setResponders] = useState(12340);
  const [speed, setSpeed] = useState(1.4);

  useEffect(() => {
    const responderInterval = setInterval(() => {
      setResponders(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 3000);

    const speedInterval = setInterval(() => {
      setSpeed(prev => {
        const change = (Math.random() - 0.5) * 0.1;
        const next = prev + change;
        return parseFloat(Math.max(1.1, Math.min(1.8, next)).toFixed(1));
      });
    }, 5000);

    return () => {
      clearInterval(responderInterval);
      clearInterval(speedInterval);
    };
  }, []);

  return (
    <section className="section-padding" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="stats-row">
          <div style={{ maxWidth: '400px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Network Growth</h2>
            <p style={{ color: 'var(--on-surface-muted)' }}>
              Our safety ecosystem is expanding. Join "Trusted Circles"—verified networks of neighbors and professional responders watching over each other.
            </p>
          </div>
          
          <div className="stat-item-group">
            <div>
              <div className="stat-value">
                {(responders / 1000).toFixed(1)}k
              </div>
              <div className="stat-label">Active in Network</div>
            </div>
            <div>
              <div className="stat-value" style={{ color: 'var(--primary)' }}>
                {speed}s
              </div>
              <div className="stat-label">Avg Alert Latency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
