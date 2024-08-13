import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property';
import About from './pages/About';
import Error from './pages/Error';
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
        <Route path="/about"  element={<About />} />
        <Route path="*"  element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

