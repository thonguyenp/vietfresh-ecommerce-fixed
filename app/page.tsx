//////////////////////////////////////
// app/page.tsx (TRANG CHỦ)
//////////////////////////////////////
"use client";

import React from "react";
import { Container, Stack } from "@mui/material";
import Hero from "@/components/ui/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import ProjectCard from "@/components/ui/ProjectCard";
import TeamCard from "@/components/ui/TeamCard";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import StatsCounter from "@/components/ui/StatsCounter";
import PartnerLogos from "@/components/ui/PartnerLogos";
import CTASection from "@/components/ui/CTASection";

import services, { ServiceItem } from "@/data/services";
import projects, { ProjectItem } from "@/data/projects";
import team, { TeamItem } from "@/data/team";
import testimonials, { TestimonialItem } from "@/data/testimonials";

export default function HomePage() {
  const stats = [
    { id: "st-01", value: "10+", label: "Năm kinh nghiệm" },
    { id: "st-02", value: "500+", label: "Khách hàng hài lòng" },
    { id: "st-03", value: "1000+", label: "Dự án hoàn thành" },
  ];

  const partnerLogos = [
    "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80",
    "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80",
  ];

  return (
    <>
      <Hero
        title="Rau củ quả sạch cao cấp"
        subtitle="Tươi ngon – Sạch sẽ – An toàn"
        ctaText="Liên hệ ngay"
        ctaLink="/lien-he"
        backgroundImage="https://images.unsplash.com/photo-1506807803488-8eafc15323c0?q=80"
      />

      <Container sx={{ py: 10 }}>
        <SectionTitle title="Dịch vụ nổi bật" subtitle="Chúng tôi cung cấp" />
        <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" justifyContent="center">
          {services.map((item: ServiceItem) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </Stack>
      </Container>

      <Container sx={{ py: 10, backgroundColor: "#ecfdf5" }}>
        <SectionTitle title="Dự án tiêu biểu" />
        <Stack direction="row" spacing={2} overflow="auto">
          {projects.map((p: ProjectItem) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </Stack>
      </Container>

      <Container sx={{ py: 10 }}>
        <StatsCounter stats={stats} />
      </Container>

      <Container sx={{ py: 10, backgroundColor: "#f0fdf4" }}>
        <SectionTitle title="Đội ngũ VietFresh" subtitle="Những con người tận tâm" />
        <Stack direction={{ xs: "column", md: "row" }} flexWrap="wrap" justifyContent="center">
          {team.map((member: TeamItem) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </Stack>
      </Container>

      <Container sx={{ py: 10 }}>
        <SectionTitle title="Khách hàng nói về chúng tôi" />
        <TestimonialSlider testimonials={testimonials} />
      </Container>

      <Container sx={{ py: 10, backgroundColor: "#ecfdf5" }}>
        <SectionTitle title="Đối tác & chứng nhận" />
        <PartnerLogos logos={partnerLogos} />
      </Container>

      <CTASection
        title="Liên hệ ngay với VietFresh"
        subtitle="Đặt rau củ quả sạch cho gia đình hoặc doanh nghiệp của bạn"
        ctaText="Gửi yêu cầu"
        ctaLink="/lien-he"
      />
    </>
  );
}
