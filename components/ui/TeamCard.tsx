//////////////////////////////////////
// components/ui/TeamCard.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { TeamItem } from "@/data/team";

export interface TeamCardProps {
  member: TeamItem;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card sx={{ maxWidth: 300, m: 1, borderRadius: 2, boxShadow: 3, textAlign: "center" }}>
        <CardMedia
          component="img"
          height="200"
          image={member.image}
          alt={member.name}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {member.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.role}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
