export default function ProductCard({img, title}:{img:string; title:string}){
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-soft">
      <img src={img} alt={title} className="h-72 w-full object-cover group-hover:scale-[1.02] transition" />
      <div className="p-4 flex items-center justify-between">
        <div className="p font-medium">{title}</div>
        <a href="https://wa.me/91XXXXXXXXXX"
           className="text-sm px-3 py-1.5 rounded-full bg-maroon text-ivory">Enquire</a>
      </div>
    </div>
  )
}
