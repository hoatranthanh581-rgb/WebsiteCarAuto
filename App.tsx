
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import DataCharts from './DataCharts';
import Analysis from './Analysis';
import IndustrialMap from './IndustrialMap';
import Members from './Members';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const links = [
    { name: 'Trang Chủ', path: '/' },
    { name: 'Số Liệu', path: '/data' },
    { name: 'Phân Tích', path: '/analysis' },
    { name: 'Bản Đồ', path: '/map' },
    { name: 'Thành Viên', path: '/members' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link border-none to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center font-modern font-bold text-white text-sm shadow-lg shadow-sky-500/20">A</div>
            <span className="text-white font-modern text-sm font-bold tracking-tighter hidden sm:block uppercase">Automotive</span>
          </Link>
          
          <div className="hidden lg:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path) ? 'text-sky-400 border-b-2 border-sky-400' : 'text-gray-400 hover:text-white'
                  } px-2 py-1 text-xs font-bold transition-all uppercase tracking-widest`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 p-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path) ? 'bg-sky-600 text-white' : 'text-gray-300'
                } block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col w-full min-h-screen bg-slate-950">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<DataCharts />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/map" element={<IndustrialMap />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
        <footer className="bg-slate-950 border-t border-slate-900 py-10 w-full mt-auto">
          <div className="text-center text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            © 2024 Dự án Nghiên cứu Khoa học Ô tô • Made with Intelligence
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
