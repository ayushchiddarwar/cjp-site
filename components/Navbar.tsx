export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-maroon h2 font-semibold">Chiddarwar Jewellers</a>
        <nav className="hidden md:flex gap-8">
          {['About','Schemes','Catalogue','Events','Contact'].map(i=>(
            <a key={i} href={`/${i.toLowerCase()}`} className="p font-medium hover:text-maroon transition">{i}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
            <a href="https://wa.me/917888047331" className="px-4 py-2 rounded-full bg-maroon text-ivory text-sm hover:opacity-90">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
