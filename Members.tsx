
import React from 'react';
import { MEMBERS } from './constants';

const Members: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto animate-fadeIn">
      <div className="text-center mb-24">
        <h1 className="text-5xl font-bold font-modern mb-6 uppercase">Đội ngũ <span className="text-sky-500">Phát triển</span></h1>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {MEMBERS.map((member, idx) => (
          <div key={idx} className="relative p-2 bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl group transition-transform hover:-translate-y-4">
            <div className="aspect-square bg-slate-950 flex items-center justify-center overflow-hidden rounded-[1.8rem] mb-8 relative">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-sky-500/20 rounded-full border border-sky-500/50 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                 </div>
              </div>
            </div>
            <div className="px-6 pb-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400">{member.name}</h3>
              <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm italic">"{member.description}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
