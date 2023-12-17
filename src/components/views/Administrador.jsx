import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Table } from "react-bootstrap";
import CrearProductos from "./productos/CrearProductos";
import EditarProductos from "./productos/EditarProductos";
import { getProductos } from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemProductos from "./productos/ItemProductos";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
        console.log(respuesta);
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
    <>
      <Container className="mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-success" to={'/administrador/crear-producto'}>Agregar</Link>
        </div>
        <div className="d-md-flex justify-content-end mt-3 mt-md-3">
          <Form className="d-flex ms-2">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              placeholder="Buscar producto"
            />
          </Form>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Color</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ItemProductos
                producto={producto}
                key={producto.id}
              ></ItemProductos>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Administrador;
