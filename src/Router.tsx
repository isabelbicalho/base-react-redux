import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/catalog" element={<Catalog/>}/> 
      </Routes>
    </Router>
  )
}
