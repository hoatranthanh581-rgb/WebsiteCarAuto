
import React, { useState } from 'react';

interface StaticContent {
  title: string;
  content: string;
  dataPoints: string[];
}

const STATIC_DATA: Record<string, StaticContent> = {
  "Sự suy tàn của Detroit": {
    title: "Sự suy tàn của Detroit và khái niệm Rust Belt",
    content: `Detroit từng là biểu tượng rực rỡ của giấc mơ Mỹ và là "Thủ đô Ô tô" của thế giới. Tuy nhiên, từ thập niên 1970, thành phố này đã rơi vào một cuộc khủng hoảng kinh tế - xã hội trầm trọng.

Nguyên nhân chính bao gồm sự cạnh tranh khốc liệt từ các hãng xe Nhật Bản (Toyota, Honda) với những mẫu xe tiết kiệm nhiên liệu, cùng với các cuộc khủng hoảng dầu mỏ năm 1973 và 1979. Việc tự động hóa sản xuất và sự dịch chuyển nhà máy ra khỏi trung tâm thành phố đã dẫn đến tình trạng thất nghiệp hàng loạt.

Khái niệm "Rust Belt" (Vành đai Rỉ sét) ra đời để chỉ khu vực Đông Bắc và Trung Tây Hoa Kỳ, nơi các nhà máy thép và ô tô khổng lồ từng ngự trị giờ chỉ còn là những bộ khung sắt rỉ sét, minh chứng cho một kỷ nguyên công nghiệp nặng đã lùi xa.`,
    dataPoints: [
      "Dân số Detroit giảm từ 1.8 triệu (1950) xuống còn dưới 700,000 (2010).",
      "Tỷ lệ thất nghiệp có lúc chạm ngưỡng 25% trong thời kỳ khủng hoảng.",
      "Hơn 70,000 tòa nhà bị bỏ hoang trong vùng lõi Detroit."
    ]
  },
  "Kinh tế quy mô Fordism": {
    title: "Kinh tế quy mô và Cuộc cách mạng Fordism",
    content: `Fordism không chỉ là một phương thức sản xuất, nó là một cuộc cách mạng văn hóa và kinh tế. Bằng cách áp dụng dây chuyền lắp ráp di động (Assembly Line) vào năm 1913, Henry Ford đã giảm thời gian sản xuất một chiếc Model T từ 12 giờ xuống còn 93 phút.

Triết lý của Ford rất rõ ràng: "Sản xuất hàng loạt đi đôi với tiêu dùng hàng loạt". Việc trả lương 5 USD/ngày (gấp đôi mức trung bình lúc bấy giờ) đã biến công nhân thành tầng lớp trung lưu, những người có đủ khả năng tài chính để mua chính sản phẩm họ làm ra.

Hệ thống này đã đặt nền móng cho nền kinh tế công nghiệp hiện đại, nơi hiệu suất tối ưu và tiêu chuẩn hóa sản phẩm là chìa khóa của thành công.`,
    dataPoints: [
      "Giá xe Model T giảm từ $850 xuống còn $260 nhờ hiệu quả dây chuyền.",
      "Sản lượng đạt 15 triệu chiếc Model T trong vòng 19 năm.",
      "Thiết lập tiêu chuẩn làm việc 8 giờ/ngày cho ngành công nghiệp."
    ]
  },
  "Sự trỗi dậy của Tesla": {
    title: "Tesla và sự dịch chuyển xuống Sun Belt",
    content: `Tesla đã phá vỡ thế độc tôn của các hãng xe truyền thống bằng cách tiếp cận ô tô như một "thiết bị công nghệ có bánh xe". Thay vì tập trung vào động cơ đốt trong, Tesla ưu tiên phần mềm, trí tuệ nhân tạo và công nghệ pin.

Sự trỗi dậy của Tesla cũng đánh dấu một bước ngoặt địa lý quan trọng: Sự dịch chuyển từ Rust Belt (miền Bắc) xuống Sun Belt (miền Nam và Tây Nam). Việc xây dựng Giga Texas tại Austin và Gigafactory tại Nevada cho thấy xu hướng tìm kiếm các bang có chi phí năng lượng thấp, chính sách thuế ưu đãi và lực lượng lao động công nghệ cao.

Austin hiện được gọi là "Silicon Hills", trung tâm mới của ngành công nghiệp ô tô thế hệ 4.0.`,
    dataPoints: [
      "Tesla Model Y trở thành xe bán chạy nhất thế giới năm 2023.",
      "Vốn hóa thị trường của Tesla có lúc vượt tổng cả 9 hãng xe lớn nhất cộng lại.",
      "Giga Texas là một trong những tòa nhà lớn nhất thế giới theo diện tích sàn."
    ]
  },
  "Tương lai Pin & EV": {
    title: "Phân tích chuỗi cung ứng Pin và Kỷ nguyên EV",
    content: `Pin chiếm khoảng 30-40% giá trị của một chiếc xe điện, biến nó thành "dầu mỏ mới" của thế kỷ 21. Cuộc đua giành quyền kiểm soát nguồn cung Lithium, Cobalt và Nickel đang trở thành vấn đề địa chính trị nóng bỏng.

Hiện tại, Trung Quốc đang dẫn đầu chuỗi cung ứng pin toàn cầu, nhưng Hoa Kỳ và Châu Âu đang nỗ lực nội địa hóa sản xuất thông qua các đạo luật như IRA (Inflation Reduction Act). Sự chuyển dịch sang pin thể rắn (Solid-state battery) hứa hẹn sẽ giải quyết bài toán về quãng đường di chuyển và thời gian sạc.

Tương lai của ngành ô tô không chỉ là điện hóa, mà còn là sự tích hợp sâu rộng của lưới điện thông minh và kinh tế tuần hoàn (tái chế pin).`,
    dataPoints: [
      "Trung Quốc kiểm soát khoảng 70% sản lượng pin Lithium-ion toàn cầu.",
      "Chi phí pin đã giảm hơn 80% trong vòng một thập kỷ qua.",
      "Dự kiến xe điện sẽ chiếm 50% doanh số xe mới toàn cầu vào năm 2035."
    ]
  }
};

