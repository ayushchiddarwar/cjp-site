import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Catalogue(){
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1 mb-8">Catalogue</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard img="/collections/bridal.jpg" title="Bridal" />
          <ProductCard img="/collections/antique.jpg" title="Antique" />
          <ProductCard img="/collections/diamond.jpg" title="Diamond" />
        </div>
        <p className="p mt-8 text-charcoal/80">Tap “Enquire” to WhatsApp us for details, pricing, and availability.</p>
      </section>
    </main>
  )
}
