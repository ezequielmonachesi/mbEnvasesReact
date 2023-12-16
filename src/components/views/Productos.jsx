import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getProductos } from "../../helpers/queries";
import CardProductos from "./productos/CardProductos";
import Swal from "sweetalert2";

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
    <Row>
      {productos.map((producto) => (
        <CardProductos producto={producto} key={producto.id}></CardProductos>
      ))}
    </Row>
  );
};

export default Productos;
