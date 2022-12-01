import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavHeader from './Reusables/NavHeader/NavHeader';
import FrontPage from '../components/HomePage/FrontPage';
import ShopPage from './ShopPage/ShopPage';
import ProductPage from './productPage/ProductPage';

import { useReducer } from 'react';
import CartPage from './CartPage/CartPage';

export const ACTIONS = {
  addItemsToCart: 'ADDITEMS',
  clearAllItems: 'CLEAR'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.addItemsToCart:
      return [...state, action.payload];
    case ACTIONS.clearAllItems:
      return [];

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
        <Route path="/Shop" element={<ShopPage handleState={dispatch} cartData={state} />} />
        <Route path="/Products/:name" element={<ProductPage handleState={dispatch} />} />
        <Route
          path="/shopping-cart"
          element={<CartPage handleState={dispatch} cartData={state} />}
        />
      </Routes>
      <div className="footer p-2 text-light">Leon Pavlenko 2022</div>
    </BrowserRouter>
  );
}

export default RouteSwitch;
