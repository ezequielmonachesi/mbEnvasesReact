import { useEffect, useState } from "react";

const URL_usuarios = import.meta.env.VITE_API_USUARIOS;
const URL_productos = import.meta.env.VITE_API_PRODUCTOS;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuarios);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      }else{
        console.log("Passowrd Incorrecto")
        return null
      }
    } else {
      console.log("El mail no existe");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductos = async () => {
  try {
    const respuesta = await fetch(URL_productos);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUnProducto = async (id) => {
  try {
    const respuesta = await fetch(URL_productos + "/" + id);
    const producto = respuesta.json();
    return producto;
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (producto) => {
  try {
    const respuesta = await fetch(URL_productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {}
};

export const editarProducto = async (id, producto) => {
  try {
    const respuesta = await fetch(URL_productos + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
