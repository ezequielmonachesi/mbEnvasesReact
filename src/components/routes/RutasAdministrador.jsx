import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProductos from "../views/productos/CrearProductos";
import EditarProductos from "../views/productos/EditarProductos";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear-producto"
          element={<CrearProductos></CrearProductos>}
        ></Route>
        <Route
          exact
          path="/editar-producto/:id"
          element={<EditarProductos></EditarProductos>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
