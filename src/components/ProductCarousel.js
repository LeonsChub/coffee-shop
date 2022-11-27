import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import productImage1 from '../images/product-carousel-1.jpg';
import productImage2 from '../images/product-carousel-2.jpg';
import productImage3 from '../images/product-carousel-3.jpg';

function productCarousel() {
  return (
    <Carousel fade indicators={false} id="product-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={productImage1} alt="Product number 1" />
        <Carousel.Caption>
          <h3>Quality First</h3>
          <p>The finest beans sourced ethically from local breweries. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={productImage2} alt="Product number 2" />

        <Carousel.Caption>
          <h3>Exquisite service</h3>
          <p>Enjoy our short delivery times and wide range of beans.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={productImage3} alt="Product number 3" />

        <Carousel.Caption className="text-dark">
          <h3>Tailored for coffee aficionados</h3>
          <p>Made by coffee-heads for coffee-heads</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default productCarousel;
