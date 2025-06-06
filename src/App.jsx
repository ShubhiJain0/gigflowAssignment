import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'
import './index.css';
import Navbar from './pages/Navbar';
import Layout from './pages/Layout';
import { Link } from 'react-router-dom';
function App() {
  
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/pages" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
