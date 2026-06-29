import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PartnerLogosBanner from "@/components/PartnerLogosBanner";

export const metadata: Metadata = {
  title: "Water and Sanitation Week 2026 — Cotonou, Benin | 3rd Edition",
  description: "3rd Edition of the Water and Sanitation Week — Harnessing Innovation and Digital Inclusion in Education and Research for Sustainable Transformation of Water, Sanitation, and Agriculture. October 20-22, 2026, Palais des Congrès, Cotonou, Benin.",
  keywords: "water, water week, Cotonou, Benin, conference, digital, C2EA, INE, UAC, research, innovation, sanitation, agriculture",
  openGraph: {
    title: "Water and Sanitation Week 2026 — Cotonou, Benin | 3rd Edition",
    description: "3rd Edition of the Water and Sanitation Week. October 20-22, 2026, Palais des Congrès, Cotonou, Benin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <Header />
        <PartnerLogosBanner />
        {children}
      </body>
    </html>
  );
}
