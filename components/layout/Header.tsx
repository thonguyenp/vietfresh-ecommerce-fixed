// components/layout/Header.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} href="/" sx={{ color: 'var(--green-500)', fontWeight: 700 }}>
            VietFresh
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button component={Link} href="/gioi-thieu" color="inherit">Giới thiệu</Button>
            <Button component={Link} href="/dich-vu" color="inherit">Dịch vụ</Button>
            <Button component={Link} href="/du-an" color="inherit">Dự án</Button>
            <Button component={Link} href="/doi-ngu" color="inherit">Đội ngũ</Button>
            <Button component={Link} href="/tam-nhin" color="inherit">Tầm nhìn</Button>
            <Button component={Link} href="/lien-he" color="inherit">Liên hệ</Button>
          </Box>
          <IconButton color="inherit" sx={{ display: { md: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileMenu open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
}
