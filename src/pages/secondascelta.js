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
              { iconUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA0ODQ8PDQ8QEBAQDg4QEBUNEA4PFhEZFhYRFR8YHi0gGxooHhcVITEkJSkrLi46HiAzPDMtQzQvLisBCgoKDg0OGxAQGysmICUtLy0tLy8tLS0tLS8tLS0vLi0rLSstLystMC0rLS8wKy0tLS0tLS0tLS0vKy0tLS0tLf/AABEIAKcBLQMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcDAgj/xABDEAABAwICBQgHBgQFBQAAAAABAAIDBBEFEgYTITFRByIyQVJhcZEUFTRzgbKzIyRCQ3KhMzVighcldKKxFmOSk8L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAMxEBAAIBAgQEAwcEAwEAAAAAAAECAwQREhMhMTIzQXEiUfAFYYGRobHRFCPB4TRC8RX/2gAMAwEAAhEDEQA/AOVKTggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIJAR19CMpubJ1JXN3djVFNzY1JTiNjUlOI2NUU3NjVFNzZGrK65sasrrm5qymzm5qymxuaspsbmrK7sbo1ZTZziMhTY4kFq5s7uhHRcBAQEBAQEBAQEBAQEBAQEBAQEBBk00VyuTKdY3b2iwkvtYXVFrtFcbYDRx/YPkq5yJ8qH1/02/sHyUJyy7yoP8Apt/YPkoc6XeVAdG39g+Sc6Tkw+Do4/sHyU4yucqHw7R1/YPkpxkJxQ8H4E8fgPktFJ3ZsldkDAn9g+S0xDFa6fUMnYPkpcKvmI9Qydg+SlwOcw9Qydg+S7wOc2UeoZOwfJS5cI82UeopOwfJd5cI86XzJgjwLlh8l3lQc6WrqqXKqr02XY8m7XvColqiXyouiAgICAgICAgICAgICAgICAgIAQbPDW7QoXXY+6z4jGBh9WeDGfVYs9J/uQ05Y/tS59da2HZF03NkXTc2RdN3NoLpubIujuyMx4nzXAzHifNBFzxPmgi54nzQ3Rc8T5rhuZjxPmmzu6LnifNNjdsNHNtZRjbtnjH+5Txx8ce6vLPwW9pWjGmAOcvRyx0eXhnqrc28rBZ6dHmoJiAgICAgICAgICAgICAgICAgIAQbTC94Vd12PutOJ/y6s/Qz6rFnp5kNWXypc6WxgQghAAJIABJJAaALlxO4AdZQbV+i+IBmsNBWBvH0d5Nu8WuPJd4bfJVzsfbij82odsJBuCCQ4HYWkbwR1FRWoQQgyaDDp6kltNBNUOG8RRuly+Nhs+K7ETPZG1618U7MjFNH62laH1VJPAw2+0fGclzuBcNgPcSk1mO8I0y0v0rLWLixCCEGx0b9sovfx/Mp4/HHury+Xb2lbMc6Tl6OXs8rB3VibeV59nq0eagmICAgICAgICAgICAgICAgICAgBBtML3hV3XY+604p/Lqz9DPqsWenmQ1ZfKlzlbGBCCEHU+STC4YKerxipA+z1jYnEX1cUbLySN7ybt/tPFX4axETaXm63JNrRiqwf8YazWF3otMYSebES8SBvUC+9r/2rnPndP8AoKbd53WGHEMI0ibqp4/Rq23MuQye9vy3jZIP6T5danvTJ7qJrm03WOsfp/pzrTDQ2pwx4zjXQPdaKoY02cTuY4b2v7uvqJ6qb45q3YNRXLH3/JatEuTVgj9Nxp2oiaM/ozniOzO1O78I/pBB4nqU6YfWzPm1k78OL8/4ZeL8qlPSj0fB6Vjo2bGyPbqYPFjG2cR3nKuzmiOlYQporW+LJP8ALK0F5QH4lM/D8RhgOvjfq8jSGSANu6J7XE3u3MfgV3Hk4p2lzUaXlV46TPRzTTTBRQV1TStvq2uD4b7TqntDmjvtctv3Ki9eG2zdgyczHFmjUVyEGy0a9tovfx/Mp4/HHvCvL5dvaVsxzpOXo5ezysHdWJt5Xn2erR5qCYgICAgICAgICAgICAgICAgICAEG0wveFXddj7rTin8urP0M+qxZ6eZDVl8qXOFsYEICDrNEcuikhZvMU1/7qwh37ErRHkvLt11nX66OSLM9QDiCCCQQQQRsII3EW60H6I0RlqmUMDsZkjErnMDDJZjwHOAibISbGW9t23d13W6m/D8Twc3BOSeV2+t/wUDlp9OEsWtffD3WEDWXawTAXIl4v3kHdbd1qnPxb/c26DlzE7eL67OZrO9FvtAHluKYaRv9IaPgWkH9iVPH4oUanyrezfctYHrKO3XRxE+OtlCnn8SnQeV+P8KAqW0QbHRr22i9/H8ynj8ce8K8vl29pW3HOk5ejl7PKwd1Ym3lefZ6tHmoJiAgICAgICAgICAgICAgICAgIAQbTC94Vd12PutOKfy6s/Qz6rFnp5kNWXypc3WxgEELg63oW01ejtZSsGaRgq4mtG8vI1rB/vC14/ixTDydRPBqotP3fwo9DoFikwBbRvjB65nMgt4hxzfsqIxXn0bbavDX/t+S76C8m8lNUCqxHUv1VnU8THGQa2/8R9wBzdlht27eoK/HgmJ3sxanWxevDT8Wz060NrcUkb97hhpo/wCFAWvdziNsj7b3bwOA+N5ZMdrz3V6bU48Mdurd0OByyULqDFXx1gLcmtbma57B0XOv+MH8XcD4zikzXaym2WIycePo5ZiHJViMbn6nUVDA52QiXVvcy+wkOAANrbLrLOntHZ6VdfinvvD10E0RroMUo3VVLLDHGZJDIQHR3EbgBmaS29yNl13HjtF43hzU6jHbDPDLB5XasSYrM0fkxQxfHLnPzqOefjT0NdsMT81MVTYhBsdGvbaL/UR/MpY/HHury+Xb2lbsc6Tl6WXs8rB3VibeV59nq0eagmICAgICAgICAgICAgICAgICAgBBtML3hV3XY+604r/Lqz9DPqsWenmQ1ZfKlzdbGBmYPhM9ZKIKWMyyHabbGsb2nnc0LtazadoQyZK468VpdJoOT2goYxUYzUtfxZnMMAPZFufIfK/BaYw1rG95eZbW5ck8OKP5/iFi0R0pw6eZ9DhsWpayMygiIQRyWcAco332g7QFZjyUmeGrPnwZa148ktGNIsWqcVlwyN0NNHFK7WSxwhz2UosRJeQuGYtLANm925V8d5vwr+TgphjLPXf9/wAHnyq6ZSQOZQ0UropRaSpljdZ7ARdkQI3E9I92XiUz5Nvhh3Q6aLRx3jp6OdR43iUpcWVeISkbXauaZ2XxynYs/HefWXozixR3rH5QiDSnEGEFlfV3aQbOne8XB3EOO0dxSMlo9ScGKf8ArH5OyRY7PiOF+l4ZIIauMXfDlbIHSsHPgIcDsIN2kWO1u3etnFN6b17vGnFXFm4Mnb66vHk10nq8QiqpqwQNjhc1jHxsdG5zg0ukzXcRsBZuA3lcw3taJmUtXgpitEV36tYdIcAxc5auNsEx2Nkmb6O88LSsNvg4/BR48V+6zk6nB1rO8fd1/RoNKeS2WFpmw15q4gMxhdbXgcWkbH/sfFV308x1qvw6+tp2ydJ/T/TnLgQSCCCDYg7CDwKzvRbDRr22i/1EfzKWPxx7q8vl29pW/HOk5ell7PKwd1Ym3lefZ6tHmoJiAgICAgICAgICAgICAgICAgIAQbXCt4Vd1+PusuLO/wAvrB/Qz6rFTSPjacvly5zt6hc9Q4ngtLA7HXVUWjmHRRwsbJWT7LndJMG3fK/rLG3AA7wOslbZmMNNo7vFpW2ryzM9oclxTEpqqQzVUr5pD+Jx6I4NG5o7gsdrTad5evTHWkbVjZk6L4t6FWU1Vtyxv+1A64nDK/x2En4BSpbhtEo58fMxzV3XG6unoIqzFMrS90MYLgf4xbcRMHiXgX8OC32mKxNng462y2ri+/8A9cU0Yw52K4ixlQ8nXPfPVPGwlg5zgOF9jRwusNK8d+r2814wYt49OkP0LQ08VPG2GnjZDG0WaxgDWjy6+9bopEdIeDbJNp3lSOVbRqGopZq2NjWVVO3WOe0ZTNEDz2v4kC5B37LdaqzYomu7Zo9RNbxSe0qDyWaQ+h1rYXutBVlsT7nYyX8t/mcp8e5UYL8Ntvm267DzMfFHeHQeUGriw3DamOnaIn1ckjGgduYl0r//ABzeHNC05pilJ29Xn6Ws5s0Tb0/x2cKWB7q06G6cVGGvaxxdPSX+0pyblg63RX6J7tx/cW48s09mXUaSuWN+0/P+Vi5X8Fhy02K01stQWtlyjmyFzC+ObxIBB47FZqKR0vDNoMtt5xW9PrZRNGvbaL38fzKjH4493oZfBPtK441vcvSy9nmYa9VXn3lefZ6VXkoJiAgICAgICAgICAgICAgICAgIAQbTDDtChZfj7rJiv8vrP0M+qxU08TVmj+1LnRPDYeo8CtDz3YquCLSPDonxPbHWQbSDujmy2cx/XkdYEHuHAhbpiM1Ond4lbW0eaYmPhn9v9OTYrhk9JIYaqJ0Mg6nDY4dpp3OHeFjtWaztL2MeSuSOKs7snRjCvTaympduWR/2luqJozP8OaCPiF3HXitEIZ8nLxzZ3TGqenr46zC8zQ9sMZLQP4JdcxPHgWA28OK9C0ReJo8HHa+Ka5fv/wDXFtF8RdhWIsfUNLdU+SCpaBctaea4jjY2d32WHHbl36vbz05+H4fXrDvdNWMlY2SJ7ZI3C7XsOZrhxBC9ONpjeHzdt6ztPdTuVDSWOCkmpGvDqmpbq9WDcxxHpvdwBFwO89xWfUXiteH1lu0GG2TJF/SFF5LNH/S6wTvbeCkLZHX3Pm/LZ5jMfAcVm0+Pitv8no6/Py8fDHeV/wBPKeLE8NqZKciR9JJI9pG/WQktlb33bmtx5pWnLEXpO3o8/S2thzRFvX/PZwu6897y16G6DVGIuY94dBSX58zhYyN62xA9IndfcO/crsWGb+zHqdZTFG0dZ+u7fcr2OwltPhdNbLTlrpcp5sZawsZCO8Aknhs71ZqLx4I9FH2fit1y29frdRdG/bKP38fzLPTxR7vStG8bLdjD+c5ehknoz1x7K3Odqw2XxDzUHRAQEBAQEBAQEBAQEBAQEBAQEAINjhx2hRsvxd1kxI/5fWe7Z9Viqr4mvN5UueK55zMwnFZ6OUT0sjopBsJG1r29lw3OHcVKtprO8K8mOuSvDaHR8P5QqGtjEGM07G8X5DNAT2gNrmHz8VqrnpaNrw8u+hy4p4sM/wA/7WHRPRrDoZnV2Gya1rozEA2YTxx3IJsekDsGwlXY8VIniqzajUZrV5eSP02aY6O4pT4pLicWpqWSSO1kTJcj30xsBHzwBmADbbd7Qq+Xkrk44X/1GC+CMU7xt+/4PLlS0QkncyuoonSSmzKiJgu54As2UDrI6J7rcFzUYZn4qu6DVRSOXeeno59BhOKQ5hFTYjDfpCOKdgd45RtWaK5I7RP6vRtk09vFNZ/J8w6L4jK6woqvM521z4XxgkneS8DzXIxXn0l2dThrHij83YIsDnw/DPQ8MYJKp4s+YubGGyPHPnOY9QFmgXPR71u4JpThr3eLOauXNx5O3y/w8eTjRmqw6Kpiq3QvZK5r2Rxuc/K7LlfmuANoy+SYMVqRMS7rdRTNaJpv0a04NgGEOLql7Zp27RHM70mRt9oAjaLDuLh8VDgw4+63narURtXpH3dP1V3SjlRnqGuhoGGkiIymUkGdzbfhtsj+Fz3hVZNTM9K9GrB9n1pPFk6z+n+3PSVlei2GjftlH7+P/lSp4oFqxjpOW3I7MK/LvWSUXwoggICAgICAgICAgICAgICAgICAgy6M7Ulqw926rD9yq/dt+o1Q9W/UeRP4fupKk8dCCEAOIIIJBBBBGwgjcQg2rtJ68s1ZrarLa1ta4G3jv8A3VnOvttvKj+lw778Efk1LnEkkkkk3JJuSeJVa/s+VwQg96Otlgdnglkgcd7o3ujJ8bFSi0x2lG9K3ja0RL3r8bq6huSoqZ5mdh8jnNvxtuuu2yWt3lCmDHSd61iGvUFqEBBsdGvbKP38fzKVPFBC2Yx0nLbkdlX5d6ySi+FEEBAQEBAQEBAQEBAQEBAQEBAQEGTSnaktWHu21VJ9zqh/2x87Vxu1E/2J/D91NzjiPNHkIzjiEEZhxCBmHEIIzDiuCMw4oGYIIugi6BdBF0EXQRdBstGj98pPfR/MpU8UC1Yu+7nLZeXZaKVZZRfCiCAgICAgICAgICAgICAgICAgICD0jdZdW0ts2FLXFm0Fcba5umzNGOP4psnzqp9ev4rmxzqnr1/FNjnVPXj+K7sc6p68fxTY51UHHH8Uc51Xw7G38VKELZKy+RjUnaKtiYV8cPr13J2iu8UI8cJGNv4pxQ5N4T67fxXeKEZtCfXj+KcUI8UJGOP4pxQ5uh+NvItdOKEd2sqKjMoWtujLCcVVLiFwEBAQEBAQEBAQEBAQEBAQEBAQEBHd03XXeIzI7xSZkOKTMhxSZkOKTMhxSZkOKS6OcUl03OIzJu5uZk3NzMm5uZk3NzMm4nOm7iC5NxCAuAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//9k=', name: 'Programmazione di Gestionali', level: 'Avanzato', levelClass: 'adv' },
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
          imageUrl="https://uk.leonardo.com/o/adaptive-media/image/28913194/h_703/eurofighter-typhoon-in-hangar_960640.jpg"
          title="Futuro percorso in manutenzione aeronautica"
          description="Sviluppo di competenze in sistemi avionici, controllo qualità e supporto operativo per velivoli civili."
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
    </div>
  );
}