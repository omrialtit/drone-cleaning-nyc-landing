import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IntakeForm } from '../components/Sections/IntakeForm';

export const Intake: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full transform translate-x-1/4"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-8 group">
             <div className="text-2xl font-bold tracking-tighter text-white opacity-80 group-hover:opacity-100 transition-opacity">
                SKYCLEAN <span className="text-accent">NYC</span>
             </div>
             <div className="flex items-center justify-center gap-1 text-xs text-accent mt-2 font-medium">
               <span className="material-symbols-outlined text-sm">arrow_back</span>
               Back to Home
             </div>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Request a Site Assessment</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Provide your property details below. We confirm scope availability and compliance requirements within 24 hours.
          </p>
        </div>

        <IntakeForm />
        
        <div className="mt-8 flex items-center gap-2 text-gray-600 text-xs">
           <span className="material-symbols-outlined text-sm">lock</span>
           <span>SSL Secure Encryption • B2B Privacy Standards</span>
        </div>
      </div>
    </div>
  );
};
