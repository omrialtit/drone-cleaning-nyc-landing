import React from 'react';

export const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-gradient-to-b from-navy-900 to-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Documented Safety Standards</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Operational Compliance for NYC High-Rises</h2>
            <p className="text-gray-400">Our exterior cleaning operations prioritize structured safety planning and adherence to federal and local aviation guidelines.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { tag: 'FAA Certified', title: 'Regulatory Compliance', icon: 'flight', desc: 'FAA Part 107 certified operations with site-specific flight planning and coordination for urban high-rise environments.' },
            { tag: 'Site Controls', title: 'Ground Safety', icon: 'safety_divider', desc: 'Established ground perimeters and visual observers manage pedestrian and vehicle safety during all cleaning cycles.' },
            { tag: 'Documented SOP', title: 'Operating Procedures', icon: 'menu_book', desc: 'Site-specific safety plans and standard operating procedures (SOP) are developed for every engagement.' },
            { tag: 'COI on Request', title: 'Insurance Coverage', icon: 'gpp_good', desc: 'Insurance documentation available prior to scheduling. We provide coverage details as required by property management.' }
          ].map((card, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-sm hover:bg-white/10 transition-all hover:-translate-y-1 group">
               <div className="flex justify-between items-start mb-6">
                 <span className="inline-block px-2 py-1 bg-navy-900 text-gray-400 text-[10px] font-bold uppercase tracking-wider border border-white/10">{card.tag}</span>
                 <span className="material-symbols-outlined text-accent text-3xl opacity-50 group-hover:opacity-100 transition-opacity">{card.icon}</span>
               </div>
               <h3 className="text-white font-bold text-base mb-3">{card.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="bg-navy-900 border border-white/10 rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
           <div>
             <h4 className="text-white font-bold text-sm mb-1">Documentation Available</h4>
             <p className="text-gray-500 text-xs">Our protocols are designed to meet high-altitude operational requirements.</p>
           </div>
           
           <div className="flex gap-8 opacity-70">
              {['Compliance', 'Insurance', 'Protocols'].map(item => (
                <div key={item} className="flex flex-col items-center gap-1 group cursor-pointer">
                   <span className="material-symbols-outlined text-gray-400 group-hover:text-accent transition-colors">description</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
           </div>

           <button className="text-accent text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
             Download Safety Overview (PDF)
             <span className="material-symbols-outlined text-sm">download</span>
           </button>
        </div>
      </div>
    </section>
  );
};
