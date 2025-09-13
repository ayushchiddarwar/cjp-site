import Navbar from "@/components/Navbar";

export default function Events(){
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1">Events & Sponsorships</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {title:'Exhibitions', desc:'Showcasing fine craftsmanship across cities'},
            {title:'Lucky Draws', desc:'Exciting prizes for our valued patrons'},
            {title:'Local Sponsorships', desc:'Supporting community events and causes'}
          ].map(x => (
            <div key={x.title} className="rounded-2xl bg-white shadow-soft p-6">
              <div className="text-maroon font-semibold text-lg">{x.title}</div>
              <p className="p mt-2 text-charcoal/80">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
