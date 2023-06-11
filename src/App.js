import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import CompA from './CompA';
import Error from './Error';
import Navbar from './Navbar';
import User from './User';
import Search from './Search';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<CompA />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </>

  );
}

export default App;
