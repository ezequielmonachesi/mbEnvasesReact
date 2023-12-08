import { Button, Col, Form, Row } from "react-bootstrap";

const CrearProductos = () => {
  return (
    <section className="container mainSection">
      <h4>Crear producto</h4>
      <Form className="mt-4">
        <Row>
          <Col md="6">
            <Form.Group className="mb-3" controlId="nombreProducto">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="idProducto">
              <Form.Label>Id Producto</Form.Label>
              <Form.Control type="text" disabled />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Label>Medidas</Form.Label>
            <Form.Group as={Row} className="mb-3" controlId="alto">
              <Col sm={8}>
                <Form.Control type="number" placeholder="alto" />
              </Col>
              <Col sm={4}>
                <Form.Select aria-label="Default select example">
                  <option value="centimetro">cm</option>
                  <option value="metro">metro</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="ancho">
              <Col sm={8}>
                <Form.Control type="number" placeholder="ancho" />
              </Col>
              <Col sm={4}>
                <Form.Select aria-label="Default select example">
                  <option value="centimetro">cm</option>
                  <option value="metro">metro</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="profundidad">
              <Col sm={8}>
                <Form.Control type="number" placeholder="profundidad" />
              </Col>
              <Col sm={4}>
                <Form.Select aria-label="Default select example">
                  <option value="centimetro">cm</option>
                  <option value="metro">metro</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="marca">
              <Form.Label>Marca</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccionar</option>
                <option value="plastico">Plástico</option>
                <option value="papel">Papel</option>
                <option value="telgopor">Telgopor</option>
                <option value="carton">Cartón</option>
                <option value="vidrio">Vidrio</option>
                <option value="pvc">Pvc</option>
                <option value="vidrio">Vidrio</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccionar</option>
                <option value="blanco">Blanco</option>
                <option value="negro">Negro</option>
                <option value="marron">Marrón</option>
                <option value="transparente">Transparente</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="paquete">
              <Form.Label>Paquete</Form.Label>
              <Form.Control type="text" placeholder="paquete por bulto" />
            </Form.Group>
          </Col>
          <Col sm="12">
            <Form.Group className="mb-3" controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col sm="12">
            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group className="my-3">
              <Button variant="success" type="submit" className="w-100">
                Guardar
              </Button>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="text-end"></Form.Group>
      </Form>
    </section>
  );
};

export default CrearProductos;
