import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Navbar />
        <Route path="/" element={<Book />} />
        <Route path="/Category" element={<Categories />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>   
  );
}

export default App;
