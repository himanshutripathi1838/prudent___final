import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SolutionPortfolio from './pages/SolutionPortfolio';
import TechnicalExpertise from './pages/TechnicalExpertise';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="solution-portfolio" element={<SolutionPortfolio />} />
        <Route path="technical-expertise" element={<TechnicalExpertise />} />
        <Route path="career" element={<Career />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
