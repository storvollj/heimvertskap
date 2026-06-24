import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import alle sidene
import Homepage from './heim-vertskap-homepage-v3-drifter-fokus';
import FullDrift from './heim-vertskap-full-drift-rewrite';
import OmOss from './heim-vertskap-om-oss';
import Optimalisering from './heim-vertskap-optimalisering';
import Oppstart from './heim-vertskap-oppstart';
import Partner from './heim-vertskap-partner';
import Pakker from './heim-vertskap-pakker';

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
