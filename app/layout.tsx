import "./globals.css";
import type { Metadata } from "next";
import FloatingBar from "@/components/FloatingBar";

export const metadata: Metadata = {
  title: "Chiddarwar Jewellers — Purity & Trust Since 2002",
  description: "Premium jewellery in Pusad. 916 hallmark guarantee, exquisite variety, heartfelt service.",
  keywords: [
    "Chiddarwar Jewellers",
    "gold jewellery",
    "Pusad",
    "916 hallmark",
    "silver ornaments"
  ],
  openGraph: {
    title: "Chiddarwar Jewellers",
    description: "Purity & Trust Since 2002",
    type: "website"
  },
  alternates: {
    canonical: "https://chiddarwarjewellers.com"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingBar />
      </body>
    </html>
  );
}
