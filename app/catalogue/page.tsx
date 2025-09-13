"use client";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useI18n } from "@/lib/i18n";

export default function Catalogue() {
  const { t } = useI18n();
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1 mb-8">{t("catalogue.title")}</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard img="/collections/bridal.jpg" title={t("products.bridal")} />
          <ProductCard img="/collections/antique.jpg" title={t("products.antique")} />
          <ProductCard img="/collections/diamond.jpg" title={t("products.diamond")} />
        </div>
        <p className="p mt-8 text-charcoal/80">{t("catalogue.info")}</p>
      </section>
    </main>
  );
}
