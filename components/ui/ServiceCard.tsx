//////////////////////////////////////
// components/ui/ServiceCard.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ServiceItem } from "@/data/services";

export interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card sx={{ maxWidth: 345, m: 1, borderRadius: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={service.image}
          alt={service.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
