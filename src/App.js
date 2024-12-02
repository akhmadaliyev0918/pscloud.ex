import { Routes, Route } from 'react-router-dom'; // Routes va Route import
import Navbar from './components/navbar/Navbar';
import MainNav from './components/mainNavbar/MainNav';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Domains from './components/domain/Domains';
import React, { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('ru');
  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <MainNav language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
        <Route path="/domains" element={<Domains language={language} setLanguage={setLanguage} />} />
      </Routes>
      <Footer language={language}/>
    </div>
  );
}

export default App;
