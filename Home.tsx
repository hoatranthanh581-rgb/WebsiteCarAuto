
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=2000" 
            alt="Automotive Industrial Machine" 
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-3 py-1 mb-6 border border-sky-500/30 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
            Dự án Nghiên cứu Khoa học
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-modern mb-8 tracking-tighter leading-tight">
            DETROIT <span className="text-gray-500">TO</span> <span className="text-sky-500 drop-shadow-[0_0_30px_rgba(14,165,233,0.4)]">ELECTRIC</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Phân tích quá trình tiến hóa từ dây chuyền Fordism thế kỷ 20 đến các Gigafactory và cuộc cách mạng di động điện hóa hiện nay.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/analysis" className="bg-sky-600 hover:bg-sky-500 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-sky-600/20">
              Khám Phá Nghiên Cứu
            </Link>
            <Link to="/data" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
              Phân Tích Số Liệu
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Timeline */}
      <section className="py-32 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-modern mb-20 text-center">Tiến trình <span className="text-sky-500">Phát triển Công nghiệp</span></h2>
          
          <div className="relative space-y-12">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-800 hidden md:block"></div>
            
            {[
              { year: '1908', title: 'Kỷ nguyên Fordism', desc: 'Henry Ford ra mắt Model T, thiết lập dây chuyền lắp ráp di động đầu tiên tại Highland Park, Michigan.' },
              { year: '1950s', title: 'Thời hoàng kim Detroit', desc: 'Thành phố Detroit trở thành trung tâm công nghiệp lớn nhất thế giới với sự thống trị của "Big Three".' },
              { year: '1970s', title: 'Khủng hoảng Rust Belt', desc: 'Cạnh tranh từ xe Nhật và khủng hoảng dầu mỏ khiến các nhà máy tại miền Bắc suy tàn, hình thành Vành đai Rỉ sét.' },
              { year: '2012', title: 'Cuộc cách mạng Tesla', desc: 'Ra mắt Model S, chứng minh xe điện có thể sang trọng, hiệu năng cao và cạnh tranh thương mại.' },
              { year: '2024+', title: 'Kỷ nguyên Gigafactory', desc: 'Tập trung sản xuất pin quy mô lớn, xe tự hành và dịch chuyển trung tâm sản xuất xuống miền Nam (Sun Belt).' }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center">
                  <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 max-w-sm hover:border-sky-500/50 transition-all group">
                    <span className="text-sky-500 font-bold text-2xl mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-sky-500 relative z-10 shadow-[0_0_10px_rgba(14,165,233,1)]"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-24 bg-slate-900 overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-4xl font-bold mb-8 font-modern leading-tight">Video tư liệu <br/><span className="text-sky-500">Sự suy tàn của Detroit</span></h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Khám phá lý do tại sao "Thành phố Động cơ" từng là biểu tượng kinh tế của thế giới lại rơi vào khủng hoảng và bài học cho kỷ nguyên xe điện mới.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-sky-600 flex items-center justify-center text-[10px] font-bold">TH</div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-emerald-600 flex items-center justify-center text-[10px] font-bold">DM</div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-amber-600 flex items-center justify-center text-[10px] font-bold">SA</div>
                </div>
                <span className="text-gray-500 text-sm font-medium italic">Nguồn tư liệu: Bloomberg Quicktake / Nhóm nghiên cứu</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-3xl overflow-hidden group border border-slate-700 shadow-2xl bg-black">
                {!isPlaying ? (
                  <>
                    <img 
                      src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200" 
                      alt="EV Charging" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="w-20 h-20 bg-sky-500 hover:bg-sky-400 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl z-20 group-hover:ring-4 ring-sky-500/30"
                      >
                        <svg className="w-10 h-10 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-modern text-[10px] tracking-widest bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                      XEM VIDEO TƯ LIỆU THỰC TẾ
                    </div>
                  </>
                ) : (
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/l5V_5B9i0lE?autoplay=1" 
                    title="Why Detroit Declined" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
