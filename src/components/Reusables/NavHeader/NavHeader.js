import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
    <Navbar expand="md" className="navbar navbar-dark p-3">
      <Container>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Navbar.Brand id="header-brand">CoffeeSpot</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="my-2 my-lg-0" style={{ maxHeight: '250px' }} navbarScroll>
            <Link to="/Home" className={`nav-item nav-link m-1 ${homeActive ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/Shop" className={`nav-item nav-link m-1 ${shopActive ? 'active' : ''}`}>
              Shop
            </Link>
            <Link
              to="/Contact"
              className={`nav-item nav-link m-1 ${contactActive ? 'active' : ''}`}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
