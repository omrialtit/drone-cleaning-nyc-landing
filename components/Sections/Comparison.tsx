import React from 'react';
import { Link } from 'react-router-dom';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between border-l-4 border-accent pl-6">
          <div className="max-w-2xl">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Executive Briefing</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Operational Efficiency for NYC High-Rise Façade Cleaning</h2>
            <p className="text-gray-400">Comparing traditional access methods against modern drone-assisted logistics.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional/Problem */}
          <div className="glass-panel p-8 md:p-12 rounded-sm border-l-4 border-l-gray-600">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-500">construction</span>
              Conventional Access Methods
            </h3>
            <ul className="space-y-6">
              {[
                { title: 'Site Disruption', desc: 'Extended setup periods involving sidewalk sheds and restricted pedestrian access.' },
                { title: 'Resource Intensity', desc: 'Significant personnel and hardware requirements for high-altitude manual labor.' },
                { title: 'Project Timelines', desc: 'Lengthy deployment cycles that can impact annual maintenance schedules.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <span className="material-symbols-outlined text-gray-600 mt-1">close</span>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="glass-panel p-8 md:p-12 rounded-sm border-l-4 border-l-accent bg-gradient-to-br from-navy-800 to-accent/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">flight</span>
              Drone-Assisted Cleaning
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                { title: 'Mitigated Site Impact', desc: 'Reduction in staging requirements and visible on-site infrastructure.' },
                { title: 'Risk Management', desc: 'Reduced personnel exposure to high-altitude environments during execution.' },
                { title: 'Deployment Speed', desc: 'Streamlined cycles where feasible, based on site requirements.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-right">
              <Link to="/intake" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-white transition-colors uppercase tracking-widest border-b border-accent/30 pb-1 hover:border-accent">
                Request Site Assessment
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
