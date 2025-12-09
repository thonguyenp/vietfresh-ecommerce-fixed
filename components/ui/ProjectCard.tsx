//////////////////////////////////////
// components/ui/ProjectCard.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ProjectItem } from "@/data/projects";

export interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
