import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from './sectionStyles.module.css';

export default function SkillCard({ icon, iconUrl, name, level, levelClass }) {
  const levelClassName = levelClass ? styles[levelClass] : '';

  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon}>
        {iconUrl ? <img src={iconUrl} alt={name} /> : icon}
      </div>
      <Typography className={styles.skillName}>{name}</Typography>
      <Typography className={`${styles.skillLevel} ${levelClassName}`}>
        {level}
      </Typography>
    </div>
  );
}
