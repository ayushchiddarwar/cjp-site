"use client";

import { useI18n } from "@/lib/i18n";

export default function SchemeCards() {
  const { t } = useI18n();
  const items = [
    { title: t("schemeCards.dhanLaxmi"), desc: t("schemeCards.dhanLaxmiDesc"), href: "/schemes/dhan-laxmi" },
    { title: t("schemeCards.digitalGold"), desc: t("schemeCards.digitalGoldDesc"), href: "/schemes/digital-gold" },
    { title: t("schemeCards.loyaltyPoints"), desc: t("schemeCards.loyaltyPointsDesc"), href: "/schemes/loyalty" }
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="h2 mb-8">{t("schemeCards.heading")}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <a key={i.title} href={i.href} className="rounded-2xl bg-white shadow-soft p-6 hover:shadow-lg transition">
            <div className="text-maroon font-semibold text-lg">{i.title}</div>
            <p className="p mt-2 text-charcoal/80">{i.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
