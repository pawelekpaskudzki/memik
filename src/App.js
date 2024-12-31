import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddMeme from './js/AddMeme';
import AllMemes from './js/AllMemes';
import BestMemes from './js/BestMemes';
import Default from './js/Default';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">

        {/* Baner */}
        <header className="banner">
          <h1 id="banner-text">MEMIK</h1>
        </header>


        <div className="content-container">
          <nav className="side-nav">
            <ul>
              <li><Link to="/">Strona Główna</Link></li>
              <li><Link to="/all">Wszystkie Memy</Link></li>
              <li><Link to="/best">Najlepsze Memy</Link></li>
              <li><Link to="/add">Dodaj</Link></li>
            </ul>
          </nav>

          {/* Prawy panel z treścią */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Default />} />
              <Route path="/all" element={<AllMemes />} />
              <Route path="/best" element={<BestMemes />} />
              <Route path="/add" element={<AddMeme />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;