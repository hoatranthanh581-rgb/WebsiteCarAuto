
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import DataCharts from './pages/DataCharts';
import Analysis from './pages/Analysis';
import IndustrialMap from './pages/IndustrialMap';
import Members from './pages/Members';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <span className="text-sky-400 font-modern text-2xl font-bold">AUTO</span>
              <span className="text-white font-modern text-lg font-bold">NEXT</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { name: 'Trang Chủ', path: '/' },
                { name: 'Số Liệu', path: '/data' },
                { name: 'Phân Tích', path: '/analysis' },
                { name: 'Bản Đồ', path: '/map' },
                { name: 'Thành Viên', path: '/members' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'bg-sky-600 text-white'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
             {/* Mobile menu logic could go here, keeping it simple for now */}
             <button className="text-gray-400 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <span className="text-sky-400 font-modern font-bold">DETROIT</span>
        <span className="text-gray-500">→</span>
        <span className="text-sky-400 font-modern font-bold">ELECTRIC</span>
      </div>
      <p className="text-gray-400 text-sm">
        © 2024 Dự Án Công Nghiệp Ô Tô. Thực hiện bởi Nhóm Khoa Học Tương Lai.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<DataCharts />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/map" element={<IndustrialMap />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
