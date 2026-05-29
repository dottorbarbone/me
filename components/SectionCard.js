import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './sectionStyles.module.css';

export default function SectionCard({ id, accent, title, children, sx }) {
  return (
    <Card className={styles.sectionCard} sx={{ backgroundColor: '#0f151f', ...sx }}>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            {accent && (
              <Typography variant="overline" className={styles.sectionCardAccent}>
                {accent}
              </Typography>
            )}
          <Typography variant="h2" align="center" sx={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--text)', mb: 1 }}>
              {title}
            </Typography>
          </Box>
          {id && (
            <Typography variant="h2" className={styles.sectionCardId}>
              {id}
            </Typography>
          )}
        </Box>
        {children}
      </CardContent>
    </Card>
  );
}
