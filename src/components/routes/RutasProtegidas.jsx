import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario")) || null;
//usuario está logueado en localstorage/sesionstorage
  if (!usuarioLogueado) {
    return <Navigate to={"/iniciar-sesion"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
