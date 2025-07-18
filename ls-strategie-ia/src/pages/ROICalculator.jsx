import React, { useState, useMemo } from 'react';
import { Container, Typography, TextField, Slider, Box, Grid, Card, CardContent } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    leads: 10,
    conversion: 20,
    panier: 20000,
    objectif: 40,
    coutIA: 0
  });

  const handleChange = (name) => (event, valueParam) => {
    const value = typeof valueParam === 'number' ? valueParam : event.target.value;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const results = useMemo(() => {
    const ventesActuelles = (inputs.leads * inputs.conversion) / 100;
    const ventesCibles = (inputs.leads * inputs.objectif) / 100;
    const ventesSupp = ventesCibles - ventesActuelles;
    const caSupp = ventesSupp * inputs.panier * 12; // par an
    const coutTotal = 4950 + inputs.coutIA;
    const moisROI = (coutTotal / (caSupp / 12)).toFixed(1);

    return { ventesSupp, caSupp, coutTotal, moisROI };
  }, [inputs]);

  const chartData = [
    { mois: 0, CA: 0 },
    { mois: Number(results.moisROI), CA: results.coutTotal },
    { mois: 12, CA: results.caSupp }
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Simulez Votre Retour sur Investissement
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Nombre de leads Allianz par mois" type="number" value={inputs.leads} onChange={handleChange('leads')} />
            <TextField label="Taux de conversion actuel (%)" type="number" value={inputs.conversion} onChange={handleChange('conversion')} />
            <TextField label="Panier moyen par vente (€)" type="number" value={inputs.panier} onChange={handleChange('panier')} />
            <Typography gutterBottom>Augmentation du Taux de Conversion Visée (%)</Typography>
            <Slider value={inputs.objectif} onChange={handleChange('objectif')} step={5} min={inputs.conversion} max={100} valueLabelDisplay="auto" />
            <Typography gutterBottom>Coût Outils IA optionnels (€)</Typography>
            <Slider value={inputs.coutIA} onChange={handleChange('coutIA')} step={500} min={0} max={5000} valueLabelDisplay="auto" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Résultats</Typography>
              <Typography>Coût Total : {results.coutTotal.toLocaleString()} €</Typography>
              <Typography>Ventes supplémentaires estimées / an : {results.ventesSupp.toFixed(1)}</Typography>
              <Typography>CA additionnel estimé / an : {results.caSupp.toLocaleString()} €</Typography>
              <Typography>ROI atteint en : {results.moisROI} mois</Typography>

              <LineChart width={300} height={200} data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="CA" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}