const items = [
  {title:'Dhan Laxmi', desc:'Scratch & Win + Lucky Draw', href:'/schemes/dhan-laxmi'},
  {title:'Digital Gold', desc:'Buy online, redeem in-store', href:'/schemes/digital-gold'},
  {title:'Loyalty Points', desc:'Earn on every purchase', href:'/schemes/loyalty'},
]
export default function SchemeCards(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="h2 mb-8">Our Schemes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i=>(
          <a key={i.title} href={i.href}
             className="rounded-2xl bg-white shadow-soft p-6 hover:shadow-lg transition">
            <div className="text-maroon font-semibold text-lg">{i.title}</div>
            <p className="p mt-2 text-charcoal/80">{i.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
