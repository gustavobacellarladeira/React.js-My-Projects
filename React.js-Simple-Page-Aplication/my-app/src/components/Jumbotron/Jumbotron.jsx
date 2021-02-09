import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

import './Jumbotron.css'

const Jumbotron = () => {
  return (
   
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome</h1>
          <p>This is a simple react.js page with bootstrap</p>
        </Container>
      </Jumbo>
   
  );
};

export default Jumbotron;