import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavHeader from './Reusables/NavHeader/NavHeader';
import FrontPage from '../components/HomePage/FrontPage';
import ShopPage from './ShopPage/ShopPage';
import ProductPage from './productPage/ProductPage';

import { useState, useEffect } from 'react';

function RouteSwitch() {
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(0);
  function incrementCount() {
    setCounter((prev) => prev++);
  }

  function decrementCount() {
    setCounter((prev) => prev--);
  }

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<FrontPage />} />
        <Route path="/Contact" />
        <Route path="/Shop" element={<ShopPage />} />
        <Route
          path="/products/:name"
          element={<ProductPage handle-func={{ incrementCount, decrementCount }} />}
        />
      </Routes>
      <div className="footer p-2 text-light">Leon Pavlenko 2022</div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
