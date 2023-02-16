
import { Component } from "react";
import Product from "./Product";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from "react-bootstrap";
import ProductsList from '../products.json';


const Products = () => {
    return ( 
        <div>
        <Alert variant="dark" ><Alert.Heading>Hey, Welcome To Our Shop <strong>MyStore</strong></Alert.Heading>
        <p>Thank you for choosing our store, we hope you enjoy your shopping experience!</p></Alert>
        <h1>Products</h1>
        <Row>
{ProductsList.map((prod,i)=>(<Col key={i}><Product  product={prod}></Product></Col>))}
</Row>
    </div>

     );
}
 
export default Products;

