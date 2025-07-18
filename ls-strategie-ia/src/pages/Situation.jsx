import React, { useState } from 'react';
import { Container, Typography, TextField, Switch, FormControlLabel, Box, Button } from '@mui/material';

export default function Situation() {
  const [form, setForm] = useState({
    leads: '',
    conversion: '',
    structuredProspection: false,
    pipeManagement: '',
    difficulties: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Résumé non implémenté (placeholder)');
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Où en Êtes-Vous Aujourd'hui ?
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nombre de leads entrants par mois" name="leads" value={form.leads} onChange={handleChange} />
        <TextField label="Taux de conversion actuel (%)" name="conversion" value={form.conversion} onChange={handleChange} />
        <FormControlLabel control={<Switch checked={form.structuredProspection} onChange={handleChange} name="structuredProspection" />} label="Prospection structurée" />
        <TextField label="Gestion actuelle du pipe" name="pipeManagement" value={form.pipeManagement} onChange={handleChange} />
        <TextField label="Principales difficultés" name="difficulties" value={form.difficulties} onChange={handleChange} />
        <Button type="submit" variant="contained">Afficher le résumé</Button>
      </Box>
    </Container>
  );
}