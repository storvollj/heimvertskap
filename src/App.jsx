import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
// Import alle sidene fra /src
import Homepage from './heim-vertskap-homepage-v3-drifter-fokus.jsx';
import FullDrift from './heim-vertskap-full-drift-rewrite.jsx';
import OmOss from './heim-vertskap-om-oss.jsx';
import Optimalisering from './heim-vertskap-optimalisering.jsx';
import Oppstart from './heim-vertskap-oppstart.jsx';
import Partner from './heim-vertskap-partner.jsx';
import Pakker from './heim-vertskap-pakker.jsx';
 
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/full-drift" element={<FullDrift />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/optimalisering" element={<Optimalisering />} />
        <Route path="/oppstart" element={<Oppstart />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/pakker" element={<Pakker />} />
      </Routes>
    </Router>
  );
}
 
