import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Situation from './pages/Situation';
import Solution from './pages/Solution';
import ROICalculator from './pages/ROICalculator';
import Qualitative from './pages/Qualitative';
import About from './pages/About';
import Contact from './pages/Contact';
import Proposal from './pages/Proposal';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/situation" element={<Situation />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/roi" element={<ROICalculator />} />
        <Route path="/qualitatif" element={<Qualitative />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proposition" element={<Proposal />} />
      </Routes>
    </Router>
  );
}
