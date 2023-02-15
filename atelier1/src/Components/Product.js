import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Product = ({ product }) => {

    const [likes, setLikes] = React.useState(product.likes); 
    const [quantity, setQuantity] = React.useState(product.quantity); 

    const handleLikeClick = () => {
        setLikes(likes + 1);

    };


 

    return ( 
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Row>
          <Col xs={12}>
            <Card.Text>Price: {product.quantity}</Card.Text>
          </Col>
          <Col xs={12}>
            <Card.Text>Quantity:{product.likes}</Card.Text>

          </Col>
          <Col xs={12}>
            <Card.Text>Likes: {likes}</Card.Text>
            
          </Col>
          <Button style={{ width: '4rem' } } onClick={handleLikeClick} >Like</Button> 
          <Button style={{ width: '4rem' }}>Buy</Button> 
        </Row>
      </Card.Body>
    </Card>
        </>
     );
}
 
export default Product;