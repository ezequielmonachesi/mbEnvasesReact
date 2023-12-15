import React from "react";
import { Card, Col, Image } from "react-bootstrap";

const CardProductos = ({ producto }) => {
  return (
    <Col md={4} className="p-4">
      <Card className="position-relative border rounded-3 m-2">
        <Image
          src={producto.imagen}
          alt="caja-pizza"
          className="w-100 rounded-2"
        />
        <article className="position-absolute top-50 start-50 translate-middle">
          <div className="mb-5 text-center">
            <h4 className="fw-bold cursor-default nombre">
              {producto.nombreProducto}
            </h4>
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
          <li className="letrasUl">Marca: {producto.marca}</li>
          <li className="letrasUl">Medidas: {producto.medidas}</li>
          <li className="letrasUl">Color: {producto.color}</li>
        </ul>
      </Card>
    </Col>
  );
};

export default CardProductos;
