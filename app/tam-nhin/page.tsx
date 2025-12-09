//////////////////////////////////////
// app/tam-nhin/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TamNhinPage() {
  return (
    <Container sx={{ py: 10 }}>
      <SectionTitle title="Tầm nhìn VietFresh" subtitle="Chi tiết hơn" />
      <Stack spacing={4}>
        <Typography variant="body1">
          VietFresh hướng tới việc phát triển một hệ sinh thái nông nghiệp sạch, ứng dụng công nghệ cao, giúp người tiêu dùng tiếp cận nguồn thực phẩm an toàn và chất lượng.
        </Typography>
        <Typography variant="body1">
          Chúng tôi tập trung vào việc xây dựng các trang trại hữu cơ, quy trình kiểm soát chất lượng nghiêm ngặt, và mở rộng dịch vụ cung ứng cho nhà hàng, khách sạn và người tiêu dùng cá nhân.
        </Typography>
      </Stack>
    </Container>
  );
}
