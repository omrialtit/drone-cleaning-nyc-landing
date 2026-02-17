import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 border-t border-white/5 relative overflow-hidden">
       <div className="absolute inset-0 bg-radial-glow opacity-30"></div>
       
       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
           <span className="material-symbols-outlined text-sm">gavel</span>
           Compliance-First Commercial Operations
         </div>
         
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Request a <span className="text-accent">Site Assessment</span></h2>
         
         <p className="text-xl text-gray-400 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
           Share your address and preferred timeline — we’ll confirm scope and required documentation within 1 business day.
         </p>

         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/intake" className="w-full sm:w-auto">
              <Button fullWidth>Request Site Assessment</Button>
            </Link>
            
            <button 
              className="group flex items-center gap-2 text-white font-bold hover:text-accent transition-colors"
              onClick={() => document.getElementById('safety')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See what’s included
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
         </div>
       </div>
    </section>
  );
};
