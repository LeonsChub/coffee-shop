import prestoImg from '../images/productImages/coffeeBag1.webp';
import espressoImg1 from '../images/productImages/espresso-1.jpg';
import mediumRoastImg1 from '../images/productImages/medium-roast1.jpg';
import brazilMinasImg1 from '../images/productImages/medium-roast2.jpg';
import instantCoffeeImg1 from '../images/productImages/instant-coffee1.jpg';
import teaImg from '../images/productImages/tea.jpg';

const PRODUCTS = [];

const createProduct = (n, p, type, imgPath) => {
  return { name: n, price: p, coffeeType: type, url: imgPath };
};

PRODUCTS.push(createProduct('Presto Italian coffee', 14.99, 'Dark Roast', prestoImg));
PRODUCTS.push(createProduct('Florentine Classic instant coffee', 9.49, 'Espresso', espressoImg1));
PRODUCTS.push(createProduct('Colombia Narino', 9.99, 'Medium Roast', mediumRoastImg1));
PRODUCTS.push(createProduct('Brazil Minas Gerais', 8.99, 'Medium Roast', brazilMinasImg1));
PRODUCTS.push(createProduct('Waka Colombian coffee', 7.99, 'Instant Coffee', instantCoffeeImg1));
PRODUCTS.push(createProduct('Green Tea', 6.99, 'Green Tea', teaImg));

export default PRODUCTS;
