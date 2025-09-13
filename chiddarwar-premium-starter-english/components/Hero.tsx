export default function Hero() {
  return (
    <section className="relative">
      <img src="/hero.jpg" alt="Heritage gold set" className="w-full h-[62vh] object-cover" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <h1 className="h1">Legacy in <span className="gold-gradient">Every Carat</span></h1>
          <p className="p mt-4 max-w-xl">Since 2002—916 hallmark purity, exquisite variety, and heartfelt service in Pusad.</p>
          <div className="mt-8 flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-full bg-gold text-charcoal font-medium">Visit Store</a>
            <a href="/schemes" className="px-6 py-3 rounded-full border border-white/70 hover:bg-white/10">Explore Schemes</a>
          </div>
        </div>
      </div>
    </section>
  )
}
