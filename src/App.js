import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import productData from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const firstName = "test";

    return (
      <div className="app-container">
        <h1>Hello, {firstName ? firstName : 'there'}!</h1>
        {firstName && (
          <Card className="product-card">
            <Image image={productData.image} />
            <Card.Body className="product-details">
              <Name name={productData.name} />
              <Price price={productData.price} />
              <Description description={productData.desc} />
            </Card.Body>
          </Card>
        )}
      </div>
    );
  };


export default App;