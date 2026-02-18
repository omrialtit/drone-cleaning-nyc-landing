import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

// Configuration for the job images
const ACTIVE_JOB = {
  id: 1,
  title: "Case Study - NYC Commercial Glass Restoration",
  subtitle: "Drone-powered exterior window cleaning for high-rise buildings",
  beforeSrc: "https://res.cloudinary.com/ducnj44ni/image/upload/v1771361235/hf_20260215_231948_35ab7e25-6a3c-49c1-8980-1e3de9fa89d5_ghk5qu.webp",
  afterSrc: "https://res.cloudinary.com/ducnj44ni/image/upload/v1771361416/hf_20260215_233049_1cfc1862-a7da-4782-8812-bf8d9fc42d14_vedxwx.webp",
  alt: "Commercial facade cleaning comparison"
};

export const BeforeAfter: React.FC = () => {
  // Default to 50% to show the comparison immediately.
  const [sliderPosition, setSliderPosition] = useState(50); 
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle resizing/dragging logic
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percent, 0), 100));
  }, []);

  const startResize = useCallback(() => setIsResizing(true), []);
  const stopResize = useCallback(() => setIsResizing(false), []);

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (isResizing) handleMove(e.clientX);
    };
    const handleGlobalTouchMove = (e: TouchEvent) => {
        if (isResizing) handleMove(e.touches[0].clientX);
    };
    const handleGlobalUp = () => stopResize();

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [isResizing, handleMove, stopResize]);

  return (
    <section id="case-studies" className="py-24 bg-navy-900 relative border-t border-white/5 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Portfolio Snapshot</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {ACTIVE_JOB.title}
            </h2>
            <p className="text-gray-400 text-lg font-light tracking-wide">{ACTIVE_JOB.subtitle}</p>
        </div>

        {/* Comparison Slider Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden cursor-col-resize select-none border border-white/10 shadow-2xl group touch-none"
          onMouseDown={startResize}
          onTouchStart={startResize}
        >
          {/* Layer 1: AFTER Image (Background) - Always fully rendered */}
          <img 
            src={ACTIVE_JOB.afterSrc} 
            alt="Post-clean result"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Layer 2: BEFORE Image (Foreground) - Clipped by slider position */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={ACTIVE_JOB.beforeSrc} 
              alt="Pre-clean condition"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]" 
              draggable={false}
            />
            
            {/* Subtle Glass/Reflection Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>

          {/* Slider Handle Line */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            style={{ left: `${sliderPosition}%` }}
          >
             {/* Circular Handle Button */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-navy-900/10">
               <span className="material-symbols-outlined text-navy-900 text-lg md:text-xl font-bold">compare_arrows</span>
             </div>
          </div>

          {/* Labels (Overlay) */}
          <div className={`absolute top-6 left-6 transition-opacity duration-300 ${sliderPosition < 10 ? 'opacity-0' : 'opacity-100'}`}>
            <span className="bg-black/70 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border border-white/10 shadow-lg">
              Pre-Clean
            </span>
          </div>

          <div className={`absolute top-6 right-6 transition-opacity duration-300 ${sliderPosition > 90 ? 'opacity-0' : 'opacity-100'}`}>
            <span className="bg-accent/90 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border border-white/10 shadow-lg">
              Post-Clean
            </span>
          </div>

          {/* Interaction Hint */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="text-white/90 text-[10px] uppercase tracking-widest drop-shadow-md bg-black/50 px-3 py-1 rounded backdrop-blur-sm border border-white/10">Drag to compare</span>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
            <p className="text-xs md:text-sm text-gray-500 italic flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm text-accent">check_circle</span>
                Completed using autonomous drone washing system - zero scaffolding required
            </p>
        </div>

        {/* Description & CTA */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10">
               <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent">
                        <span className="material-symbols-outlined text-sm">block</span>
                    </div>
                    <span className="text-gray-300 text-sm font-bold uppercase tracking-wide">No Ropes</span>
               </div>
               <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent">
                        <span className="material-symbols-outlined text-sm">construction</span>
                    </div>
                    <span className="text-gray-300 text-sm font-bold uppercase tracking-wide">No Scaffolding</span>
               </div>
               <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-accent">
                        <span className="material-symbols-outlined text-sm">speed</span>
                    </div>
                    <span className="text-gray-300 text-sm font-bold uppercase tracking-wide">Faster & Safer</span>
               </div>
           </div>

           <Link to="/intake">
              <Button className="w-full sm:w-auto px-8 py-4 text-base shadow-xl shadow-accent/10">Request Building Assessment</Button>
           </Link>
        </div>
      </div>
    </section>
  );
};
