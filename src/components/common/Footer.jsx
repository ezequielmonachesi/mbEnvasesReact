import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-body-tertiary border-top border-success border-opacity-75">
        <Container className="main py-5 text-dark">
          <Row>
            <Col>
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
            <Col>
              <h6 className="text-uppercase">Horarios de atención</h6>
              <ul className="list-unstyled">
                <li>Lunes a Sabados 8:30 a 13:00hs y de 17:30 a 21:30hs</li>
              </ul>
            </Col>
            <Col>
              <h6 className="text-uppercase">Ayuda</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className=" text-light">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-light">
                    Locales
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6 className="text-uppercase">Seguinos</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className=" text-light">
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
