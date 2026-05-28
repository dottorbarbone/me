import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from './sectionStyles.module.css';

export default function LanguageCard({ name, code, width, variant }) {
  const variantClass = variant ? styles[variant] : '';

  return (
    <div className={styles.langRow}>
      <div className={styles.langMeta}>
        <Typography className={styles.langName}>{name}</Typography>
        <Typography className={styles.langCode}>{code}</Typography>
      </div>
      <div className={styles.langTrack}>
        <div className={`${styles.langFill} ${variantClass}`} style={{ width }} />
      </div>
    </div>
  );
}
