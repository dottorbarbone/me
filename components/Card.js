import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CurriculumCard({ image, title, description, accent, inline = false }) {
  const wrapperSx = inline
    ? {
        display: 'flex',
        flex: '1 1 320px',
        minWidth: '280px',
        maxWidth: '420px',
        width: '100%',
        px: 1,
        py: 1,
      }
    : {
        width: '100%',
        px: 2,
        py: 2,
        display: 'flex',
        justifyContent: 'center',
      };

  return (
    <Box sx={wrapperSx}>
      <Card
          sx={{
            width: inline ? '100%' : 'clamp(300px, 92vw, 420px)',
          overflow: 'visible',
          borderRadius: '29px',
          backgroundColor: '#070b11',
          boxShadow: '0 24px 50px rgba(15, 23, 42, 0.14)',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 36px 90px rgba(15, 23, 42, 0.22)',
          },
        }}
      >
        <CardActionArea
          sx={{
            borderRadius: '29px',
            overflow: 'visible',
            display: 'block',
            '&:hover .cardMedia': {
              height: 260,
            },
          }}
        >
          <CardMedia
            className="cardMedia"
            component="img"
            image={image}
            alt={title}
            sx={{
              height: 220,
              width: '100%',
              display: 'block',
              transition: 'height 0.35s ease, transform 0.25s ease',
              objectFit: 'cover',
              borderTopLeftRadius: '29px',
              borderTopRightRadius: '29px',
              willChange: 'height, transform',
            }}
          />
          <CardContent
            sx={{
              py: 3,
              px: 3.5,
              backgroundColor: '#070b11',
            }}
          >
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                letterSpacing: 1.8,
                color: '#d4b97a',
                mb: 1.2,
              }}
            >
              {accent ?? 'Curriculum'}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 1.2,
                color: '#f8f7f2',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(245, 240, 232, 0.82)',
                lineHeight: 1.75,
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
