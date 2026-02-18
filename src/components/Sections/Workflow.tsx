import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

export const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Process Overview
           </span>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Operational Workflow for <br/> NYC Façade Cleaning</h2>
           <p className="text-gray-400 text-lg">Coordinated planning, execution, and reporting for NYC commercial properties.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>

           {[
             { num: '01', title: 'Site Evaluation', desc: 'Preliminary evaluation to define project scope and identify building-specific access constraints.' },
             { num: '02', title: 'Operational Planning', desc: 'Development of site safety plans and logistical coordination as required for urban operations.' },
             { num: '03', title: 'Façade Cleaning', desc: 'Drone-assisted cleaning execution scheduled to minimize site impact based on property requirements.' },
             { num: '04', title: 'Project Deliverables', desc: 'Provision of before/after documentation and a formal project completion summary on request.' }
           ].map((step, i) => (
             <div key={i} className="relative z-10 bg-navy-800/80 backdrop-blur border border-white/5 p-6 hover:border-accent/30 transition-colors group rounded-sm">
                <div className="w-10 h-10 bg-navy-900 border border-white/10 flex items-center justify-center text-accent font-bold mb-6 group-hover:bg-accent group-hover:text-white transition-colors shadow-lg">
                   {step.num}
                </div>
                <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/intake">
            <Button className="mb-8">Request Site Assessment</Button>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">verified</span> FAA Part 107 Certified</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">shield</span> COI Available on Request</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-base">schedule</span> Off-Hour Scheduling (Where Feasible)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
