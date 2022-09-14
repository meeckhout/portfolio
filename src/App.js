import React from 'react';
import './App.css';
import {Layout, Home, About, Portfolio, Contact, NoPage} from '../src/pages'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
