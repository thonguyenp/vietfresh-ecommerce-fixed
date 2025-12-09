//////////////////////////////////////
// data/team.ts
//////////////////////////////////////

export interface TeamItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

const team: TeamItem[] = [
  {
    id: "team-01",
    name: "Nguyễn Hải Đăng",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80",
  },
  {
    id: "team-02",
    name: "Lê Thu Hà",
    role: "Chuyên gia Dinh dưỡng",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80",
  },
  {
    id: "team-03",
    name: "Trần Minh Quân",
    role: "Quản lý Trang trại",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80",
  },
  {
    id: "team-04",
    name: "Phạm Hồng Ngọc",
    role: "Trưởng phòng QC",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80",
  }
];

export default team;
