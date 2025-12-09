//////////////////////////////////////
// data/projects.ts
//////////////////////////////////////

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: "prj-01",
    title: "Chuỗi nhà hàng GreenFarm",
    description:
      "VietFresh trở thành đối tác cung cấp rau củ sạch cho hệ thống nhà hàng GreenFarm với hơn 12 chi nhánh.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80",
  },
  {
    id: "prj-02",
    title: "Siêu thị thực phẩm hữu cơ ORGA",
    description:
      "Cung ứng rau củ hằng ngày cho hệ thống ORGA – thương hiệu thực phẩm organic hàng đầu.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80",
  },
  {
    id: "prj-03",
    title: "Farm-to-Table cho khách sạn 5 sao",
    description:
      "Triển khai mô hình Farm-to-Table cung cấp rau củ tươi trực tiếp từ trang trại đến bếp khách sạn.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80",
  }
];

export default projects;
