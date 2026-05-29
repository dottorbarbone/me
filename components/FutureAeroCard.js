export default function FutureAeroCard({
  titolo = "Futuro Professionale",
  descrizione = "Percorso nella manutenzione aeronautica militare",
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eurofighter_Typhoon_-_RIAT_2016_%2828417097280%29.jpg/1280px-Eurofighter_Typhoon_-_RIAT_2016_%2828417097280%29.jpg",
  link = "https://www.aeronautica.difesa.it",
}) {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#3b82f6] transition-all duration-300">

      {/* Immagine cliccabile */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img
            src={img}
            alt={titolo}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </a>

      {/* Contenuto */}
      <div className="p-8">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {titolo}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          {descrizione}
        </p>
      </div>
    </div>
  );
}
