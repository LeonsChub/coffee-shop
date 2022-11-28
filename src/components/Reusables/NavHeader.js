import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavHeader() {
  const location = useLocation();
  let [homeActive, setHomeActive] = useState(false);
  let [shopActive, setShopActive] = useState(false);
  let [contactActive, setContactActive] = useState(false);

  function resetAll() {
    setHomeActive(false);
    setShopActive(false);
    setContactActive(false);
  }

  useEffect(() => {
    resetAll();
    switch (location.pathname) {
      case '/Home':
        setHomeActive(true);
        break;
      case '/Shop':
        setShopActive(true);
        break;
      case '/Contact':
        setContactActive(true);
        break;

      default:
        break;
    }
  });

  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-2 d-flex justify-content-around">
      <Link className="navbar-brand" to="/Home">
        myStore
      </Link>
      <div className="navbar-nav">
        <Link
          className={`nav-item nav-link m-1 ${homeActive ? 'active' : ''}`}
          id="home-link"
          to="/Home">
          Home
        </Link>
        <Link
          className={`nav-item nav-link m-1 ${shopActive ? 'active' : ''}`}
          id="shop-link"
          to="/Shop">
          Shop
        </Link>
        <Link
          className={`nav-item nav-link m-1 ${contactActive ? 'active' : ''}`}
          id="contact-link"
          to="/Contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default NavHeader;
