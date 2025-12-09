//////////////////////////////////////
// app/dich-vu/[slug]/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Container, Typography, Box } from "@mui/material";
import services, { ServiceItem } from "@/data/services";

export default function DichVuDetailPage() {
  const params = useParams();
  const slug = params.slug;

  const service: ServiceItem | undefined = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5">Dịch vụ không tồn tại</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {service.title}
      </Typography>
      <Box component="img" src={service.image} alt={service.title} sx={{ width: "100%", borderRadius: 2, mb: 3 }} />
      <Typography variant="body1">{service.description}</Typography>
    </Container>
  );
}
