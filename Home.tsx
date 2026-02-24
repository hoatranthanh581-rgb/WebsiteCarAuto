
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full overflow-x-hidden animate-fadeIn">
      {/* Hero Section - Cố định chiều cao linh hoạt hơn */}
      <section className="relative min-h-[500px] md:h-[80vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=2000" 
            alt="Automotive Industrial" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-5xl">
          <div className="inline-block px-3 py-1 mb-6 border border-sky-500/30 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            Báo cáo Khoa học Hệ thống
          </div>
          <h1 className="text-4xl md:text-7xl font-bold font-modern mb-6 tracking-tighter leading-tight">
            DETROIT <span className="text-gray-500">TO</span> <span className="text-sky-500 shadow-sky-500/20">ELECTRIC</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            Tiến trình tiến hóa công nghiệp từ dây chuyền Fordism đến kỷ nguyên Gigafactory của Tesla.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/analysis" className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-sky-600/20">
              Xem Phân Tích
            </Link>
            <Link to="/data" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all">
              Xem Số Liệu
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section - Đảm bảo video không bị cắt khi khung hẹp */}
      <section className="py-16 bg-slate-900 border-y border-slate-800 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 font-modern text-white">Video tư liệu <br/><span className="text-sky-500 text-2xl">Lịch sử Motor City</span></h3>
              <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800 text-sm text-gray-400">
                <p><span className="text-white font-bold">● Detroit:</span> Từng là trung tâm đóng tàu, sau đó bùng nổ nhờ Big Three.</p>
                <p><span className="text-white font-bold">● Fordism:</span> Dây chuyền sản xuất hàng loạt và mức lương 5 USD/ngày.</p>
                <p><span className="text-white font-bold">● Chuyển dịch:</span> Sự suy yếu của Rust Belt và sự trỗi dậy của xe điện.</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl">
                {!isPlaying ? (
                  <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img src="https://images.unsplash.com/photo-1519306042166-08d9ce4f391e?auto=format&fit=crop&q=80&w=1200" alt="Thumbnail" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/jvsXNZyezk4?autoplay=1&rel=0" 
                    title="YouTube video" frameBorder="0" allowFullScreen
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
