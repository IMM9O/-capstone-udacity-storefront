import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {
  PrivateOutlet,
  ProtectedOutlet,
} from './components/PrivateRoute';
import { AuthContext } from './context/AuthContext';
import { useProvideAuth } from './hooks/useProvideAuth';

function App() {
  const user = useProvideAuth();
  return (
    <AuthContext.Provider value={user}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<ProtectedOutlet />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/signup" element={<ProtectedOutlet />}>
            <Route path="/signup" element={<Login />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<PrivateOutlet />}>
            <Route path="" element={<Orders />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
