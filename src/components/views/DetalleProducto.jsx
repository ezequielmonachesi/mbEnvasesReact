import React, { useEffect, useState } from "react";
import {
  Badge,
  Breadcrumb,
  Button,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { obtenerUnProducto } from "../../helpers/queries";
import { goToTheTop } from "../../helpers/functions";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    goToTheTop();
    obtenerUnProducto(id).then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);

  return (
    <Container className="mainSection py-4">
      <Breadcrumb>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/" }}
          className="color-link-breadcrumb"
        >
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: "/productos" }}
          className="color-link-breadcrumb"
        >
          Productos
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{producto.nombreProducto}</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="justify-content-center align-items-start">
        <Col md={5}>
          <Image src={producto.imagen} className="w-100 rounded"></Image>
        </Col>
        <Col md={5} className="">
          <h3 className="">{producto.nombreProducto}</h3>
          <div>
            <Badge bg="danger">Mas vendido</Badge>
          </div>
          <p>{producto.descripcion}</p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td className="fw-semibold">Material:</td>
                <td>{producto.categoria}</td>
              </tr>
              <tr>
                <td className="fw-semibold">Color:</td>
                <td>{producto.color}</td>
              </tr>
              <tr>
                <td className="fw-semibold">Dimensiones:</td>
                <td>{producto.medidas}</td>
              </tr>

              <tr>
                <td className="fw-semibold">Paquete por bulto:</td>
                <td>{producto.paquetePorBulto}</td>
              </tr>
            </tbody>
          </Table>
          <div className="text-end">
            <Button variant="success">Consultar</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
