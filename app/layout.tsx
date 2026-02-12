import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Semaine de l'Eau 2026 — Cotonou, Bénin | Conférence Internationale",
  description: "2ème édition de la Semaine de l'Eau et de l'Assainissement — De la Recherche à l'Innovation et au Transfert de Technologies. 3-5 juin 2026, Palais des Congrès, Cotonou.",
  keywords: "eau, water week, Cotonou, Bénin, conférence, hydrologie, C2EA, IAHS, recherche, innovation",
  openGraph: {
    title: "Semaine de l'Eau 2026 — Cotonou, Bénin",
    description: "Conférence internationale sur l'eau et l'assainissement. 3-5 juin 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
