//////////////////////////////////////
// app/dich-vu/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Stack } from "@mui/material";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import services, { ServiceItem } from "@/data/services";

export default function DichVuPage() {
  return (
    <Container sx={{ py: 10 }}>
      <SectionTitle title="Dịch vụ VietFresh" subtitle="Các dịch vụ của chúng tôi" />
      <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" justifyContent="center">
        {services.map((item: ServiceItem) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </Stack>
    </Container>
  );
}
