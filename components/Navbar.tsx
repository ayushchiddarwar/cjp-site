"use client";

import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const items = ["about", "schemes", "catalogue", "events", "contact"];
  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-maroon h2 font-semibold">{t("nav.title")}</a>
        <nav className="hidden md:flex gap-8">
          {items.map((i) => (
            <a key={i} href={`/${i}`} className="p font-medium hover:text-maroon transition">
              {t(`nav.${i}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-4 py-2 rounded-full bg-maroon text-ivory text-sm hover:opacity-90"
          >
            {t("nav.whatsapp")}
          </a>
          <button
            onClick={() => setLocale(locale === "en" ? "mr" : "en")}
            className="text-sm font-medium underline"
          >
            {locale === "en" ? "MR" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}
