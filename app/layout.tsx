// ======================
// Phần 4: GIAO DIỆN
// ======================

//////////////////////////////////////
// app/layout.tsx
//////////////////////////////////////
import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "VietFresh - Rau củ quả tươi sạch",
  description: "VietFresh cung cấp rau củ quả tươi sạch, an toàn và hữu cơ.",
  openGraph: {
    title: "VietFresh - Rau củ quả tươi sạch",
    description: "VietFresh cung cấp rau củ quả tươi sạch, an toàn và hữu cơ.",
    url: "https://vietfresh.example.com",
    siteName: "VietFresh",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506807803488-8eafc15323c0?q=80",
        width: 1200,
        height: 630,
        alt: "VietFresh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
