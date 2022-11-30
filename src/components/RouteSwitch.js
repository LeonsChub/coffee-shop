import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavHeader from './Reusables/NavHeader/NavHeader';
import FrontPage from '../components/HomePage/FrontPage';
import ShopPage from './ShopPage/ShopPage';
import ProductPage from './productPage/ProductPage';

import { useReducer } from 'react';

export const ACTIONS = {
  addItemsToCart: 'ADDITEMS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.addItemsToCart:
      return [...state, { itemName: 'COFFEE', price: 9.49 }];

    default:
      break;
  }
}

function RouteSwitch() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<FrontPage />} />
        <Route path="/Contact" />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/products/:name" element={<ProductPage handleState={dispatch} />} />
      </Routes>
      <div className="footer p-2 text-light">Leon Pavlenko 2022</div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
