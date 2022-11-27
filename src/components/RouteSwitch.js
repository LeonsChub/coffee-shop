import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavHeader from '../components/Reusables/NavHeader';
import FrontPage from '../components/HomePage/FrontPage';
import App from '../App';
import ShopPage from './ShopPage/ShopPage';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/contact" />
        <Route path="/Shop" element={<ShopPage />} />
      </Routes>
      <div className="footer p-2 text-light">Leon Pavlenko 2022</div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
