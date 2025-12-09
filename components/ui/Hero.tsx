//////////////////////////////////////
// components/ui/Hero.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            {subtitle}
          </Typography>
          <Button
            href={ctaLink}
            variant="contained"
            sx={{
              backgroundColor: "#f97316",
              "&:hover": { backgroundColor: "#fb7a1f" },
              px: 5,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            {ctaText}
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
