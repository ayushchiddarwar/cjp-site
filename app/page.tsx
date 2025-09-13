"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemeCards from "@/components/SchemeCards";
import ProductCard from "@/components/ProductCard";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="h2 mb-6">{t("home.featured")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard img="/collections/bridal.jpg" title={t("products.bridal")} />
          <ProductCard img="/collections/antique.jpg" title={t("products.antique")} />
          <ProductCard img="/collections/diamond.jpg" title={t("products.diamond")} />
        </div>
      </section>
      <SchemeCards />
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="h2 text-maroon">{t("home.footerTitle")}</div>
            <p className="p mt-2">{t("home.footerTagline")}</p>
          </div>
          <div>
            <div className="font-semibold">{t("home.visitUs")}</div>
            <p className="p mt-2">{t("home.visitInfo")}</p>
          </div>
          <div>
            <div className="font-semibold">{t("home.contact")}</div>
            <p className="p mt-2">{t("home.contactInfo")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
