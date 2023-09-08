import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  BoxSeamFill,
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
      {/* Trayectoria */}
      <Container>
        <Row>
          <Col md={5} lg={3}>
            <div class="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-50 rounded-3 shadow">
              <span class="display-6 lh-1 text-blue mb-0">
                <RocketTakeoff></RocketTakeoff>
              </span>
              <div class="ms-4 h6 fw-normal mb-0">
                <div class="d-flex">
                  <h5 class="mb-0 fw-bold">13</h5>
                  <span class="mb-0 h5">+ años</span>
                </div>
                <p class="mb-0">Trayectoria</p>
              </div>
            </div>
          </Col>
          <Col md={5} lg={3}>
            <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3 shadow">
              <span class="display-6 lh-1 text-blue mb-0">
                <HouseCheckFill></HouseCheckFill>
              </span>
              <div class="ms-4 h6 fw-normal mb-0">
                <div class="d-flex">
                  <h5 class="mb-0 fw-bold">2</h5>
                  <span class="mb-0 h5">(Dos)</span>
                </div>
                <p class="mb-0">Sucursales</p>
              </div>
            </div>
          </Col>
          <Col md={5} lg={3}>
            <div class="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-50 rounded-3 shadow">
              <span class="display-6 lh-1 text-blue mb-0">
                <PeopleFill></PeopleFill>
              </span>
              <div class="ms-4 h6 fw-normal mb-0">
                <div class="d-flex">
                  <h5 class="mb-0 fw-bold">500</h5>
                  <span class="mb-0 h5">+</span>
                </div>
                <p class="mb-0">Clientes</p>
              </div>
            </div>
          </Col>
          <Col md={5} lg={3}>
            <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3 shadow">
              <span class="display-6 lh-1 text-blue mb-0">
                <BoxSeamFill></BoxSeamFill>
              </span>
              <div class="ms-4 h6 fw-normal mb-0">
                <div class="d-flex">
                  <h5 class="mb-0 fw-bold">1000</h5>
                  <span class="mb-0 h5">+</span>
                </div>
                <p class="mb-0">Productos</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Inicio;
