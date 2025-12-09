// ======================
// Phần 2: DATA FILES
// ======================

//////////////////////////////////////
// data/services.ts
//////////////////////////////////////

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "svc-01",
    title: "Cung cấp rau củ sạch",
    description:
      "Nguồn rau củ đạt chuẩn VietGAP, hữu cơ, thu hoạch trong ngày, đảm bảo tươi – sạch – an toàn tuyệt đối.",
    slug: "cung-cap-rau-cu-sach",
    image: "https://images.unsplash.com/photo-1506807803488-8eafc15323c0?q=80",
  },
  {
    id: "svc-02",
    title: "Giỏ rau củ theo tuần",
    description:
      "Giao định kỳ giỏ rau củ phù hợp gia đình bận rộn. Tối ưu chi phí và đảm bảo dinh dưỡng.",
    slug: "gio-rau-cu-theo-tuan",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80",
  },
  {
    id: "svc-03",
    title: "Cung ứng cho nhà hàng",
    description:
      "Dịch vụ cung cấp rau củ số lượng lớn cho nhà hàng cao cấp, đảm bảo chuẩn chất lượng.",
    slug: "cung-ung-nha-hang",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80",
  },
  {
    id: "svc-04",
    title: "Trái cây nhập khẩu",
    description:
      "Trái cây cao cấp từ Mỹ, Úc, Hàn Quốc… bảo quản chuẩn quốc tế, giao nhanh trong 2 giờ.",
    slug: "trai-cay-nhap-khau",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80",
  },
  {
    id: "svc-05",
    title: "Combo Eat Clean",
    description:
      "Combo rau củ giảm cân, eat-clean được tuyển chọn kỹ, chế biến nhanh – tiện lợi.",
    slug: "combo-eat-clean",
    image: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80",
  }
];

export default services;
