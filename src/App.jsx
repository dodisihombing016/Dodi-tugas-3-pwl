import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/tentang" element={<About/>}/>
          <Route path="/kontak" element={<ContactForm/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
