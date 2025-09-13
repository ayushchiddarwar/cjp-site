import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemeCards from "@/components/SchemeCards";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="h2 mb-6">Featured Collections</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard img="/collections/bridal.jpg" title="Bridal" />
          <ProductCard img="/collections/antique.jpg" title="Antique" />
          <ProductCard img="/collections/diamond.jpg" title="Diamond" />
        </div>
      </section>
      <SchemeCards />
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-8">
          <div><div className="h2 text-maroon">Chiddarwar Jewellers</div>
            <p className="p mt-2">Purity & Trust Since 2002</p></div>
          <div><div className="font-semibold">Visit Us</div>
            <p className="p mt-2">Pusad, Maharashtra • 10:30am – 8:30pm</p></div>
          <div><div className="font-semibold">Contact</div>
            <p className="p mt-2">+91 XXXXX XXXXX • info@chiddarwarjewellers.com</p></div>
        </div>
      </footer>
    </main>
  )
}
