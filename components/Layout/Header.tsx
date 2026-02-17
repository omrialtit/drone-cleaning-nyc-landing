import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-navy-900/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold tracking-tighter text-white">
            SKYCLEAN <span className="text-accent">NYC</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Case Studies', 'Safety'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex items-center gap-6">
          <a href="tel:+12125550199" className="hidden lg:flex items-center gap-2 text-white hover:text-accent transition-colors">
            <span className="material-symbols-outlined text-accent">call</span>
            <span className="font-semibold tracking-wide">212.555.0199</span>
          </a>
          
          <Link to="/intake">
            <Button variant="outline" className="text-xs px-4 py-2 border-accent/50 text-accent hover:bg-accent hover:text-white">
              Client Portal
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
