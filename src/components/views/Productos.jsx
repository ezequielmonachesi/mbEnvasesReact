import React, { useEffect, useState } from "react";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import { getProductos } from "../../helpers/queries";
import CardProductos from "./productos/CardProductos";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Intente realizar esta operacion en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <Container className="mainSection py-4">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="color-link-breadcrumb">
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Productos</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="gy-3">
        {productos.map((producto) => (
          <CardProductos producto={producto} key={producto.id}></CardProductos>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
