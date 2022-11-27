import React from 'react';

function NavHeader() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-2 d-flex justify-content-around">
      <a className="navbar-brand" href="#">
        myStore
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link active m-1" href="#">
          Home
        </a>
        <a className="nav-item nav-link m-1" href="#">
          Shop
        </a>
        <a className="nav-item nav-link m-1" href="#">
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default NavHeader;
