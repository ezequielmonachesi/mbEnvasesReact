import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-body-tertiary border-top border-success border-opacity-75">
        <Container className="main py-5 text-dark">
          <Row>
            <Col  md={3}>
              <h6 className="text-uppercase">Contactanos</h6>
              <ul className="list-unstyled">
                <li>3876423276 - Metán</li>
                <li>3876488605 - WhatsApp - Metán</li>
              </ul>
              <ul className="list-unstyled">
                <li>3876488605 - Rosario de la frontera</li>
                <li>3876669121 - WhatsApp - Rosario de la Frontera</li>
              </ul>
            </Col>
            <Col  md={3}>
              <h6 className="text-uppercase mt-sm-3 mt-md-0">Horarios de atención</h6>
              <ul className="list-unstyled">
                <li>Lunes a Sabados 8:30 a 13:00hs <br /> y de 17:30 a 21:30hs</li>
              </ul>
            </Col>
            <Col  md={3}>
              <h6 className="text-uppercase mt-sm-3 mt-md-0">Ayuda</h6>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <a href="#" className="text-dark">
                    Locales
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-dark">
                    Contacto
                  </a>
                </li>
              </ul>
            </Col>
            <Col  md={3}>
              <h6 className="text-uppercase mt-sm-3 mt-md-0">Seguinos</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className=" text-dark">
                    Facebook
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
