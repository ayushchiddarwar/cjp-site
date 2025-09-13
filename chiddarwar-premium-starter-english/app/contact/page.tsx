import Navbar from "@/components/Navbar";

export default function Contact(){
  return (
    <main>
      <Navbar />
      <section className="container py-16">
        <h1 className="h1">Contact</h1>
        <p className="p mt-6">Call: +91 XXXXX XXXXX<br/>Email: info@chiddarwarjewellers.com</p>
        <div className="mt-8">
          <iframe
            src="https://maps.google.com/maps?q=Pusad%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="360" style={{border:0}} loading="lazy"></iframe>
        </div>
      </section>
      <a href="https://wa.me/91XXXXXXXXXX"
         className="fixed bottom-5 right-5 px-5 py-3 rounded-full bg-maroon text-ivory shadow-soft">WhatsApp Us</a>
    </main>
  )
}
