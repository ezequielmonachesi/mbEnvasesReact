import React, { useState } from "react";
import { Button, Container, Form, Modal, Row, Table } from "react-bootstrap";
import CrearProductos from "./productos/CrearProductos";

const Administrador = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container className="mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Button
            className="btn btn-success"
            onClick={() => setModalShow(true)}
          >
            Agregar
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vaso</td>
              <td>$4000</td>
              <td>imagen.jpg</td>
              <td>Plastico</td>
              <td>
                <Button className="btn btn-danger me-md-2">Borrar</Button>
                <Button className="btn btn-success mt-2 mt-md-0">Editar</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Papel Film</td>
              <td>$3000</td>
              <td>imagen2.jpg</td>
              <td>Plastico</td>
              <td>
                <Button className="btn btn-danger me-md-2">Borrar</Button>
                <Button className="btn btn-success mt-2 mt-md-0">Editar</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">EnvasesMB</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CrearProductos></CrearProductos>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Administrador;
