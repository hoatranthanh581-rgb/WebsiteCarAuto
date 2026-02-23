
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { EV_GROWTH_DATA, REGIONAL_EMPLOYMENT, GLOBAL_EV_SHARE, TOP_MANUFACTURERS_2023 } from './constants';

const DataCharts: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto animate-fadeIn">
      <div className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6 font-modern tracking-tighter">THỐNG KÊ <span className="text-sky-500">KHOA HỌC</span></h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
          Tập hợp các dữ liệu định lượng về sản lượng, doanh số và cơ cấu lao động trong quá trình chuyển đổi xanh của ngành ô tô toàn cầu.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl group hover:border-sky-500/30 transition-all">
          <h3 className="text-xl font-bold mb-8 text-white flex items-center"><span className="w-2 h-8 bg-sky-500 mr-4 rounded-full"></span>Tỷ lệ thâm nhập xe điện (%)</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={EV_GROWTH_DATA}>
                <defs>
                  <linearGradient id="colorEv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="year" stroke="#475569" />
                <YAxis stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="ev" name="Xe điện" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorEv)" />
                <Area type="monotone" dataKey="ice" name="Xe xăng" stroke="#ef4444" fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl group hover:border-sky-500/30 transition-all">
          <h3 className="text-xl font-bold mb-8 text-white flex items-center"><span className="w-2 h-8 bg-emerald-500 mr-4 rounded-full"></span>Top 5 nhà sản xuất EV (2023)</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_MANUFACTURERS_2023} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#475569" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} />
                <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="sales" name="Số lượng xe" radius={[0, 4, 4, 0]}>
                  {TOP_MANUFACTURERS_2023.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
         <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold mb-8 text-white">Thị Phần Sản Xuất Xe Điện Toàn Cầu</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={GLOBAL_EV_SHARE} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="share" nameKey="region">
                  {GLOBAL_EV_SHARE.map((entry, index) => <Cell key={`cell-${index}`} fill={['#10b981', '#0ea5e9', '#f59e0b', '#64748b'][index % 4]} />)}
                </Pie>
                <Tooltip /><Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold mb-8 text-white">Việc làm công nghiệp ô tô (Mỹ)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REGIONAL_EMPLOYMENT}>
                <XAxis dataKey="region" stroke="#475569" fontSize={10} />
                <YAxis stroke="#475569" />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="employment" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCharts;
