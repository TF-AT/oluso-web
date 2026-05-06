import React from 'react';
import '../App.css';

const NavLink: React.FC<{ href: string, children: React.ReactNode, active?: boolean }> = ({ href, children, active }) => (
  <a href={href} className={`nav-link ${active ? 'active' : ''}`}>
    {children}
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="navbar glass">
      <div className="container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="nav-logo-icon">🛡️</div>
          <span className="nav-logo-text">Oluṣọ</span>
        </div>
        
        <div className="nav-links">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#install">Installation</NavLink>
          <NavLink href="#support">Support</NavLink>
          <div className="nav-user">👤</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
