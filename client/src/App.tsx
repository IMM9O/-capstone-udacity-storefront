import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Orders from './pages/Orders';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
