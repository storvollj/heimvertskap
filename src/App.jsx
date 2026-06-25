import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

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
      const el = e.target.closest('button') || e.target.closest('a');
      if (!el) return;
      
      const text = el.textContent?.toLowerCase() || '';
      const parentText = el.parentElement?.textContent?.toLowerCase() || '';

      if (text.includes('om oss')) navigate('/om-oss');
      else if (text.includes('pakker')) navigate('/pakker');
      else if (text.includes('full drift')) navigate('/full-drift');
      else if (text.includes('diskuter')) navigate('/partner');
      else if (text.includes('les mer')) {
        if (parentText.includes('optimalisering')) navigate('/optimalisering');
        else if (parentText.includes('oppstart')) navigate('/oppstart');
        else if (parentText.includes('partner') || parentText.includes('multi')) navigate('/partner');
        else navigate('/full-drift');
      }
      else if (text.includes('book') || text.includes('møt') || text.includes('kom i gang') || text.includes('kontakt')) {
        navigate('/full-drift');
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
