import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property';
import APropos from './pages/APropos';
import Error from './composants/Error';
import Header from './composants/Header';
import Footer from './composants/Footer';
import 'normalize.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/property/:id"  element={<Property />} />
        <Route path="/a-propos"  element={<APropos />} />
        <Route path="*"  element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

