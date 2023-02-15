import Product from "./Product";
import product1Image from '../assets/images/product1.webp'; // import the image file
import {Alert } from 'react-bootstrap';
import React from 'react';



const Products = () => {
    const [showWelcome, setShowWelcome] = React.useState(true); 

    React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowWelcome(false), 3000); 
    return () => clearTimeout(timeoutId); 
  }, []);
    const product1 = {
        image: {product1Image},
        name: 'PC Lenovo',
        description: 'Product Description',
        price: '1400DT',
        quantity:'10',
        likes: 0
      };
      const product2 = {
        name: 'Mouse',
        description: 'Product Description',
        price: '30DT',
        quantity:'0',
        likes: 10
      };
      const product3 = {
        name: 'KeyBoard',
        description: 'Product Description',
        price: '70DT',
        quantity:'18',
        likes: 0
      };
    return ( 
        <>
            {showWelcome && (
        <Alert variant="info" onClose={() => setShowWelcome(false)} dismissible>
          <Alert.Heading>Welcome to our store!</Alert.Heading>
          <p>
            We have a wide selection of products at great prices. Take a look around and let us know if you have any questions.
          </p>
        </Alert>
      )}

            <Product product={product1}/>
            <Product product={product2}/>
            <Product product={product3}/>
        </>
     );
}
 
export default Products;