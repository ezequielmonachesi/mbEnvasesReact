import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  BoxSeamFill,
  Check2Circle,
  HouseCheckFill,
  PeopleFill,
  RocketTakeoff,
} from "react-bootstrap-icons";

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
          <h2>Nuestros productos</h2>
          <h5 className="mt-3 text-secondary">
            Papel - Aluminio - Cartón - Plástico - Telgopor
          </h5>
          <p className="my-4 text-secondary">
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
      {/* Trayectoria */}
      <Container>
        <Row>
          <Col md={5} lg={3}>
            <div className="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-50 rounded-3 shadow">
              <span className="display-6 lh-1 text-blue mb-0">
                <RocketTakeoff></RocketTakeoff>
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="mb-0 fw-bold">13</h5>
                  <span className="mb-0 h5">+ años</span>
                </div>
                <p className="mb-0">Trayectoria</p>
              </div>
            </div>
          </Col>
          <Col md={5} lg={3}>
            <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3 shadow">
              <span className="display-6 lh-1 text-blue mb-0">
                <HouseCheckFill></HouseCheckFill>
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="mb-0 fw-bold">2</h5>
                  <span className="mb-0 h5">(Dos)</span>
                </div>
                <p className="mb-0">Sucursales</p>
              </div>
            </div>
          </Col>
          <Col md={5} lg={3}>
            <div className="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-50 rounded-3 shadow">
              <span className="display-6 lh-1 text-blue mb-0">
                <PeopleFill></PeopleFill>
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="mb-0 fw-bold">500</h5>
                  <span className="mb-0 h5">+</span>
                </div>
                <p className="mb-0">Clientes</p>
              </div>
            </div>
          </Col>
          <Col md={5} lg={3}>
            <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3 shadow">
              <span className="display-6 lh-1 text-blue mb-0">
                <BoxSeamFill></BoxSeamFill>
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="mb-0 fw-bold">1000</h5>
                  <span className="mb-0 h5">+</span>
                </div>
                <p className="mb-0">Productos</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bannerDos mt-5 py-5">
        <Row className="mt-5 ">
          <Col>
            <h2>¿Qué hacemos?</h2>
            <h5>
              Proveemos amplia gama de envases y de productos para embalajes.
            </h5>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Potes de telgopor y de plásticos.
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Rollos de papel film: stretch,
                manteca, aluminio.
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Rollos de papel film: stretch,
                manteca, aluminio.
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Rollos de: papel gris, Kraff,
                regalo, servilleta, higiénico.
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Papel térmico, de obra y doble
                químico.
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Toallas plegables
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Servilletas para aparatos,
                confiteria, service express.
              </li>
              <li className="fs-5">
                <Check2Circle className="text-success"></Check2Circle> Servilletas "Elegantes"
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
