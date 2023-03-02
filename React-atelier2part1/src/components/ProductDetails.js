import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import products from '../products.json';

const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  console.log(location);
  console.log(id);
  const product = products.find((p) => p.name === id);


  

  return (
    <Container >
      <div>  
        <img src={require('../assets/images/' + product.img)} />
      </div>
      <div>
      <h2>Details</h2>
      <p>{ id }</p>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
     </div>
    </Container>

  );
};

export default ProductDetails;