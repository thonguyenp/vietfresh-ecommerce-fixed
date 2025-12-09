//////////////////////////////////////
// components/ui/StatsCounter.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface StatsCounterProps {
  stats: StatItem[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="center" alignItems="center">
      {stats.map((s: StatItem) => (
        <motion.div
          key={s.id}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" color="#16a34a">
              {s.value}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {s.label}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Stack>
  );
}
