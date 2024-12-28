import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllMemes from './js/AllMemes';
import BestMemes from './js/BestMemes';
import Default from './js/Default';


function App() {
  return (
    <Router>
      <nav>
      <Link to="/">Home</Link> | <Link to="/all">Wszystkie</Link> | <Link to="/best">Najlepsze</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/all" element={<AllMemes />} />
        <Route path="/best" element={<BestMemes />} />
      </Routes>
    </Router>
  );
}

export default App;