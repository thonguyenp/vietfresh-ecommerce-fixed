//////////////////////////////////////
// components/ui/TestimonialSlider.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { TestimonialItem } from "@/data/testimonials";

export interface TestimonialSliderProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <Stack spacing={4} sx={{ overflowX: "auto", flexDirection: { xs: "column", md: "row" } }}>
      {testimonials.map((t: TestimonialItem) => (
        <motion.div
          key={t.id}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              p: 3,
              backgroundColor: "#ecfdf5",
              borderRadius: 2,
              minWidth: 280,
              maxWidth: 350,
            }}
          >
<Stack
  direction="row"
  spacing={0}
  alignItems="center"
  mb={2}
  sx={{
    "& > :not(style) ~ :not(style)": {
      marginTop: 0,
      marginLeft: 0, // nếu direction="row"
    },
  }}
>
  <Avatar src={t.avatar} alt={t.name} />
  <Box>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ m: 0 }}>
      {t.name}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ m: 0 }}>
      {t.position}
    </Typography>
  </Box>
</Stack>
            <Typography variant="body2">{t.comment}</Typography>
          </Box>
        </motion.div>
      ))}
    </Stack>
  );
}
