import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Contacto from "./components/views/Contacto";
import CardProductos from "./components/views/productos/CardProductos";
import "./components/views/productos/cardProductos.css";
import CrearProductos from "./components/views/productos/CrearProductos";
import EditarProductos from "./components/views/productos/EditarProductos";

function App() {
  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      {/* <Administrador></Administrador> */}
      {/* <CrearProductos></CrearProductos> */}
      <EditarProductos></EditarProductos>
      {/* <Contacto></Contacto> */}
      <Footer></Footer>
    </>
  );
}

export default App;
