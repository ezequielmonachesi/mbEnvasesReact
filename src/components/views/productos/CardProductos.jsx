import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import bolsaKraft from "../../../assets/bolsas-kraft.jpg";

const CardProductos = () => {
  return (
    <Col md={3} className="p-5">
      <Card className="position-relative border rounded-3 imgZoom m-2">
        <Image src={bolsaKraft} alt="caja-pizza" className="w-100 rounded-2" />
        <article className="position-absolute top-50 start-50 translate-middle">
          <div className="mb-5 text-center">
            <h4 className="fw-bold cursor-default nombre">Papel Madera</h4>
            <button
              type="button"
              className="btn btn-success mb-4"
              data-bs-toggle="modal"
              data-bs-target="#whatsapp"
            >
              Consultar
            </button>
          </div>
        </article>
        <ul className="list-unstyled text-start bg-black text-white bg-opacity-50 borde-inf-ul  position-absolute bottom-0 start-0 m-0 p-1 cursor-default">
          <li className="letrasUl">Marcas: Todas</li>
          <li className="letrasUl">Medidas: y más</li>
          <li className="letrasUl">Color: rojo</li>
          <li className="letrasUl">Precio: Consultar</li>
        </ul>
      </Card>
    </Col>
  );
};

export default CardProductos;
