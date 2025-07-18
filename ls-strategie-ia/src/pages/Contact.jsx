import React, { useState } from 'react';
import { Container, Typography, TextField, Box, Button } from '@mui/material';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', prenom: '', societe: '', email: '', telephone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! (envoi non implémenté)');
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Engageons la Discussion : Transformons Votre Commerce Ensemble
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
        <TextField label="Nom" name="nom" value={form.nom} onChange={handleChange} required />
        <TextField label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} required />
        <TextField label="Société" name="societe" value={form.societe} onChange={handleChange} />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} type="email" required />
        <TextField label="Téléphone" name="telephone" value={form.telephone} onChange={handleChange} />
        <TextField label="Message" name="message" value={form.message} onChange={handleChange} multiline minRows={4} />
        <Button type="submit" variant="contained">Envoyer</Button>
      </Box>
    </Container>
  );
}