import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <Container className="main text-uppercase py-5 text-light">
          <Row>
            <Col>Contactanos</Col>
            <Col>Horarios de atencion</Col>
            <Col>Ayuda</Col>
            <Col>Seguinos</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
