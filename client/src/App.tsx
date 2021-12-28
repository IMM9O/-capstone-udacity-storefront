import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
