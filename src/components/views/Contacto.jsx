import React from "react";
import { Breadcrumb, Button, Col, Container, Form, Row } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="mainSection">
      <Breadcrumb className="mt-3">
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Contacto</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="shadow border border-2 rounded-3 bg-white px-2 px-md-5 py-4 my-5 justify-content-evenly">
        <Col sm={5}>
          <div className="d-flex flex-column h-100 justify-content-between justify-content-md-start justify-content-lg-between align-items-center">
            <h3>Contactanos</h3>
            <img
              src="asd"
              alt="contact"
              className="w-100 mt-4 mt-md-4 mt-lg-0"
            />
            <ul className="list-unstyled mt-4 mt-md-4 mt-lg-0">
              <li className="fw-semibold">glamp@glamp.com</li>
            </ul>
          </div>
        </Col>
        <hr className="d-md-none mt-3 mb-4" />
        <Col sm={5}>
          <h3 className="text-center text-md-start">Formulario de contacto</h3>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Nombre <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Teléfono de contacto</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Email address <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Dejanos tu consulta <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <div>
              <Button variant="danger" className="btn-widthPage" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
