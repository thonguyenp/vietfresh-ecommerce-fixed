//////////////////////////////////////
// components/ui/PartnerLogos.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";

export interface PartnerLogosProps {
  logos: string[];
}

export default function PartnerLogos({ logos }: PartnerLogosProps) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="center" alignItems="center">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box component="img" src={logo} alt={`partner-${index}`} sx={{ maxHeight: 60, objectFit: "contain" }} />
        </motion.div>
      ))}
    </Stack>
  );
}
