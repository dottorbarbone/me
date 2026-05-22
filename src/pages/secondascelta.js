// pages/curriculum.jsx  ─ oppure app/curriculum/page.jsx
// Nessuna dipendenza esterna: solo Next.js + Google Fonts via <link>
import Panel from "../../components/panel";
export default function Curriculum2() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:        #080b10;
          --bg2:       #0d1117;
          --surface:   rgba(255,255,255,0.038);
          --surface2:  rgba(255,255,255,0.065);
          --border:    rgba(255,255,255,0.08);
          --border2:   rgba(57,255,154,0.25);
          --green:     #39ff9a;
          --green2:    #00c97a;
          --cyan:      #00d4ff;
          --text:      #e8edf2;
          --muted:     #6b7785;
          --muted2:    #8b97a6;
          --card-shadow:
            0 0 0 1px rgba(57,255,154,0.07),
            0 2px 4px rgba(0,0,0,0.5),
            0 8px 24px rgba(0,0,0,0.45),
            0 24px 48px rgba(0,0,0,0.3),
            0 0 80px rgba(57,255,154,0.04);
          --card-shadow-hover:
            0 0 0 1px rgba(57,255,154,0.18),
            0 4px 8px rgba(0,0,0,0.6),
            0 16px 40px rgba(0,0,0,0.5),
            0 40px 80px rgba(0,0,0,0.35),
            0 0 120px rgba(57,255,154,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Syne', sans-serif;
          font-weight: 400;
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ── DOT GRID BACKGROUND ── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(57,255,154,0.12) 1px, transparent 0);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── AMBIENT GLOW ── */
        body::after {
          content: '';
          position: fixed;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(ellipse at center,
            rgba(57,255,154,0.06) 0%,
            rgba(0,212,255,0.03) 40%,
            transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── UTILITY ── */
        .relative { position: relative; z-index: 1; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          padding: 5rem 2rem 8rem;
          text-align: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem;
          letter-spacing: .08em;
          color: var(--green);
          background: rgba(57,255,154,0.08);
          border: 1px solid rgba(57,255,154,0.2);
          padding: .35rem 1rem;
          border-radius: 100px;
          margin-bottom: 2.5rem;
          animation: fadeUp .6s ease both;
        }
        .hero-tag::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 9vw, 7.5rem);
          line-height: .95;
          letter-spacing: -.04em;
          color: var(--text);
          animation: fadeUp .6s .1s ease both;
          opacity: 0;
        }
        .hero-name .accent {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1px rgba(57,255,154,0.5);
          font-style: italic;
          font-family: 'Instrument Serif', serif;
          font-size: clamp(2rem, 7vw, 6rem);
          font-weight: 400;
          letter-spacing: -.02em;
          margin-top: .15em;
        }

        .hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2.2rem;
          animation: fadeUp .6s .25s ease both;
          opacity: 0;
        }
        .hero-meta-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: .75rem;
          color: var(--muted2);
          letter-spacing: .04em;
        }
        .hero-meta-sep {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--muted);
        }

        .hero-cta {
          margin-top: 3.5rem;
          animation: fadeUp .6s .4s ease both;
          opacity: 0;
        }
        .hero-cta-inner {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: .75rem;
          color: var(--muted);
          letter-spacing: .12em;
          text-transform: uppercase;
          flex-direction: column;
        }
        .hero-cta-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--green), transparent);
          animation: slideDown 2s 1s ease-in-out infinite;
        }

        /* ── LAYOUT ── */
        .wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem 10rem;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        /* ── FLOATING CARD ── */
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: var(--card-shadow);
          transition: box-shadow .4s ease, transform .4s ease, border-color .4s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .card:hover {
          box-shadow: var(--card-shadow-hover);
          transform: translateY(-4px);
          border-color: rgba(57,255,154,0.15);
        }

        /* ── CARD HEADER ── */
        .card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .card-header-left {}
        .card-section-id {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem;
          color: var(--green);
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: .5rem;
        }
        .card-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: var(--text);
          letter-spacing: -.02em;
        }
        .card-header-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 4rem;
          font-weight: 300;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          user-select: none;
        }

        /* ── TIMELINE ── */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tl-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 0 2rem;
          position: relative;
          padding-bottom: 2.5rem;
        }
        .tl-item:last-child { padding-bottom: 0; }

        .tl-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-top: .3rem;
          position: relative;
        }
        .tl-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem;
          color: var(--green);
          letter-spacing: .08em;
          text-align: right;
          line-height: 1.4;
        }
        .tl-left::after {
          content: '';
          position: absolute;
          right: -2rem;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--border2) 0%, var(--border) 100%);
        }
        .tl-item:last-child .tl-left::after {
          background: linear-gradient(to bottom, var(--border2) 0%, transparent 100%);
        }

        .tl-dot-wrap {
          position: absolute;
          right: calc(-2rem - 5px);
          top: 4px;
          width: 11px; height: 11px;
          z-index: 2;
        }
        .tl-dot {
          width: 11px; height: 11px;
          border-radius: 50%;
          background: var(--bg2);
          border: 2px solid var(--green);
          box-shadow: 0 0 10px rgba(57,255,154,0.5), 0 0 20px rgba(57,255,154,0.2);
        }

        .tl-right {
          padding-top: .15rem;
          padding-left: 1rem;
        }
        .tl-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: .3rem;
          letter-spacing: -.01em;
        }
        .tl-place {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem;
          color: var(--cyan);
          letter-spacing: .06em;
          margin-bottom: .7rem;
        }
        .tl-desc {
          font-size: .88rem;
          line-height: 1.75;
          color: var(--muted2);
          max-width: 580px;
        }
        .tl-badge {
          display: inline-block;
          margin-top: .8rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem;
          color: var(--green);
          background: rgba(57,255,154,0.08);
          border: 1px solid rgba(57,255,154,0.2);
          padding: .25rem .6rem;
          border-radius: 4px;
          letter-spacing: .06em;
        }

        /* ── TWO COL GRID ── */
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        /* ── SKILLS ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .skill-item {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.4rem 1.2rem;
          display: flex;
          flex-direction: column;
          gap: .5rem;
          transition: border-color .3s, background .3s, transform .25s;
          position: relative;
          overflow: hidden;
        }
        .skill-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(57,255,154,0.05), transparent 60%);
          opacity: 0;
          transition: opacity .3s;
        }
        .skill-item:hover {
          border-color: rgba(57,255,154,0.25);
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }
        .skill-item:hover::before { opacity: 1; }

        .skill-icon {
          font-size: 1.5rem;
          margin-bottom: .2rem;
          filter: saturate(.8);
        }
        .skill-name {
          font-size: .9rem;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -.01em;
        }
        .skill-level {
          font-family: 'JetBrains Mono', monospace;
          font-size: .62rem;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .skill-level.adv  { color: var(--green); }
        .skill-level.mid  { color: var(--cyan); }

        /* ── LANGUAGE BARS ── */
        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
        .lang-row {}
        .lang-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: .55rem;
        }
        .lang-name {
          font-size: .9rem;
          font-weight: 600;
          color: var(--text);
        }
        .lang-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem;
          color: var(--green);
          letter-spacing: .1em;
          background: rgba(57,255,154,0.08);
          border: 1px solid rgba(57,255,154,0.15);
          padding: .2rem .5rem;
          border-radius: 4px;
        }
        .lang-track {
          height: 2px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }
        .lang-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(to right, var(--green2), var(--green));
          position: relative;
          animation: growBar 1.4s cubic-bezier(.16,1,.3,1) forwards;
          animation-play-state: running;
        }
        .lang-fill.secondary {
          background: linear-gradient(to right, #0099cc, var(--cyan));
        }
        .lang-fill.tertiary {
          background: linear-gradient(to right, #0066aa, #0099cc);
        }

        /* ── PERSONAL CARD ── */
        .personal-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: .75rem;
        }
        .personal-item {
          display: flex;
          align-items: center;
          gap: .8rem;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: .9rem 1.1rem;
        }
        .personal-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(57,255,154,0.1);
          border: 1px solid rgba(57,255,154,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .personal-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: .6rem;
          color: var(--muted);
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-bottom: .2rem;
        }
        .personal-value {
          font-size: .85rem;
          font-weight: 500;
          color: var(--text);
        }

        /* ── QUOTE ── */
        .quote-card {
          background: linear-gradient(135deg, rgba(57,255,154,0.06), rgba(0,212,255,0.04), rgba(255,255,255,0.02));
          border: 1px solid rgba(57,255,154,0.12);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          text-align: center;
          box-shadow:
            0 0 0 1px rgba(57,255,154,0.05),
            0 8px 32px rgba(0,0,0,0.4),
            0 0 80px rgba(57,255,154,0.04);
          position: relative;
          overflow: hidden;
        }
        .quote-card::before {
          content: '"';
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Instrument Serif', serif;
          font-size: 12rem;
          color: rgba(57,255,154,0.04);
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }
        .quote-text {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: clamp(1.3rem, 3vw, 2rem);
          line-height: 1.5;
          color: var(--text);
          position: relative;
          z-index: 1;
        }
        .quote-author {
          margin-top: 1.2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem;
          color: var(--green);
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        /* ── FOOTER ── */
        footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: .65rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--muted);
          position: relative;
          z-index: 1;
        }

        /* ── KEYFRAMES ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          50%      { opacity: 1; transform: translateY(10px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 8px var(--green); }
          50%      { box-shadow: 0 0 16px var(--green), 0 0 32px rgba(57,255,154,0.4); }
        }
        @keyframes growBar {
          from { width: 0; }
          to   { width: 100%; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .personal-grid { grid-template-columns: 1fr; }
          .tl-item { grid-template-columns: 80px 1fr; gap: 0 1rem; }
          .tl-left::after { right: -1rem; }
          .tl-dot-wrap { right: calc(-1rem - 5px); }
          .tl-right { padding-left: .5rem; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr 1fr; }
          .tl-item { grid-template-columns: 1fr; }
          .tl-left { align-items: flex-start; margin-bottom: .5rem; }
          .tl-left::after { display: none; }
          .tl-dot-wrap { display: none; }
          .tl-right { padding-left: 0; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-tag">curriculum vitae · 2026</div>
        <h1 className="hero-name">
          Curriculum
          <span className="accent">Scolastico · Professionale</span>
        </h1>
        <div className="hero-meta">
          <span className="hero-meta-item">Salgareda, Italia</span>
          <span className="hero-meta-sep" />
          <span className="hero-meta-item">Sviluppo Software</span>
          <span className="hero-meta-sep" />
          <span className="hero-meta-item">Aggiornato 2026</span>
        </div>
        <div className="hero-cta">
          <div className="hero-cta-inner">
            <span>scroll</span>
            <div className="hero-cta-line" />
          </div>
        </div>
      </div>

      {/* ── WRAPPER ── */}
      <div className="wrapper">

        {/* ── 00 DATI PERSONALI ── */}
        <div className="card">
          <div className="card-header">
            <div className="card-header-left">
              <p className="card-section-id">// 00</p>
              <h2 className="card-title">Dati Personali</h2>
            </div>
            <span className="card-header-num">00</span>
          </div>
          <div className="personal-grid">
            {[
              { icon: '📍', label: 'Città', value: 'Salgareda, Italia' },
              { icon: '🎂', label: 'Anno', value: '2007' },
              { icon: '✉️', label: 'Email', value: 'eliabarbaric@icloud.com' },
              { icon: '📱', label: 'Telefono', value: '3519755173' },
            ].map((p) => (
              <div className="personal-item" key={p.label}>
                <div className="personal-icon">{p.icon}</div>
                <div>
                  <div className="personal-label">{p.label}</div>
                  <div className="personal-value">{p.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 01 FORMAZIONE ── */}
        <div className="card">
        <div sxtyle={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="card-header">
            <div className="card-header-left">
              <p className="card-section-id">// 01</p>
              <h2 className="card-title">Formazione</h2>
            </div>
            <span className="card-header-num">01</span>
          </div>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2021<br/>2024</span>
                <div className="tl-dot-wrap"><div className="tl-dot" /></div>
              </div>
              <div className="tl-right">
                <div className="tl-title">Diploma professionale in informatica</div>
                <div className="tl-place">Don Bosco</div>
                <div className="tl-desc">
                  Specializzazione in programmazione e progettazione di siti web e gestionali.
                  Attività di laboratorio su HTML/CSS, JavaScript, PHP e MySQL.
                  Stage aziendale con focus su sviluppo software e supporto IT.
                  Qualifica su linguaggi di programmazione, algoritmi, sicurezza informatica e gestione database.
                </div>
                <span className="tl-badge">✦ Votazione finale: 100 / 100</span>
              </div>
            </div>
          </div>
        </div>

          <br />
          <Panel title='Laboratorio' text='Laboriatorio informatica Don Bosco' radius="10px" bgimage='https://www.salesianipiemonte.info/wp-content/uploads/2017/06/34-DBosco-e-giovani-NMusio.jpg' />
          <br />
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2021<br/>2024</span>
                <div className="tl-dot-wrap"><div className="tl-dot" /></div>
              </div>
              <div className="tl-right">
                <div className="tl-title">Diploma professionale in informatica</div>
                <div className="tl-place">Don Bosco</div>
                <div className="tl-desc">
                  Specializzazione in programmazione e progettazione di siti web e gestionali.
                  Attività di laboratorio su HTML/CSS, JavaScript, PHP e MySQL.
                  Stage aziendale con focus su sviluppo software e supporto IT.
                  Qualifica su linguaggi di programmazione, algoritmi, sicurezza informatica e gestione database.
                </div>
                <span className="tl-badge">✦ Votazione finale: 100 / 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 02 ESPERIENZE ── */}
        <div className="card">
          <div className="card-header">
            <div className="card-header-left">
              <p className="card-section-id">// 02</p>
              <h2 className="card-title">Esperienze</h2>
            </div>
            <span className="card-header-num">02</span>
          </div>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2021<br/>oggi</span>
                <div className="tl-dot-wrap"><div className="tl-dot" /></div>
              </div>
              <div className="tl-right">
                <div className="tl-title">Attività lavorativa</div>
                <div className="tl-place">Azienda Agricola</div>
                <div className="tl-desc">
                  Conoscenza del mondo vitivinicolo e vendita di vino.
                  Gestione del magazzino e supporto alla logistica.
                  Interazione con clienti e fornitori da tutto il mondo.
                </div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2023<br/>2024</span>
                <div className="tl-dot-wrap"><div className="tl-dot" /></div>
              </div>
              <div className="tl-right">
                <div className="tl-title">Stage</div>
                <div className="tl-place">Code01 — Salgareda (TV)</div>
                <div className="tl-desc">
                  Affiancamento al team di sviluppo software.
                  Sviluppo di un gestionale interno con PHP.
                  Partecipazione a code review e stand-up meeting quotidiani.
                  Formazione su metodologie agile e best practice di sviluppo.
                  Supporto al team IT e sistemista informatico.
                </div>
                <span className="tl-badge">⬡ IT · PHP · Code Review</span>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2022</span>
                <div className="tl-dot-wrap"><div className="tl-dot" /></div>
              </div>
              <div className="tl-right">
                <div className="tl-title">Viaggio Studio</div>
                <div className="tl-place">Londra</div>
                <div className="tl-desc">
                  Apprendimento della lingua inglese in immersione totale.
                  Conoscenza di cultura e storia inglese.
                  Esperienza di vita indipendente e gestione del budget personale.
                  Interazione con persone di diverse nazionalità e background culturali.
                </div>
                <span className="tl-badge">🌍 Esperienza internazionale</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 03 + 04 COMPETENZE & LINGUE ── */}
        <div className="two-col">

          {/* COMPETENZE */}
          <div className="card" style={{ flex: 1 }}>
            <div className="card-header">
              <div className="card-header-left">
                <p className="card-section-id">// 03</p>
                <h2 className="card-title" style={{ fontSize: '1.5rem' }}>Competenze</h2>
              </div>
              <span className="card-header-num">03</span>
            </div>
            <div className="skills-grid">
              {[
                { icon: '⚛️', name: 'React / Next.js', level: 'Avanzato', cls: 'adv' },
                { icon: '🟦', name: 'TypeScript',      level: 'Avanzato', cls: 'adv' },
                { icon: '🐍', name: 'Python',          level: 'Intermedio', cls: 'mid' },
                { icon: '☁️', name: 'AWS / Cloud',     level: 'Intermedio', cls: 'mid' },
                { icon: '🐳', name: 'Docker / K8s',    level: 'Intermedio', cls: 'mid' },
                { icon: '🗄️', name: 'PostgreSQL',      level: 'Avanzato', cls: 'adv' },
              ].map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-icon">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                  <div className={`skill-level ${s.cls}`}>{s.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LINGUE */}
          <div className="card" style={{ flex: 1 }}>
            <div className="card-header">
              <div className="card-header-left">
                <p className="card-section-id">// 04</p>
                <h2 className="card-title" style={{ fontSize: '1.5rem' }}>Lingue</h2>
              </div>
              <span className="card-header-num">04</span>
            </div>
            <div className="lang-list">
              {[
                { name: 'Italiano', code: 'Madrelingua', pct: '100%', cls: '' },
                { name: 'Inglese',  code: 'B2', pct: '85%',  cls: 'secondary' },
              ].map((l) => (
                <div className="lang-row" key={l.name}>
                  <div className="lang-meta">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-code">{l.code}</span>
                  </div>
                  <div className="lang-track">
                    <div className={`lang-fill ${l.cls}`} style={{ width: l.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── QUOTE ── */}
        <div className="quote-card">
          <p className="quote-text">
            Non si finisce mai di imparare.<br />
            Ogni progetto è un nuovo punto di partenza.
          </p>
          <p className="quote-author">Principio personale</p>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer>
        Curriculum Vitae · Aggiornato 2026 · Samgareda, Italia
      </footer>
    </>
  );
}