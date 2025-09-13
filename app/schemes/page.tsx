import Navbar from "@/components/Navbar";

export default function Schemes(){
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1">Our Schemes</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title:'Dhan Laxmi', desc:'Scratch & Win + Lucky Draw', href:'/schemes/dhan-laxmi'},
            {title:'Digital Gold', desc:'Buy online, redeem in-store', href:'/schemes/digital-gold'},
            {title:'Loyalty Points', desc:'Earn on every purchase', href:'/schemes/loyalty'}
          ].map(x => (
            <a key={x.title} href={x.href} className="rounded-2xl bg-white shadow-soft p-6 hover:shadow-lg transition">
              <div className="text-maroon font-semibold text-lg">{x.title}</div>
              <p className="p mt-2 text-charcoal/80">{x.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
