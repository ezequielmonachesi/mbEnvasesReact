import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      {/* Banner Principal */}
      <Container
        fluid
        className="mainSection banner d-flex justify-content-center align-items-center"
      >
        <h1 className="display-1 text-white text-center">
          Bienvenidos a envasesMB
        </h1>
      </Container>
      {/* Seccion Nuestros productos */}
      <Container>
        <div className="shadow text-center py-5 border-3 my-5">
          <h2 class="">Nuestros productos</h2>
          <h5 class="mt-3 text-secondary">
            Papel - Aluminio - Cartón - Plástico - Telgopor
          </h5>
          <p class="my-4 text-secondary">
            Contamos con diversa variedad de productos en Envases MB
          </p>
          <div>
            <Button variant="success" className="mx-2">
              Consultanos
            </Button>
            <Button variant="outline-success" className="mx-2">
              Sobre Nosotros
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inicio;
