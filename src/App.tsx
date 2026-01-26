import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
