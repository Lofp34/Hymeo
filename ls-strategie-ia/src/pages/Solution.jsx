import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

export default function Solution() {
  const offers = [
    {
      title: "Accompagnement Commercial (4 950 €)",
      details: [
        "Entretiens Individuels pour chaque commercial.",
        "Atelier Plan de Vente collectif de 3 heures.",
        "Plan de Vente Digital personnalisé par l'IA.",
        "Formation aux entretiens de vente.",
        "Coachings individuels continus.",
        "Ateliers thématiques réguliers."
      ]
    },
    {
      title: "Outils IA Avancés (0 à 5 000 €)",
      details: [
        "Gestion visuelle et automatisée du pipe de vente.",
        "Analyse d'entretiens de vente par IA.",
        "Coaching commercial par IA.",
        "Génération automatisée de documents.",
        "Préparation des rendez-vous via Deep Search IA."
      ]
    }
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        La Solution Laurent Serre Développement : Structuration, Personnalisation et IA
      </Typography>
      {offers.map((offer) => (
        <Box key={offer.title} sx={{ my: 2 }}>
          <Typography variant="h5" color="secondary">{offer.title}</Typography>
          <List>
            {offer.details.map((d, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={d} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Container>
  );
}