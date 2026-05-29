export default function CardComp({
  titolo = "Titolo competenza",
  descrizione = "Descrizione breve della competenza",
  livello = "AVANZATO",
  img = "/placeholder.png",
}) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#3b82f6] transition-all duration-300 w-64">
      
      {/* Immagine più piccola */}
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#111] border border-[#333] overflow-hidden">
        <img src={img} alt={titolo} className="w-7 h-7 object-contain" />
      </div>

      {/* Titolo */}
      <h2 className="text-white text-lg font-semibold text-center">
        {titolo}
      </h2>

      {/* Descrizione */}
      <p className="text-gray-400 text-sm text-center mt-2">
        {descrizione}
      </p>

      {/* Livello */}
      <span className="mt-4 px-4 py-1 rounded-full text-sm font-bold bg-[#3b82f6] text-white">
        {livello}
      </span>
    </div>
  );
}
