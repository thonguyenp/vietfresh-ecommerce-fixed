//////////////////////////////////////
// data/testimonials.ts
//////////////////////////////////////

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  avatar: string;
  comment: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "ts-01",
    name: "Hoàng Lâm",
    position: "Chủ chuỗi nhà hàng VegiLux",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80",
    comment:
      "Rau củ của VietFresh luôn đạt chất lượng tuyệt vời. Giao hàng nhanh, luôn tươi mới và ổn định.",
  },
  {
    id: "ts-02",
    name: "Mai Phương",
    position: "Quản lý Khách sạn 5 Sao",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80",
    comment:
      "Đội ngũ chuyên nghiệp, dịch vụ hỗ trợ tuyệt vời. Chúng tôi tin dùng VietFresh mỗi ngày.",
  },
  {
    id: "ts-03",
    name: "Hữu Nghĩa",
    position: "Người tiêu dùng",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80",
    comment:
      "Gia đình tôi đã sử dụng dịch vụ giỏ rau củ theo tuần. Rất tiện lợi và đảm bảo chất lượng.",
  }
];

export default testimonials;
