import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Shashwat | Precision Orthopedic Solutions",
  description: "Advanced surgical portfolio and clinical precision. Explore our curated database of orthopedic trauma, arthroscopy, and spine solutions.",
  keywords: ["orthopedic", "surgery", "trauma", "arthroscopy", "spine", "medical devices", "shashwat"],
  openGraph: {
    title: "Shashwat | Precision Orthopedic Solutions",
    description: "Navigate our comprehensive surgical portfolio through our anatomical gateway.",
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
      <body className="antialiased font-body flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
