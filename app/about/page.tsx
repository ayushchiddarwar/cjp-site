"use client";

import Navbar from "@/components/Navbar";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1">{t("about.title")}</h1>
        <p className="p mt-6 max-w-3xl">{t("about.body")}</p>
      </section>
    </main>
  );
}
