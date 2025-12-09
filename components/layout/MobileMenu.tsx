"use client";

import { Drawer, Box, Button, Stack } from "@mui/material";
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 260, p: 3 }}>
        <Stack spacing={2}>
          <Link href="/gioi-thieu">
            <Button fullWidth>Giới thiệu</Button>
          </Link>
          <Link href="/dich-vu">
            <Button fullWidth>Dịch vụ</Button>
          </Link>
          <Link href="/du-an">
            <Button fullWidth>Dự án</Button>
          </Link>
          <Link href="/doi-ngu">
            <Button fullWidth>Đội ngũ</Button>
          </Link>
          <Link href="/tam-nhin">
            <Button fullWidth>Tầm nhìn</Button>
          </Link>
          <Link href="/lien-he">
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#f97316", "&:hover": { bgcolor: "#ea580c" } }}
            >
              Liên hệ
            </Button>
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
}
