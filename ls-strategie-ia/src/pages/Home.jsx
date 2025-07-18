import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const benefits = [
  {
    title: 'Augmentation du Taux de Conversion',
    description: 'Transformez plus de prospects en clients fidèles.'
  },
  {
    title: 'Optimisation du Temps Commercial',
    description: 'Concentrez vos équipes sur les opportunités les plus chaudes.'
  },
  {
    title: 'Prévisions de Vente Fiables',
    description: 'Gérez votre business avec une visibilité claire.'
  },
  {
    title: 'Structuration sur Mesure',
    description: "Une approche qui s'adapte à chaque commercial, pas l'inverse."
  }
];

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Optimisez VOS Ventes, Maîtrisez VOTRE Pipe : L'IA au Service de Votre Croissance
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        Découvrez comment Laurent Serre Développement transforme vos défis commerciaux en opportunités de succès mesurables, grâce à une approche personnalisée et l'intelligence artificielle.
      </Typography>

      {/* Visuel ou animation pourrait être ajouté ici */}

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {benefits.map((b) => (
            <Grid item xs={12} md={6} key={b.title}>
              <Card sx={{ ':hover': { boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h5" color="secondary">
                    {b.title}
                  </Typography>
                  <Typography>{b.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}