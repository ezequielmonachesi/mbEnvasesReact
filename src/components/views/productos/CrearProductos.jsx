import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProducto } from "../../../helpers/queries";
import Swal from "sweetalert2";

const CrearProductos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (nuevoProducto) => {
    console.log(nuevoProducto);
    crearProducto(nuevoProducto).then((respuesta) => {
      console.log(respuesta);
      console.log(respuesta.status);
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          `El producto ${nuevoProducto.nombreProducto} fue creado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto ${nuevoProducto.nombreProducto} no pudo ser creado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h4>Crear producto</h4>
      <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md="6">
            <Form.Group className="mb-3" controlId="nombreProducto">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control
                type="text"
                {...register("nombreProducto", {
                  required: "El nombre del producto es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad mínima de caracteres son 2",
                  },
                  maxLength: {
                    value: 100,
                    message: "La cantidad máxima de caracteres es 100",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreProducto?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="idProducto">
              <Form.Label>Id Producto</Form.Label>
              <Form.Control type="text" disabled />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" disabled />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Label>Medidas </Form.Label>
            <Form.Group className="mb-3" controlId="medidas">
              <Form.Control
                type="text"
                placeholder="10, 10x20, 10x20x30, 1/4"
                {...register("medidas", {
                  required: "La medida es obligatoria",
                  minLength: {
                    value: 1,
                    message: "Debe ingresar más de 1 caracter",
                  },
                  maxLength: {
                    value: 10,
                    message: "Debe ingresar menos de 10 caracteres",
                  },
                })}
              />
              <div>
                <Form.Text>
                  <span className="small">
                    Si deseas agregar más medidas tienes que crear un nuevo
                    producto
                  </span>
                </Form.Text>
              </div>
              <Form.Text className="text-danger">
                {errors.medidas?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="marca">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                {...register("marca", {
                  required: "El nombre de la marca es obligatoria",
                  minLength: {
                    value: 2,
                    message: "La cantidad mínima de caracteres son 2",
                  },
                  maxLength: {
                    value: 40,
                    message: "La cantidad máxima de caracteres es de 40",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.marca?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                {...register("tipo", {
                  required: "La categoría es obligatoria",
                })}
              >
                <option value="">Seleccionar</option>
                <option value="plastico">Plástico</option>
                <option value="papel">Papel</option>
                <option value="polietileno">Polietileno</option>
                <option value="telgopor">Telgopor</option>
                <option value="carton">Cartón</option>
                <option value="vidrio">Vidrio</option>
                <option value="pvc">Pvc</option>
                <option value="vidrio">Vidrio</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.tipo?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Select
                {...register("color", {
                  required: "El color es obligatorio",
                })}
              >
                <option value="">Seleccionar</option>
                <option value="blanco">Blanco</option>
                <option value="negro">Negro</option>
                <option value="marron">Marrón</option>
                <option value="transparente">Transparente</option>
                <option value="multicolor">Multicolor</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.color?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="paquetePorBulto">
              <Form.Label>Paquete por bulto</Form.Label>
              <Form.Control
                type="number"
                {...register("paquetePorBulto", {
                  max: {
                    value: 200,
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.paquetePorBulto?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm="12">
            <Form.Group className="mb-3" controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col sm="12">
            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group className="my-3">
              <Button variant="success" type="submit" className="w-100">
                Guardar
              </Button>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="text-end"></Form.Group>
      </Form>
    </section>
  );
};

export default CrearProductos;
