import ProductCarousel from './ProductCarousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function FrontPage() {
  return (
    <div>
      <div className="main-content">
        <h1 className="main-title p-3 text-white">Home</h1>
        <ProductCarousel></ProductCarousel>
        <Link to = '/Shop'>
          <Button className="my-3 shop-btn" size="lg">
            Shop NOW!
          </Button>
        </Link>
      </div>
      
    </div>
  );
}

export default FrontPage;
