import "./globals.css";
import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Chiddarwar Jewellers — Purity & Trust Since 2002",
  description: "Premium jewellery in Pusad. 916 hallmark guarantee, exquisite variety, heartfelt service.",
  openGraph: {
    title: "Chiddarwar Jewellers",
    description: "Purity & Trust Since 2002",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
