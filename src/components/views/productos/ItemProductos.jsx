import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProductos = ({ producto }) => {
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
          <Button className="btn btn-danger mt-2 mt-md-0">Borrar</Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProductos;
