//////////////////////////////////////
// components/ui/SectionTitle.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Box textAlign="center" mb={6}>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        {subtitle && <Typography variant="body1" color="text.secondary">{subtitle}</Typography>}
      </motion.div>
    </Box>
  );
}
