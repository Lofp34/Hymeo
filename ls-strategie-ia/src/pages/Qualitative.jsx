import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const indicators = [
  'Taux de qualification des leads accru.',
  'Réduction du cycle de vente.',
  'Autonomie et implication des commerciaux améliorées.',
  'Qualité des données CRM renforcée.',
  'Efficacité de la prospection augmentée.',
  'Temps de management optimisé.',
  'Onboarding des nouveaux commerciaux facilité.'
];

export default function Qualitative() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Au-delà des Chiffres : Les Progrès Qualitatifs Durables
      </Typography>
      <List>
        {indicators.map((i) => (
          <ListItem key={i}>
            <ListItemText primary={i} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}