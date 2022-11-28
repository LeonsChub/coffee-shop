import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Reusables/Sidebar';
import ProductCard from '../Reusables/ProductCard/ProductCard';

import productImg1 from '../../images/coffeeBag1.webp';

function ShopPage() {
  return (
    <div>
      <div className="main-content">
        <Container fluid>
          <Row>
            <Col xs={0} md={2} id="sidebar-wrap" className="p-0">
              <Sidebar />
            </Col>
            <Col xs={12} md={10} id="content-wrap" className="mt-3">
              <Container fluid>
                <Row>
                  <Col xs={6} md={3}>
                    <ProductCard url={productImg1} />
                  </Col>
                  <Col xs={6} md={3}>
                    <ProductCard url={productImg1} />
                  </Col>
                  <Col xs={6} md={3}>
                    <ProductCard url={productImg1} />
                  </Col>
                  <Col xs={6} md={3}>
                    <ProductCard url={productImg1} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ShopPage;
