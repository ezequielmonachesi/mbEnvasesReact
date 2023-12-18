import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, getProductos } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemProductos = ({ producto, setProductos }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "Estás seguro de borrar?",
      text: "No se puede volver a recuperar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProducto(producto.id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire({
              title: "Borrado!",
              text: `El producto ${producto.nombreProducto} fue eliminado.`,
              icon: "success",
            });
            getProductos().then((respuesta) => {
              if (respuesta) {
                setProductos(respuesta);
              }
            });
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `El producto ${producto.nombreProducto} no pudo ser eliminado`,
              icon: "error",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.nombreProducto}</td>
        <td>{producto.categoria}</td>
        <td>{producto.color}</td>
        <td>
          <Link
            className="btn btn-success me-md-2"
            to={"/administrador/editar-producto/" + producto.id}
          >
            Editar
          </Link>
          {/* className="btn btn-danger mt-2 mt-md-0" */}
          <Button variant="danger" onClick={eliminarProducto}>
            Borrar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProductos;
