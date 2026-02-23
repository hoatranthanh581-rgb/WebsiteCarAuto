
import { Member, ChartDataPoint, EmploymentDataPoint, IndustrialSite } from './types';

export const MEMBERS: Member[] = [
  {
    name: "Nguyễn Văn A",
    role: "Trưởng nhóm & Phân tích Dữ liệu",
    image: "https://picsum.photos/seed/a/400/400",
    description: "Chuyên gia về kinh tế công nghiệp và xu hướng xe điện toàn cầu."
  },
  {
    name: "Trần Thị B",
    role: "Thiết kế Nội dung & Đồ họa",
    image: "https://picsum.photos/seed/b/400/400",
    description: "Phụ trách hình ảnh, video và giao diện người dùng khoa học."
  },
  {
    name: "Lê Văn C",
    role: "Nghiên cứu Lịch sử Detroit",
    image: "https://picsum.photos/seed/c/400/400",
    description: "Nghiên cứu sâu về thời kỳ hoàng kim của Big Three và sự hình thành Rust Belt."
  }
];

export const EV_GROWTH_DATA: ChartDataPoint[] = [
  { year: '2015', ice: 88, ev: 1 },
  { year: '2016', ice: 87, ev: 1.2 },
  { year: '2017', ice: 86, ev: 1.5 },
  { year: '2018', ice: 85, ev: 2.1 },
  { year: '2019', ice: 84, ev: 2.5 },
  { year: '2020', ice: 78, ev: 4.6 },
  { year: '2021', ice: 75, ev: 8.3 },
  { year: '2022', ice: 70, ev: 13.0 },
  { year: '2023', ice: 65, ev: 18.0 }
];

export const REGIONAL_EMPLOYMENT: EmploymentDataPoint[] = [
  { region: 'Midwest (Rust Belt)', employment: 450000 },
  { region: 'South (Sun Belt)', employment: 320000 },
  { region: 'West (EV Hub)', employment: 120000 },
  { region: 'East Coast', employment: 85000 }
];

export const INDUSTRIAL_SITES: IndustrialSite[] = [
  { name: "Detroit, Michigan", lat: 42.3314, lng: -83.0458, type: 'Historic', description: "Trái tim của Big Three: Ford, GM, và Chrysler." },
  { name: "Austin, Texas", lat: 30.2672, lng: -97.7431, type: 'Modern-EV', description: "Tesla Gigafactory Texas - Trung tâm mới của xe điện." },
  { name: "Reno, Nevada", lat: 39.5296, lng: -119.8138, type: 'Modern-EV', description: "Gigafactory 1 - Sản xuất pin quy mô lớn nhất thế giới." },
  { name: "Birmingham, Alabama", lat: 33.5186, lng: -86.8104, type: 'Modern-EV', description: "Làn sóng sản xuất ô tô dịch chuyển xuống miền Nam." }
];
