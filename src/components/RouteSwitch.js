import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
// import FrontPage from './FrontPage';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;