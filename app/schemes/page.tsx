"use client";

import Navbar from "@/components/Navbar";
import { useI18n } from "@/lib/i18n";

export default function Schemes() {
  const { t } = useI18n();
  const items = [
    { title: t("schemeCards.dhanLaxmi"), desc: t("schemeCards.dhanLaxmiDesc"), href: "/schemes/dhan-laxmi" },
    { title: t("schemeCards.digitalGold"), desc: t("schemeCards.digitalGoldDesc"), href: "/schemes/digital-gold" },
    { title: t("schemeCards.loyaltyPoints"), desc: t("schemeCards.loyaltyPointsDesc"), href: "/schemes/loyalty" }
  ];
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1">{t("schemesPage.title")}</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((x) => (
            <a key={x.title} href={x.href} className="rounded-2xl bg-white shadow-soft p-6 hover:shadow-lg transition">
              <div className="text-maroon font-semibold text-lg">{x.title}</div>
              <p className="p mt-2 text-charcoal/80">{x.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
