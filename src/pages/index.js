//pages/curriculum.jsx  ─ oppure app/curriculum/page.jsx
// Nessuna dipendenza esterna: solo Next.js + Google Fonts via <link>
import CurriculumCard from "../../components/Card";
import SectionCard from "../../components/SectionCard";
import SkillCard from "../../components/SkillCard";
import LanguageCard from "../../components/LanguageCard";
import FutureAeroCard from "../../components/FutureAeroCard";
import styles from "../../components/sectionStyles.module.css";
import pageStyles from "./secondasceltaStyles.module.css";
import { Box, Typography } from "@mui/material";
import CardComp from "../../components/CardCompetenza";


export default function Curriculum2() {
  return (
    <div className={pageStyles.page}>
      

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
      
      <Typography variant="h2" align="center" sx={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text)', mb: 4 }}>Esperienze </Typography>
      <div className="card-row" role="list" aria-label="Curriculum cards">
        <CurriculumCard inline title="Don Bosco" description="Specializzazione in programmazione e progettazione di siti web e gestionali.
                  Attività di laboratorio su HTML/CSS, JavaScript, PHP e MySQL.
                  Stage aziendale con focus su sviluppo software e supporto IT.
                  Qualifica su linguaggi di programmazione, algoritmi, sicurezza informatica e gestione database." accent="Scolastico · Professionale 100/100" image="https://www.guidaxcasa.it/wp-content/uploads/programmatore.jpg" />
        <CurriculumCard inline title="Stage" description="Affiancamento al team di sviluppo software.
                  Sviluppo di un gestionale interno con PHP.
                  Partecipazione a code review e stand-up meeting quotidiani.
                  Formazione su metodologie agile e best practice di sviluppo.
                  Supporto al team IT e sistemista informatico." accent="Stage Code01" image="https://www.sistemista.it/wp-content/uploads/2022/02/team-di-un-software-developer-1024x683.jpg" />
        <CurriculumCard inline title="Attività Lavorativa" description="                  Conoscenza del mondo vitivinicolo e vendita di vino.
                  Gestione del magazzino e supporto alla logistica.
                  Interazione con clienti e fornitori da tutto il mondo." accent="Sviluppo Commerciale · Supporto Organizzazione Eventi · Supporto Trasversale " image="https://sandre.it/wp-content/uploads/2025/02/cantina_sandre_1-1024x684.jpg" />
      
      </div>

      {/* ── WRAPPER ── */}
      <div className="wrapper">



        {/* ── 01 FORMAZIONE ── */}
        <SectionCard id="01" accent="Formazione" title="Diploma professionale in informatica">
          <Typography variant="subtitle1" sx={{ mb: 2, color: 'var(--cyan)', fontWeight: 500 }}>
            Don Bosco · 2021–2024
          </Typography>
          <Typography sx={{ color: 'rgba(245,240,232,0.85)', lineHeight: 1.8, mb: 2 }}>
            Studio tecnico-pratico in sviluppo software, progettazione web e gestione dati con un approccio hands-on.
          </Typography>
          <Box component="ul" sx={{ pl: 3, mt: 2, color: 'rgba(245,240,232,0.75)', lineHeight: 1.8 }}>
            <li>Laboratori su HTML/CSS, JavaScript, PHP e MySQL.</li>
            <li>Progettazione e realizzazione di siti web e sistemi gestionali.</li>
            <li>Stage aziendale con sviluppo software e supporto IT.</li>
            <li>Competenze su algoritmi, sicurezza informatica e database.</li>
          </Box>
        </SectionCard>



        {/* ── 03 COMPETENZE ── */}
        <SectionCard id="03" accent="Competenze" title="Competenze">

          <div className={styles.skillsGrid}>
            {[
              { iconUrl: 'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg', name: 'Programmazione Software', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://firebase.google.com/static/images/social.png?hl=it', name: 'Programmazione Database', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'data:image/png;base64,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', name: 'Programmazione di Gestionali', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1280px-Visual_Studio_Icon_2022.svg.png', name: 'Programmazione applicazioni Windows', level: 'Base', levelClass: '' },
              { iconUrl: 'https://www.accuratereviews.com/wp-content/uploads/2024/11/Figma.jpg', name: 'Progettazione Grafica con software Figma', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://images.seeklogo.com/logo-png/49/2/omron-logo-png_seeklogo-493631.png', name: 'Realizzazione di programmi con linguaggio ladder e HMI', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://www.unionegeometri.com/wp-content/uploads/2022/11/mettere-in-sicurezza-un-impianto-elettrico.png', name: 'Capacità manuale di realizzare impianti elettrici', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://www.pcassemblati.eu/52110-home_default/pc-gaming-intel-i5-14600k-ssd-500-ram-16gb-rtx-5060-8gb.jpg', name: 'Montaggio e Smontaggio di componenti elettrici/computer', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://www.mylanding.it/wp-content/uploads/2025/10/differenza-tecnico-informatico-consulente.jpg', name: 'Progettazione e assemblaggio di Computer', level: 'Avanzato', levelClass: 'adv' },
              { iconUrl: 'https://cd-keys.online/281-large_default/microsoft-word-2024.jpg', name: 'Capacità di formulare rapportini a lavoro finito', level: 'Intermedio', levelClass: 'mid' },
              { iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1280px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png', name: 'Capacità di formulare tabelle di calcolo', level: 'Intermedio', levelClass: 'mid' },
              { iconUrl: 'https://cdn-icons-png.flaticon.com/512/6754/6754689.png', name: 'Capacità di creare grafici per la stesura di un piano nel tempo', level: 'Intermedio', levelClass: 'mid' },
            ].map((skill) => (
              <SkillCard
                key={skill.name}
                iconUrl={skill.iconUrl}
                name={skill.name}
                level={skill.level}
                levelClass={skill.levelClass}
              />
            ))}
          </div>
        </SectionCard>
                
          <FutureAeroCard
            titolo="Futuro Professionale"
            descrizione="Percorso orientato alla manutenzione aeronautica dei velivoli militari, con competenze su sistemi avionici, diagnostica tecnica, controlli strutturali e procedure di sicurezza."
            img="https://www.aeronautica.difesa.it/wp-content/uploads/2023/09/124-TYPHOON-FLAG-29-08-2023.jpg"
            link="https://www.aeronautica.difesa.it"
          />

      


        {/* ── 04 LINGUE ── */}
        <SectionCard id="04" accent="Lingue" title="Lingue">
          <div className={styles.langList}>
            {[
              { name: 'Italiano', code: '', width: '100%', variant: '' },
              { name: 'Inglese', code: 'B2', width: '55%', variant: 'secondary' },
            ].map((lang) => (
              <LanguageCard
                key={lang.name}
                name={lang.name}
                code={lang.code}
                width={lang.width}
                variant={lang.variant}
              />
            ))}
          </div>
        </SectionCard>



      </div>

      {/* ── FOOTER ── */}
      <footer>
        Curriculum Vitae · Aggiornato 2026 · Samgareda, Italia
      </footer>
    </div>
  );
}
