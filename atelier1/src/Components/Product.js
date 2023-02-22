import { Component, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert, useAccordionButton } from "react-bootstrap";
import React from "react";

const Product = ({product}) => {


  const [Like,SetLike] = React.useState(product.like);
  const[quantity,setQuantity]=React.useState(product.quantity);
  const [isBestProduct, setIsBestProduct] = React.useState(false);

  const bestProductStyle = `
    .bestProduct {
      background-color: #DB7090;
      animation: clignote 2s linear infinite;
    }

    @keyframes clignote {
      50% {
        opacity: 0.5;
      }
    }
  `;


  const handleLike = () => {
    SetLike(Like+1);
    if(Like>=5){
      setIsBestProduct(true);
    }
  }

  const handleQuantity = () => {
    setQuantity(quantity-1);
  }

  const[alertVisible,setAlertVisible]=React.useState(false);


  const handleVisible = () => { 
    setAlertVisible(true)
      setTimeout(() => { 
        setAlertVisible(false)
    }, 2000);
} 

useEffect(()=>{
  handleVisible()
},
[quantity]
)


  return ( 
    <div>


            <Card style={{ width: '25rem',minHeight:'630px' }} >
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
              <Button variant="danger" onClick={handleQuantity}>Buy</Button> <small> {quantity}</small>
            </Card.Body>
               
            {alertVisible?<Alert variant="primary" >you bought an Item !!!!</Alert>:false} 


          </Card>
         
    </div>
   );
}
 
export default Product;



