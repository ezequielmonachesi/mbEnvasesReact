import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const Administrador = () => {
  return (
    <>
      <Container className="mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Button className="btn btn-success">Agregar</Button>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>Vaso</td>
            <td>$4000</td>
            <td>imagen.jpg</td>
            <td>Plastico</td>
            <td>
              <Button className="btn btn-danger">Borrar</Button>
            </td>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Administrador;
