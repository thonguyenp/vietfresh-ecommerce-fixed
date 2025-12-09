//////////////////////////////////////
// components/ui/CTASection.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTASection({ title, subtitle, ctaText, ctaLink }: CTASectionProps) {
  return (
    <Box sx={{ py: 10, backgroundColor: "#16a34a", color: "#fff", textAlign: "center" }}>
      <Container>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {title}
          </Typography>
          {subtitle && <Typography variant="body1" mb={4}>{subtitle}</Typography>}
          <Button href={ctaLink} variant="contained" sx={{ backgroundColor: "#f97316", "&:hover": { backgroundColor: "#fb7a1f" }, px: 5, py: 1.5, fontWeight: "bold" }}>
            {ctaText}
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
