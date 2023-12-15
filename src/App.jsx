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
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Menu></Menu>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          {/* <Inicio></Inicio> */}
          <Route
            exact
            path="/crear-producto"
            element={<CrearProductos></CrearProductos>}
          ></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>

          {/* <CrearProductos></CrearProductos> */}
          {/* <EditarProductos></EditarProductos> */}
          {/* <Contacto></Contacto> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
