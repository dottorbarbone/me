// pages/curriculum.jsx  ─ oppure app/curriculum/page.jsx (App Router)
// Nessuna dipendenza esterna: solo Next.js + Google Fonts via <link>

export default function Curriculum() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=DM+Sans:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink:    #0d0c0a;
          --paper:  #f5f0e8;
          --cream:  #ede7d6;
          --gold:   #b89a5a;
          --gold2:  #d4b97a;
          --muted:  #7a7060;
          --line:   rgba(184,154,90,0.35);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--ink);
          color: var(--paper);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
        }

        /* ── GRAIN OVERLAY ── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: .6;
        }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 4rem 2rem;
          text-align: center;
        }

        .hero-ornament {
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, var(--gold));
          margin: 0 auto 2.5rem;
          animation: fadeDown 1.2s ease both;
        }

        .hero-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: .72rem;
          letter-spacing: .35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.8rem;
          animation: fadeUp .9s .2s ease both;
        }

        .hero-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(2.4rem, 6vw, 5.2rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -.01em;
          max-width: 820px;
          color: var(--paper);
          animation: fadeUp .9s .35s ease both;
        }

        .hero-title em {
          font-style: italic;
          color: var(--gold2);
        }

        .hero-divider {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin: 2.8rem auto 2rem;
          width: min(340px, 80vw);
          animation: fadeUp .9s .5s ease both;
        }
        .hero-divider span { flex: 1; height: 1px; background: var(--line); }
        .hero-divider i {
          width: 6px; height: 6px;
          border: 1px solid var(--gold);
          transform: rotate(45deg);
        }

        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.25rem;
          color: var(--muted);
          animation: fadeUp .9s .65s ease both;
        }

        .hero-scroll {
          position: absolute;
          bottom: 2.4rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .6rem;
          font-size: .65rem;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--muted);
          animation: fadeUp .9s .9s ease both;
        }
        .hero-scroll::after {
          content: '';
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s 1.5s ease-in-out infinite;
        }

        /* ── SECTION ── */
        section {
          max-width: 960px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .section-num {
          font-family: 'Bodoni Moda', serif;
          font-size: 4rem;
          font-weight: 400;
          color: var(--line);
          line-height: 1;
          user-select: none;
        }
        .section-info { flex: 1; }
        .section-label {
          font-size: .68rem;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: .4rem;
        }
        .section-title {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 400;
          color: var(--paper);
        }
        .section-line { flex: 1; height: 1px; background: var(--line); }

        /* ── TIMELINE ── */
        .timeline { position: relative; padding-left: 2rem; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 8px; bottom: 8px;
          width: 1px;
          background: linear-gradient(to bottom, var(--gold), transparent);
        }

        .tl-item {
          position: relative;
          padding: 0 0 3.5rem 2.5rem;
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp .7s ease forwards;
        }
        .tl-item:nth-child(1) { animation-delay: .1s }
        .tl-item:nth-child(2) { animation-delay: .25s }
        .tl-item:nth-child(3) { animation-delay: .4s }
        .tl-item:nth-child(4) { animation-delay: .55s }
        .tl-item:nth-child(5) { animation-delay: .7s }

        .tl-dot {
          position: absolute;
          left: -4px;
          top: 6px;
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 12px var(--gold2);
        }

        .tl-year {
          font-size: .68rem;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: .5rem;
        }

        .tl-title {
          font-family: 'Bodoni Moda', serif;
          font-size: 1.35rem;
          font-weight: 400;
          color: var(--paper);
          margin-bottom: .25rem;
        }

        .tl-place {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--muted);
          font-size: 1rem;
          margin-bottom: .7rem;
        }

        .tl-desc {
          font-size: .88rem;
          line-height: 1.7;
          color: rgba(245,240,232,.55);
          max-width: 560px;
        }

        /* ── SKILLS GRID ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          border: 1px solid var(--line);
          padding: 1.6rem 1.8rem;
          position: relative;
          overflow: hidden;
          transition: border-color .3s, transform .3s;
          cursor: default;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(184,154,90,.08), transparent);
          opacity: 0;
          transition: opacity .3s;
        }
        .skill-card:hover { border-color: var(--gold); transform: translateY(-3px); }
        .skill-card:hover::before { opacity: 1; }

        .skill-card-icon {
          font-size: 1.6rem;
          margin-bottom: .8rem;
          filter: grayscale(30%);
        }
        .skill-card-name {
          font-family: 'Bodoni Moda', serif;
          font-size: 1.1rem;
          color: var(--paper);
          margin-bottom: .3rem;
        }
        .skill-card-level {
          font-size: .72rem;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* ── BAR ── */
        .bar-row { display: flex; flex-direction: column; gap: 1.4rem; }
        .bar-item {}
        .bar-meta { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: .5rem; }
        .bar-name { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--paper); }
        .bar-pct { font-size: .7rem; letter-spacing: .2em; color: var(--gold); }
        .bar-track {
          height: 1px;
          background: var(--line);
          position: relative;
          overflow: visible;
        }
        .bar-fill {
          height: 1px;
          background: linear-gradient(to right, var(--gold), var(--gold2));
          position: relative;
          transform-origin: left;
          animation: growBar 1.2s ease forwards;
          animation-play-state: paused;
        }
        .bar-fill::after {
          content: '';
          position: absolute;
          right: 0; top: 50%;
          transform: translateY(-50%);
          width: 5px; height: 5px;
          background: var(--gold2);
          border-radius: 50%;
        }

        /* ── QUOTE ── */
        .quote-block {
          max-width: 960px;
          margin: 0 auto;
          padding: 5rem 2rem;
          text-align: center;
          position: relative;
        }
        .quote-block::before {
          content: '❝';
          font-family: 'Bodoni Moda', serif;
          font-size: 8rem;
          color: var(--line);
          position: absolute;
          top: 1rem; left: 50%;
          transform: translateX(-50%);
          line-height: 1;
          user-select: none;
        }
        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          font-style: italic;
          line-height: 1.5;
          color: var(--cream);
          position: relative;
          z-index: 1;
        }
        .quote-author {
          margin-top: 1.5rem;
          font-size: .72rem;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* ── FOOTER ── */
        footer {
          text-align: center;
          padding: 3rem 2rem 4rem;
          border-top: 1px solid var(--line);
          font-size: .72rem;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ── KEYFRAMES ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%,100% { opacity: .4; }
          50%     { opacity: 1; }
        }
        @keyframes growBar {
          from { width: 0; }
          to   { width: 100%; }
        }

        /* ── SEPARATOR ── */
        .sep {
          max-width: 960px;
          margin: 0 auto;
          height: 1px;
          background: var(--line);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
          .section-header { flex-wrap: wrap; gap: .8rem; }
          .section-line { display: none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-ornament" />
        <p className="hero-label">Documento personale · 2026</p>
        <h1 className="hero-title">
          Il mio curriculum<br />
          <em>scolastico‑professionale</em>
        </h1>
        <div className="hero-divider">
          <span /><i /><span />
        </div>
        <p className="hero-subtitle">
          Un percorso costruito con passione, metodo e curiosità
        </p>
        <div className="hero-scroll">Swipe</div>
      </div>

      {/* ── FORMAZIONE ── */}
      <section>
        <div className="section-header">
          <span className="section-num">01</span>
          <div className="section-info">
            <p className="section-label">Percorso scolastico</p>
            <h2 className="section-title">Formazione</h2>
          </div>
          <div className="section-line" />
        </div>

        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot" />
            <p className="tl-year">2021 – 2024</p>
            <h3 className="tl-title">Diploma professionale in informatica</h3>
            <p className="tl-place">Don Bosco</p>
            <p className="tl-desc">
              Specializzazione in programmazione e progettazioni di siti web/gestionali.
              Attività di laboratorio su HTML/CSS, JavaScript, PHP e MySQL.
              Attività di stage presso aziende del territorio con focus su sviluppo software e supporto IT.
              Qualifica con test su linguaggi di programmazione, algoritmi, sicurezza informatica e gestione database.
            <br/>
              <b>Votazione finale: 100/100</b>
            </p>
          </div>
         </div>
      </section>

      <div className="sep" />

      {/* ── ESPERIENZE ── */}
      <section>
        <div className="section-header">
          <span className="section-num">02</span>
          <div className="section-info">
            <p className="section-label">Carriera professionale</p>
            <h2 className="section-title">Esperienze</h2>
          </div>
          <div className="section-line" />
        </div>

        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot" />
            <p className="tl-year">2021-presente</p>
            <h3 className="tl-title">Attività lavorativa</h3>
            <p className="tl-place">Azienda Agricola</p>
            <p className="tl-desc">
              Conoscenza del mondo vitivinicolo e vendita di vino. Gestione del magazzino e supporto alla logistica. Interazione con clienti e fornitori da tutto il mondo. Responsabilità nell'organizzazione di feste e eventi aziendali. Sviluppo di competenze trasversali come comunicazione, problem solving e lavoro di squadra. 
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-dot" />
            <p className="tl-year">2023 – 2024</p>
            <h3 className="tl-title">Stage</h3>
            <p className="tl-place">Code01 -Salgareda(TV)</p>
            <p className="tl-desc">
            Affiancamento al team di sviluppo software. Sviluppo di un gestionale interno con PHP. Partecipazione a code review e stand-up meeting quotidiani. Formazione su metodologie agile e best practice di sviluppo.
            Affiancamento inoltre al team d gestione sistemista informatico. Supporto IT
            </p>
          </div>
          <div className="tl-item">
            <div className="tl-dot" />
            <p className="tl-year">2022</p>
            <h3 className="tl-title">Viaggio Studio</h3>
            <p className="tl-place">Londra</p>
            <p className="tl-desc">
              Attività di apprendimento della lingua e visita della città. Conoscenza di cultura e storia inglese. Esperienza di vita indipendente e gestione del budget personale. Interazione con persone di diverse nazionalità e background culturali.
            </p>
          </div>
        </div>
      </section>

      <div className="sep" />

      {/* ── COMPETENZE ── */}
      <section>
        <div className="section-header">
          <span className="section-num">03</span>
          <div className="section-info">
            <p className="section-label">Abilità tecniche</p>
            <h2 className="section-title">Competenze</h2>
          </div>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {[
            { iconUrl: 'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg', name: 'Programmazione Software', level: 'Avanzato' },
            { iconUrl: 'https://firebase.google.com/static/images/social.png?hl=it', name: 'Programmazione Database', level: 'Avanzato' },
            { iconUrl: 'data:image/jpeg;base64,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', name: 'Programmazione di Gestionali', level: 'Avanzato' },
            { iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1280px-Visual_Studio_Icon_2022.svg.png', name: 'Programmazione applicazioni Windows', level: 'Base' },
            { iconUrl: 'https://www.accuratereviews.com/wp-content/uploads/2024/11/Figma.jpg', name: 'Progettazione Grafica con software Figma', level: 'Avanzato' },
            { iconUrl: 'https://images.seeklogo.com/logo-png/49/2/omron-logo-png_seeklogo-493631.png', name: 'Realizzazione di programmi con linguaggio ladder e HMI', level: 'Avanzato' },
            { iconUrl: 'https://www.unionegeometri.com/wp-content/uploads/2022/11/mettere-in-sicurezza-un-impianto-elettrico.png', name: 'Capacità manuale di realizzare impianti elettrici', level: 'Avanzato' },
            { iconUrl: 'https://www.pcassemblati.eu/52110-home_default/pc-gaming-intel-i5-14600k-ssd-500-ram-16gb-rtx-5060-8gb.jpg', name: 'Montaggio e Smontaggio di componenti elettrici/computer', level: 'Avanzato' },
            { iconUrl: 'https://www.mylanding.it/wp-content/uploads/2025/10/differenza-tecnico-informatico-consulente.jpg', name: 'Progettazione e assemblaggio di Computer', level: 'Avanzato' },
            { iconUrl: 'https://cd-keys.online/281-large_default/microsoft-word-2024.jpg', name: 'Capacità di formulare rapportini a lavoro finito', level: 'Intermedio' },
            { iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1280px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png', name: 'Capacità di formulare tabelle di calcolo', level: 'Intermedio' },
            { iconUrl: 'https://cdn-icons-png.flaticon.com/512/6754/6754689.png', name: 'Capacità di creare grafici per la stesura di un piano nel tempo', level: 'Intermedio' },
            
            
          ].map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-card-icon"><img src={s.iconUrl} alt={s.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }}/></div>
              <div className="skill-card-name">{s.name}</div>
              <div className="skill-card-level">{s.level}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="sep" />

      {/* ── LINGUE ── */}
      <section>
        <div className="section-header">
          <span className="section-num">04</span>
          <div className="section-info">
            <p className="section-label">Comunicazione</p>
            <h2 className="section-title">Lingue</h2>
          </div>
          <div className="section-line" />
        </div>

        <div className="bar-row">
          {[
            { name: 'Italiano — Madrelingua', pct: '100%', w: '100%' },
            { name: 'Inglese — B2', pct: '85%', w: '85%' },
          ].map((l) => (
            <div className="bar-item" key={l.name}>
              <div className="bar-meta">
                <span className="bar-name">{l.name}</span>
                <span className="bar-pct">{l.pct}</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: l.w, animationPlayState: 'running' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* ── FOOTER ── */}
      <footer>
        Curriculum Vitae · Aggiornato 2025 · Milano, Italia
      </footer>
    </>
  );
}