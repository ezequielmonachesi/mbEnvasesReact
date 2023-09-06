import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";

function Menu() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-bottom border-success border-opacity-75 shadow-sm"
    >
      <Container className="d-flex">
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" height="55px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav className="text-center ms-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Productos</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <Nav.Link href="#">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#">Iniciar Sesión</Nav.Link>
            <Form className="d-flex ms-2">
              <Form.Control
                type="search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
