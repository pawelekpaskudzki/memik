import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AddMeme from './js/AddMeme';
import MemePage from './js/MemePage';
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
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'current' : 'unselected')}>Strona Główna</NavLink></li>
              <li><NavLink to="/all" className={({ isActive }) => (isActive ? 'current' : 'unselected')}>Wszystkie Memy</NavLink></li>
              <li><NavLink to="/best" className={({ isActive }) => (isActive ? 'current' : 'unselected')}>Najlepsze Memy</NavLink></li>
              <li><NavLink to="/add" className={({ isActive }) => (isActive ? 'current' : 'unselected')}>Dodaj</NavLink></li>
            </ul>
          </nav>

          {/* Prawy panel z treścią */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Default />} />
              <Route path="/all" element={<MemePage pageType = 'all'/>} />
              <Route path="/best" element={<MemePage  pageType = 'hot'/>} />
              <Route path="/add" element={<AddMeme />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;