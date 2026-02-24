
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
            Báo cáo Khoa học Hệ thống
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-modern mb-8 tracking-tighter leading-tight">
            DETROIT <span className="text-gray-500">TO</span> <span className="text-sky-500 drop-shadow-[0_0_30px_rgba(14,165,233,0.4)]">ELECTRIC</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Nghiên cứu quá trình tiến hóa công nghiệp từ dây chuyền lắp ráp Fordism thế kỷ 20 đến các trung tâm sản xuất xe điện (EV Hub) hiện nay.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/analysis" className="bg-sky-600 hover:bg-sky-500 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-sky-600/20">
              Đọc Phân Tích Chuyên Sâu
            </Link>
            <Link to="/data" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
              Xem Biểu Đồ Số Liệu
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
              { year: '1908', title: 'Cách mạng Fordism', desc: 'Henry Ford thiết lập dây chuyền lắp ráp di động đầu tiên, thay đổi hoàn toàn bộ mặt công nghiệp toàn cầu.' },
              { year: '1950s', title: 'Đỉnh cao Motor City', desc: 'Detroit trở thành trung tâm kinh tế sầm uất nhất Mỹ nhờ sự thống trị của bộ ba Ford, GM, Chrysler.' },
              { year: '1970s', title: 'Vành đai Rỉ sét', desc: 'Khủng hoảng dầu mỏ và cạnh tranh ngoại nhập khiến Detroit suy thoái, nhà máy bị bỏ hoang hàng loạt.' },
              { year: '2012', title: 'Điểm uốn Tesla', desc: 'Sự ra đời của Model S chứng minh tiềm năng thương mại hóa mạnh mẽ của xe điện chạy pin.' },
              { year: '2024+', title: 'Chương mới EV Hub', desc: 'Sự dịch chuyển sản xuất xuống miền Nam và miền Tây với các siêu nhà máy Gigafactory thông minh.' }
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

      {/* Video Introduction Section with Translation */}
      <section className="py-24 bg-slate-900 overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-5/12">
              <h3 className="text-4xl font-bold mb-6 font-modern leading-tight">Video tư liệu <br/><span className="text-sky-500">Tại sao Detroit trở thành "Thành phố Động cơ"?</span></h3>
              
              <div className="space-y-6 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                <h4 className="text-sky-400 font-bold uppercase text-xs tracking-[0.2em] mb-4">Bản dịch & Tóm tắt nội dung:</h4>
                <ul className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-sky-500 font-bold">01.</span>
                    <p><span className="text-white font-semibold">Nền tảng:</span> Detroit đầu thế kỷ 20 đã có sẵn ngành đóng tàu và sản xuất động cơ phát triển mạnh.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-500 font-bold">02.</span>
                    <p><span className="text-white font-semibold">Fordism:</span> Henry Ford không chỉ tạo ra xe hơi, ông tạo ra "Dây chuyền lắp ráp" và mức lương 5 USD/ngày, thu hút hàng triệu nhân lực.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-500 font-bold">03.</span>
                    <p><span className="text-white font-semibold">Tập trung hóa:</span> Sự tụ hội của Big Three (Ford, GM, Chrysler) biến nơi đây thành "Công xưởng của thế giới".</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-500 font-bold">04.</span>
                    <p><span className="text-white font-semibold">Hậu quả:</span> Việc quá phụ thuộc vào một ngành công nghiệp duy nhất đã khiến Detroit sụp đổ khi thị trường thay đổi.</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-sky-600 flex items-center justify-center text-[10px] font-bold">TH</div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-emerald-600 flex items-center justify-center text-[10px] font-bold">DM</div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-amber-600 flex items-center justify-center text-[10px] font-bold">SA</div>
                </div>
                <span className="text-gray-500 text-sm font-medium italic">Nguồn: YouTube / Nhóm nghiên cứu tóm tắt</span>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full">
              <div className="relative aspect-video rounded-3xl overflow-hidden group border border-slate-700 shadow-2xl bg-black">
                {!isPlaying ? (
                  <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img 
                      src="https://images.unsplash.com/photo-1519306042166-08d9ce4f391e?auto=format&fit=crop&q=80&w=1200" 
                      alt="Detroit Historical Image" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-sky-500 hover:bg-sky-400 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl z-30">
                        <svg className="w-10 h-10 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-modern text-[10px] tracking-widest bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 z-20">
                      BẤM ĐỂ XEM VIDEO: HOW DETROIT BECAME MOTOR CITY
                    </div>
                  </div>
                ) : (
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jvsXNZyezk4?autoplay=1&rel=0" 
                    title="How Detroit Became the Motor City" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-4 italic text-right">Cung cấp bởi: Smithsonian Channel / YouTube</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
