import { Container, Row, Col } from 'react-bootstrap';

import Sidebar from '../Reusables/SideBar/Sidebar';
import ProductCard from '../Reusables/ProductCard/ProductCard';

import { BsCart4 } from 'react-icons//bs';

import PRODUCTS from '../data';

import './shop.css';

function dataToDom() {
  const domArr = [];
  PRODUCTS.map((product, index) => {
    domArr.push(
      <Col xs={6} md={4} lg={3} className="my-2" key={index}>
        <ProductCard
          name={product.name}
          price={product.price}
          type={product.coffeeType}
          url={product.url}
        />
      </Col>
    );
  });
  return domArr;
}

function ShopPage() {
  return (
    <div>
      <div className="main-content">
        <Container fluid>
          <Row>
            <Col xs={0} md={3} lg={2} id="sidebar-wrap" className="p-0">
              <Sidebar />
            </Col>
            <Col xs={12} md={9} lg={10} id="content-wrap" className="mt-3">
              <Container fluid>
                <Row>{dataToDom()}</Row>
              </Container>
            </Col>
          </Row>
          <button className="sticky-cart-btn mr-0 ml-auto">
            <BsCart4 />
          </button>
        </Container>
      </div>
    </div>
  );
}

export default ShopPage;
