//////////////////////////////////////
// app/doi-ngu/page.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Stack } from "@mui/material";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";
import team, { TeamItem } from "@/data/team";

export default function DoiNguPage() {
  return (
    <Container sx={{ py: 10 }}>
      <SectionTitle title="Đội ngũ VietFresh" subtitle="Những con người tận tâm" />
      <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" justifyContent="center">
        {team.map((member: TeamItem) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </Stack>
    </Container>
  );
}
