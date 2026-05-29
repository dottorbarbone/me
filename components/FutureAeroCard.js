export default function FutureProCard({
  titolo = "Futuro Professionale",
  descrizione = "Percorso nella manutenzione aeronautica militare",
  img = "/aeronautica.jpg",
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#3b82f6] transition-all duration-300 w-full max-w-xl mx-auto">
      
      {/* Immagine grande */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={img}
          alt={titolo}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenuto */}
      <div className="p-6">
        <h2 className="text-white text-2xl font-bold mb-2">
          {titolo}
        </h2>

        <p className="text-gray-300 leading-relaxed">
          {descrizione}
        </p>
      </div>
    </div>
  );
}
