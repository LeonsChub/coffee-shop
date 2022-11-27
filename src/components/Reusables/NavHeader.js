import React from 'react';
import { Link } from 'react-router-dom';

function NavHeader() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-2 d-flex justify-content-around">
      <Link className="navbar-brand" to="/Home">
        myStore
      </Link>
      <div className="navbar-nav">
        <Link className="nav-item nav-link active m-1" to="/Home">
          Home
        </Link>
        <Link className="nav-item nav-link m-1" to="/Shop">
          Shop
        </Link>
        <Link className="nav-item nav-link m-1" to="/contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default NavHeader;
