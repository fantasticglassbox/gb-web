import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Careers from './pages/Careers';
import CareersDetail from './pages/CareersDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App min-w-0 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<CareersDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