const Analysis: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>("Sự suy tàn của Detroit");
  const data = STATIC_DATA[selectedKey];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/3">
          <div className="sticky top-24 space-y-8">
            <h2 className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-6">Chủ đề nghiên cứu chuyên sâu</h2>
            <div className="space-y-3">
              {Object.keys(STATIC_DATA).map((key) => (
                <button 
                  key={key} 
                  onClick={() => setSelectedKey(key)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border ${selectedKey === key ? 'bg-sky-600 border-sky-400 text-white shadow-lg' : 'bg-slate-900 border-slate-800 text-gray-400 hover:border-slate-700'}`}
                >
                  <div className="font-bold">{key}</div>
                </button>
              ))}
            </div>
            
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
               <h4 className="font-bold text-white mb-4 flex items-center">
                 <svg className="w-5 h-5 mr-2 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Dữ liệu thực chứng
               </h4>
               <p className="text-sm text-gray-500 leading-relaxed">
                 Báo cáo dựa trên tổng hợp số liệu từ IEA, Bloomberg New Energy Finance và các tư liệu lịch sử về Detroit.
               </p>
            </div>
          </div>
        </aside>
        
        <div className="lg:w-2/3">
          <div className="bg-slate-900/40 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl min-h-[600px]">
            <div className="mb-10 pb-8 border-b border-slate-800">
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight font-modern tracking-tighter">
                {data.title}
              </h1>
              <div className="flex items-center text-xs text-gray-500 uppercase tracking-widest">
                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded mr-3 border border-emerald-500/20 font-bold">DỮ LIỆU ĐÃ KIỂM CHỨNG</span>
                <span>Lưu trữ: 2024</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line font-light">
                {data.content}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-4">
              <h4 className="text-sky-400 font-bold uppercase text-xs tracking-widest mb-2">Thông tin định lượng cốt lõi:</h4>
              {data.dataPoints.map((point, idx) => (
                <div key={idx} className="flex items-start p-4 bg-slate-950 rounded-xl border border-slate-800 group hover:border-sky-500/50 transition-colors">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
