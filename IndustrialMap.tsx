
import React, { useState } from 'react';
import { INDUSTRIAL_SITES } from './constants';

const IndustrialMap: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState(INDUSTRIAL_SITES[0]);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-modern mb-6 tracking-tighter uppercase">Bản đồ <span className="text-sky-500">Chiến lược</span></h1>
      </div>
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 shadow-xl">
            <div className="space-y-4">
              {INDUSTRIAL_SITES.map((site, idx) => (
                <button
                  key={idx} onClick={() => setSelectedSite(site)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border ${selectedSite.name === site.name ? 'bg-sky-600 border-sky-400 text-white shadow-lg' : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600'}`}
                >
                  <div className="font-bold text-lg mb-1">{site.name}</div>
                  <p className="text-xs opacity-60">{site.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-1">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000')] opacity-20 grayscale"></div>
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-sky-500/30 p-8 rounded-3xl max-w-sm shadow-2xl">
                    <h4 className="text-2xl font-bold text-white font-modern mb-4">{selectedSite.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedSite.description}</p>
                    <div className="flex gap-4">
                        <div className="p-3 bg-slate-800 rounded-xl flex-1 text-center border border-slate-700 text-sky-400 font-bold">{selectedSite.lat.toFixed(2)}N</div>
                        <div className="p-3 bg-slate-800 rounded-xl flex-1 text-center border border-slate-700 text-sky-400 font-bold">{selectedSite.lng.toFixed(2)}W</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialMap;
