import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter text-white">
              SKYCLEAN <span className="text-accent">NYC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              NYC's premier drone-assisted façade maintenance solution. Safer, faster, and compliant with FAA & DOB regulations.
            </p>
            <div className="flex gap-4 pt-2">
              {['linkedin', 'twitter', 'instagram'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">public</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Facade Cleaning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Window Washing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Soft Wash</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Inspections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/intake" className="hover:text-accent transition-colors">Get A Quote</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Standards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">NYC HQ</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent mt-0.5">location_on</span>
                <span>1 World Trade Center, Suite 4500<br/>New York, NY 10007</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">call</span>
                <a href="tel:+12125550199" className="hover:text-white transition-colors">212.555.0199</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">mail</span>
                <a href="mailto:ops@skycleannyc.com" className="hover:text-white transition-colors">ops@skycleannyc.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SKYCLEAN NYC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
