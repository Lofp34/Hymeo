import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Laurent Serre Développement : Votre Expert en Optimisation Commerciale par l'IA
      </Typography>
      <Box>
        <Typography gutterBottom>
          Fort d'une quinzaine d'années d'expérience dans l'accompagnement des PME sur la structuration commerciale et ancien franchisé numéro 3 de Booster Academy, Laurent Serre a transformé son expertise avec l'intégration de l'IA depuis deux ans.
        </Typography>
        <Typography gutterBottom>
          Son parcours comprend 20 ans en tant qu'opticien, où la vente et la satisfaction client étaient au cœur de son métier.
        </Typography>
        <Typography gutterBottom>
          L'approche de Laurent est basée sur les fondamentaux et la structuration, garantissant une transformation en performance commerciale pure.
        </Typography>
        <Typography gutterBottom>
          L'IA apporte le pouvoir magique de personnaliser tout ce qui va être plan de vente, accompagnement, suivi, offrant des solutions sur mesure pour chaque commercial.
        </Typography>
        <Typography gutterBottom>
          Une approche directe et transparente, axée sur les résultats concrets. Laurent Serre affiche un taux de signature élevé (9 prospects sur 10 ont signé son programme depuis le début de l'année).
        </Typography>
        <Typography gutterBottom>
          Le commerce est vu comme de l'accompagnement, une réponse au besoin du client, loin de la vente push.
        </Typography>
      </Box>
    </Container>
  );
}