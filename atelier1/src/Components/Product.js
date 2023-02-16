import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from "react-bootstrap";
import React from "react";

const Product = ({product}) => {


  const [Like,SetLike] = React.useState(product.like);


  const handleLike = () => {
    SetLike(Like+1);
  }


  return ( 
    <div>


            <Card style={{ width: '25rem',minHeight:'630px' }}>
            <Card.Img variant="top" src={require('../assets/images/'+product.image)} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text>
                {product.price} DT
              </Card.Text>
              <Button variant="primary" onClick={handleLike} >Like</Button> <small>Likes: {Like}</small>
              <Button variant="danger" >Buy</Button> <small> Products</small>
            </Card.Body>
            <Alert variant="primary"  >you bought an Item !!!!</Alert>    
          </Card>
         
    </div>
   );
}
 
export default Product;