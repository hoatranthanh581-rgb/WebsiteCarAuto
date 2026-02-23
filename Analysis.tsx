
import React, { useState, useEffect } from 'react';
import { getAutomotiveInsights, InsightResult } from './geminiService';

const Analysis: React.FC = () => {
  const [result, setResult] = useState<InsightResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [topic, setTopic] = useState<string>("Sự suy tàn của Detroit và khái niệm Rust Belt");

  const fetchInsight = async (selectedTopic: string) => {
    setLoading(true);
    const data = await getAutomotiveInsights(selectedTopic);
    setResult(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsight(topic);
  }, [topic]);

  const topics = [
    { title: "Sự suy tàn của Detroit", prompt: "Sự suy tàn của Detroit và khái niệm Rust Belt (Vành đai Rỉ sét)" },
    { title: "Kinh tế quy mô Fordism", prompt: "Tác động của dây chuyền lắp ráp Ford đến kinh tế thế giới" },
    { title: "Sự trỗi dậy của Tesla", prompt: "Cách Tesla thay đổi cuộc chơi và sự dịch chuyển nhà máy xuống miền Nam Hoa Kỳ" },
    { title: "Tương lai Pin & EV", prompt: "Phân tích địa chính trị về chuỗi cung ứng Pin xe điện" }
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/3">
          <div className="sticky top-24 space-y-8">
            <h2 className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-6">Chủ đề nghiên cứu</h2>
            <div className="space-y-3">
              {topics.map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setTopic(item.prompt)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border ${topic === item.prompt ? 'bg-sky-600 border-sky-400 text-white shadow-lg' : 'bg-slate-900 border-slate-800 text-gray-400 hover:border-slate-700'}`}
                >
                  <div className="font-bold">{item.title}</div>
                </button>
              ))}
            </div>
          </div>
        </aside>
        
        <div className="lg:w-2/3">
          <div className="bg-slate-900/40 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl min-h-[500px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 space-y-4">
                <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-modern text-sm">ĐANG PHÂN TÍCH DỮ LIỆU BẰNG GEMINI AI...</p>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-white mb-8 leading-tight">{topic}</h1>
                <div className="prose prose-invert max-w-none mb-10">
                  <div className={`text-gray-300 whitespace-pre-line leading-relaxed ${result?.text.startsWith('Lỗi') ? 'text-red-400' : ''}`}>
                    {result?.text}
                  </div>
                </div>

                {result?.text.startsWith('Lỗi') && (
                  <button 
                    onClick={() => fetchInsight(topic)}
                    className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                  >
                    Thử lại
                  </button>
                )}

                {result?.sources && result.sources.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-slate-800">
                    <h4 className="text-sky-400 font-bold mb-4 uppercase text-xs tracking-widest">Nguồn tham khảo tin cậy:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {result.sources.map((source, i) => (
                        <a key={i} href={source.uri} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950 rounded-lg border border-slate-800 hover:border-sky-500 transition-colors block truncate text-xs text-gray-400 hover:text-white">
                          {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
