//////////////////////////////////////
// app/du-an/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Stack } from "@mui/material";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import projects, { ProjectItem } from "@/data/projects";

export default function DuAnPage() {
  return (
    <Container sx={{ py: 10 }}>
      <SectionTitle title="Dự án VietFresh" subtitle="Các dự án tiêu biểu" />
      <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" justifyContent="center">
        {projects.map((p: ProjectItem) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Stack>
    </Container>
  );
}
