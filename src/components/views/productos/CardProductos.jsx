import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProductos = ({ producto }) => {
  return (
    <Col xs={6} md={2}>
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombreProducto}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-center">{producto.nombreProducto}</Card.Title>
          <div className="text-end">
            <Link className="btn btn-success">Ver</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProductos;
