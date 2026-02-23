
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
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center font-modern font-bold text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]">A</div>
              <div className="flex flex-col">
                <span className="text-white font-modern text-lg font-bold leading-tight">AUTOMOTIVE</span>
                <span className="text-sky-400 text-[10px] tracking-[0.2em] font-bold">REVOLUTION</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-sky-400 border-b-2 border-sky-400'
                      : 'text-gray-400 hover:text-white'
                  } px-1 py-4 text-sm font-semibold transition-all duration-300`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path) ? 'bg-sky-600 text-white' : 'text-gray-300 hover:bg-slate-800'
                } block px-3 py-2 rounded-md text-base font-medium`}
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

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 className="text-white font-modern font-bold mb-4 uppercase tracking-widest text-sm">Về Dự Án</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            Nghiên cứu khoa học về sự chuyển dịch cơ cấu công nghiệp ô tô Hoa Kỳ từ thế kỷ 20 sang kỷ nguyên di động điện hóa.
          </p>
        </div>
        <div>
          <h4 className="text-white font-modern font-bold mb-4 uppercase tracking-widest text-sm">Truy Cập Nhanh</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li><Link to="/data" className="hover:text-sky-400">Dữ liệu tăng trưởng</Link></li>
            <li><Link to="/analysis" className="hover:text-sky-400">Phân tích chuyên sâu</Link></li>
            <li><Link to="/map" className="hover:text-sky-400">Bản đồ công nghiệp</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-modern font-bold mb-4 uppercase tracking-widest text-sm">Liên Hệ</h4>
          <p className="text-gray-500 text-sm">Email: contact@automotive-report.edu.vn</p>
          <p className="text-gray-500 text-sm">Phòng Lab Kinh tế Công nghiệp - Đại học Quốc gia</p>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-900 text-center">
        <p className="text-gray-600 text-xs">
          © 2024 Dự án Nghiên cứu Khoa học. Tất cả các quyền được bảo lưu.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-950">
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
