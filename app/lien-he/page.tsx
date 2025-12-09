//////////////////////////////////////
// app/lien-he/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Typography, Stack, Box } from "@mui/material";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";

export default function LienHePage() {
  return (
    <Container sx={{ py: 10 }}>
      <SectionTitle title="Liên hệ VietFresh" subtitle="Chúng tôi luôn sẵn sàng hỗ trợ bạn" />
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Typography variant="h6">Thông tin liên hệ</Typography>
          <Typography>Email: contact@vietfresh.vn</Typography>
          <Typography>Điện thoại: 0900 123 456</Typography>
          <Typography>Địa chỉ: 123 Đường Xanh, Quận 1, TP.HCM</Typography>
        </Stack>
        <Box sx={{ width: "100%", height: 400 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0910830150023!2d106.6954642767026!3d10.776862192323768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929b7d038f5%3A0x6a59dbf0e54c0a23!2s123%20Duong%20Xanh%2C%20District%201%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1svi!2s!4v1699999999999!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <ContactForm />
      </Stack>
    </Container>
  );
}
