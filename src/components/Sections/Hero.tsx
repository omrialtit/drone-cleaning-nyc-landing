import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-navy-900">
      
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-100 animate-cinematic-zoom"
            poster="https://res.cloudinary.com/ducnj44ni/video/upload/v1771430807/hf_20260218_154805_2df5c8d3-c6dd-43e1-9710-9e803fd1ca65_qaruw3.jpg"
          >
            <source src="https://res.cloudinary.com/ducnj44ni/video/upload/v1771430807/hf_20260218_154805_2df5c8d3-c6dd-43e1-9710-9e803fd1ca65_qaruw3.mov" type="video/quicktime" />
            <source src="https://res.cloudinary.com/ducnj44ni/video/upload/v1771430807/hf_20260218_154805_2df5c8d3-c6dd-43e1-9710-9e803fd1ca65_qaruw3.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark Gradient Overlay (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a142d]/95 via-[rgba(10,20,45,0.65)] to-transparent z-10"></div>
        
        {/* Soft Blur Behind Text (Left Side Only) - Limited Width */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[600px] bg-transparent backdrop-blur-[1px] mask-gradient z-10 pointer-events-none"></div>

        {/* Additional Texture/Grid Overlay (Subtle) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center py-20 w-full">
        <div className="max-w-[550px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Commercial Façade Maintenance
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
            Drone-Assisted <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Façade Cleaning</span> <br/>
            for NYC Buildings
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed border-l-2 border-accent/50 pl-6 drop-shadow-md font-light">
            Safer, faster exterior cleaning with minimal tenant disruption. 
            <span className="block mt-2 text-sm text-gray-400 font-mono font-normal">COI/SOP and documentation provided on request.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/intake">
              <Button className="w-full sm:w-auto shadow-xl shadow-accent/20">Request Site Assessment</Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto backdrop-blur-sm bg-black/20 hover:bg-black/40 border-white/20"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
            <span className="material-symbols-outlined text-accent text-lg animate-pulse">videocam</span>
            <span>Operational footage (loop) • Compliance-first planning</span>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-20 border-t border-white/10 bg-navy-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { label: 'FAA Part 107 Certified', icon: 'flight_takeoff' },
              { label: 'Insurance Docs Available', icon: 'verified_user' },
              { label: 'Before/After Deliverables', icon: 'compare' },
              { label: 'Site-Specific Safety', icon: 'engineering' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center py-6 px-4 text-center group hover:bg-white/5 transition-colors cursor-default">
                <span className="material-symbols-outlined text-accent mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cinematic-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-cinematic-zoom {
          animation: cinematic-zoom 20s ease-in-out infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, black 0%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, black 0%, transparent 100%);
        }
      `}</style>
    </section>
  );
};
