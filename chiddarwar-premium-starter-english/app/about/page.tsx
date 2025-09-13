import Navbar from "@/components/Navbar";

export default function About(){
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1">About Us</h1>
        <p className="p mt-6 max-w-3xl">
          Founded by Bhagwat Chiddarwar in 2002, we brought 916 hallmark purity to Pusad,
          introduced diamonds in 2012, and hosted the city’s first diamond exhibition in 2014
          with a car as the grand prize. We continue to serve with trust, craftsmanship, and care.
        </p>
      </section>
    </main>
  )
}
