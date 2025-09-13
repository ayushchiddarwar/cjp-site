export default function Navbar() {
  const items = ['About','Schemes','Catalogue','Events','Contact'];
  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-maroon h2 font-semibold">Chiddarwar Jewellers</a>
        <nav className="hidden md:flex gap-8">
          {items.map(i=>(
            <a key={i} href={`/${i.toLowerCase()}`} className="p font-medium hover:text-maroon transition">{i}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/91XXXXXXXXXX" className="px-4 py-2 rounded-full bg-maroon text-ivory text-sm hover:opacity-90">
WhatsApp</a>
        </div>
      </div>
      <nav className="md:hidden border-t border-ivory/40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex gap-6 overflow-x-auto">
          {items.map(i=>(
            <a key={i} href={`/${i.toLowerCase()}`} className="p text-sm font-medium whitespace-nowrap hover:text-maroon transition">{i}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
