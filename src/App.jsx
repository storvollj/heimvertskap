import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Homepage from './heim-vertskap-homepage-rewrite-v2.jsx';
import FullDrift from './heim-vertskap-full-drift-v3.jsx';
import OmOss from './heim-vertskap-om-oss-v2.jsx';
import Optimalisering from './heim-vertskap-optimalisering-v2.jsx';
import Oppstart from './heim-vertskap-oppstart-v2.jsx';
import Partner from './heim-vertskap-partner-v2.jsx';
import Pakker from './heim-vertskap-pakker-sammenligning-v2.jsx';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const el = e.target.closest('button') || e.target.closest('a');
      if (!el) return;
      
      const text = el.textContent?.toLowerCase().trim() || '';
      const parent = el.parentElement?.textContent?.toLowerCase() || '';
      const grandparent = el.parentElement?.parentElement?.textContent?.toLowerCase() || '';

      // Exact matches first (header nav)
      if (text === '‚Üê hjem') {
        e.preventDefault();
        navigate('/');
      }
      else if (text === 'full drift') {
        e.preventDefault();
        navigate('/full-drift');
      }
      else if (text === 'optimalisering') {
        e.preventDefault();
        navigate('/optimalisering');
      }
      else if (text === 'oppstart') {
        e.preventDefault();
        navigate('/oppstart');
      }
      else if (text === 'pakker') {
        e.preventDefault();
        navigate('/pakker');
      }
      else if (text === 'om oss') {
        e.preventDefault();
        navigate('/om-oss');
      }
      
      // CTA & button matches
      else if (text.includes('kom i gang')) {
        e.preventDefault();
        navigate('/oppstart');
      }
      else if (text.includes('diskuter') || (text.includes('kontakt') && text.includes('info'))) {
        e.preventDefault();
        navigate('/partner');
      }
      else if (text.includes('book') || text.includes('befaring')) {
        e.preventDefault();
        if (parent.includes('partner') || grandparent.includes('partner')) navigate('/partner');
        else navigate('/full-drift');
      }
      else if (text.includes('m√∏t')) {
        e.preventDefault();
        navigate('/full-drift');
      }
      else if (text.includes('les mer')) {
        e.preventDefault();
        if (parent.includes('optimalisering') || grandparent.includes('optimalisering')) navigate('/optimalisering');
        else if (parent.includes('oppstart') || grandparent.includes('oppstart')) navigate('/oppstart');
        else if (parent.includes('partner') || parent.includes('portef√∏lje') || grandparent.includes('partner')) navigate('/partner');
        else navigate('/full-drift');
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

