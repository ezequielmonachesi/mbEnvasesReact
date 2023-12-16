import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Menu({ usuarioLogueado, setUsuarioLogueado }) {
  const navegacion = useNavigate();

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-bottom border-success border-opacity-75 shadow-sm"
    >
      <Container className="d-flex">
        <Navbar.Brand as={Link} to={"/"}>
          <img src={logo} alt="logo" height="55px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav className="text-center text-md-start ms-auto my-2 my-lg-0">
            <NavLink end to={"/"} className={"nav-item nav-link"}>
              Inicio
            </NavLink>
            <NavLink end to={"/productos"} className={"nav-item nav-link"}>
              Productos
            </NavLink>
            <NavLink end to={"/contacto"} className={"nav-item nav-link"}>
              Contacto
            </NavLink>
            <NavLink end to={"/sobre-nosotros"} className={"nav-item nav-link"}>
              Sobre Nosotros
            </NavLink>
            {usuarioLogueado.nombreUsuario ? (
              <>
                <NavLink
                  end
                  to={"/administrador"}
                  className={"nav-item nav-link"}
                >
                  Administrador
                </NavLink>
                <Button variant="dark" onClick={logout}>
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <NavLink
                end
                to={"/iniciar-sesion"}
                className={"nav-item nav-link"}
              >
                Iniciar Sesión
              </NavLink>
            )}
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
