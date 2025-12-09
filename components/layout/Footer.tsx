// components/layout/Footer.tsx
"use client";
import React from 'react';
import { Box, Typography, Container, Stack, Link as MuiLink } from '@mui/material';

export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <Box sx={{ backgroundColor: 'var(--green-600)', color: 'white', py: 6, mt: 12 }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>VietFresh</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} VietFresh. Tất cả quyền được bảo lưu.
          </Typography>
          <Stack direction="row" spacing={2}>
            <MuiLink href="#" color="inherit">Facebook</MuiLink>
            <MuiLink href="#" color="inherit">Instagram</MuiLink>
            <MuiLink href="#" color="inherit">LinkedIn</MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
