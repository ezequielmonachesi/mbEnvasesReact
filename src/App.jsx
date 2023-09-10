import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Contacto from "./components/views/Contacto";

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador> */}
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  );
}

export default App;
