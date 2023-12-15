import React from "react";
import { Button } from "react-bootstrap";

const ItemProductos = ({ producto }) => {
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.nombreProducto}</td>
        <td>{producto.categoria}</td>
        <td>{producto.color}</td>
        <td>
          <Button className="btn btn-danger me-md-2">Borrar</Button>
          <Button className="btn btn-success mt-2 mt-md-0">Editar</Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProductos;
