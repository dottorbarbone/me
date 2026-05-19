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
              Attivita' di laboratorio su HTML/CSS, JavaScript, PHP e MySQL.
              Attivita' di stage presso aziende del territorio con focus su sviluppo software e supporto IT.
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
              Conoscenza del mondo vitivinicolo e vendita di vino. Gestione del magazzino e supporto alla logistica. Interazione con clienti e fornitori da tutto il mondo.
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
Attivita' di apprendimento della lingua e visita della citta'. Conoscenza di cultura e storia inglese. Esperienza di vita indipendente e gestione del budget personale. Interazione con persone di diverse nazionalità e background culturali.
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
            { icon: '⚛️', name: 'React / Next.js', level: 'Avanzato' },
            { icon: '🟨', name: 'TypeScript', level: 'Avanzato' },
            { icon: '🐍', name: 'Python', level: 'Intermedio' },
            { icon: '☁️', name: 'AWS / Cloud', level: 'Intermedio' },
            { icon: '🐳', name: 'Docker / K8s', level: 'Intermedio' },
            { icon: '🗄️', name: 'PostgreSQL', level: 'Avanzato' },
          ].map((s) => (
            <div className="skill-card" key={s.name}>
              <div className="skill-card-icon">{s.icon}</div>
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
            { name: 'Inglese — C1 Advanced', pct: '85%', w: '85%' },
            { name: 'Francese — B1 Intermedio', pct: '55%', w: '55%' },
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

      {/* ── QUOTE ── */}
      <div className="quote-block">
        <p className="quote-text">
          Non si finisce mai di imparare.<br />Ogni progetto è un nuovo punto di partenza.
        </p>
        <p className="quote-author">Principio personale</p>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        Curriculum Vitae · Aggiornato 2025 · Milano, Italia
      </footer>
    </>
  );
}