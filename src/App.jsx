import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Import alle sidene fra /src
import Homepage from './heim-vertskap-homepage-v3-drifter-fokus.jsx';
import FullDrift from './heim-vertskap-full-drift-rewrite.jsx';
import OmOss from './heim-vertskap-om-oss.jsx';
import Optimalisering from './heim-vertskap-optimalisering.jsx';
import Oppstart from './heim-vertskap-oppstart.jsx';
import Partner from './heim-vertskap-partner.jsx';
import Pakker from './heim-vertskap-pakker.jsx';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      const button = e.target.closest('button');
      if (!button) return;

      const text = button.textContent || '';
      
      // Map button text to routes
      if (text.includes('Book gratis befaring') || text.includes('Møt oss') || text.includes('Book')) {
        navigate('/full-drift');
      } else if (text.includes('Les mer om Full Drift')) {
        navigate('/full-drift');
      } else if (text.includes('Kontakt') || text.includes('Diskuter')) {
        navigate('/om-oss');
      } else if (text.includes('Kom i gang')) {
        navigate('/oppstart');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/full-drift" element={<FullDrift />} />
      <Route path="/om-oss" element={<OmOss />} />
      <Route path="/optimalisering" element={<Optimalisering />} />
      <Route path="/oppstart" element={<Oppstart />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/pakker" element={<Pakker />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
