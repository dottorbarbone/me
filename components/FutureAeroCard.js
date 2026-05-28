import Typography from "@mui/material/Typography";
import styles from "./FutureAeroCard.module.css";

const FutureAeroCard = ({ imageUrl, title, description }) => (
  <section className={styles.futurePathSection}>
    <div className={styles.futurePathImage}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt={title} className={styles.futurePathImg} />
    </div>
    <div className={styles.futurePathOverlay}>
      <div className={styles.futurePathContent}>
        <Typography component="h2" className={styles.futurePathTitle}>
          {title}
        </Typography>
        <Typography component="p" className={styles.futurePathDescription}>
          {description}
        </Typography>
      </div>
    </div>
  </section>
);

export default FutureAeroCard;
