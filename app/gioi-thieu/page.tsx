//////////////////////////////////////
// app/gioi-thieu/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import SectionTitle from "@/components/ui/SectionTitle";

export default function GioiThieuPage() {
  return (
    <Container sx={{ py: 10 }}>
      <SectionTitle title="Giới thiệu VietFresh" subtitle="Tầm nhìn – Sứ mệnh – Giá trị cốt lõi" />
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold">Tầm nhìn</Typography>
          <Typography variant="body1">Trở thành thương hiệu cung cấp rau củ quả sạch hàng đầu Việt Nam.</Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold">Sứ mệnh</Typography>
          <Typography variant="body1">Cung cấp rau củ quả tươi ngon, an toàn, đáp ứng nhu cầu sức khỏe và dinh dưỡng của mọi gia đình.</Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold">Giá trị cốt lõi</Typography>
          <Typography variant="body1">Chất lượng – Tin cậy – Sáng tạo – Phục vụ tận tâm.</Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
