import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const viewport: Viewport = {
  themeColor: "#0047a9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shashwat | Precision Orthopedic & Surgical Solutions",
  description: "Advanced surgical portfolio and clinical precision. Explore our curated database of orthopedic trauma, arthroscopy, and spine solutions trusted by 2,400+ surgical centers globally.",
  keywords: ["orthopedic", "surgery", "trauma", "arthroscopy", "spine", "medical devices", "shashwat", "clinical solutions"],
  openGraph: {
    title: "Shashwat | Precision Orthopedic & Surgical Solutions",
    description: "Navigate our comprehensive surgical portfolio through our anatomical gateway. Trusted by 2,400+ hospitals in 50+ countries.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-body flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
