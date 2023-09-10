import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="mainSection">
      <Breadcrumb className="mt-3">
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Contacto</Breadcrumb.Item>
      </Breadcrumb>
      
    </Container>
  );
};

export default Contacto;
