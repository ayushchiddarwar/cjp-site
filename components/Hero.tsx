"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative">
      <img src="/hero.jpg" alt={t("hero.alt")}
        className="w-full h-[62vh] object-cover" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <h1 className="h1">
            {t("hero.heading1")} <span className="gold-gradient">{t("hero.heading2")}</span>
          </h1>
          <p className="p mt-4 max-w-xl">{t("hero.tagline")}</p>
          <div className="mt-8 flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-full bg-gold text-charcoal font-medium">
              {t("hero.visit")}
            </a>
            <a href="/schemes" className="px-6 py-3 rounded-full border border-white/70 hover:bg-white/10">
              {t("hero.schemes")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
