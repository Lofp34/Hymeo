import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Diagnostic', path: '/situation' },
  { label: 'Solution', path: '/solution' },
  { label: 'ROI', path: '/roi' },
  { label: 'Progrès Qualitatifs', path: '/qualitatif' },
  { label: 'Qui sommes-nous', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Présentation', path: '/proposition' },
];

export default function Navigation() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LS Stratégie IA
        </Typography>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{ color: '#fff' }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}