import { useEffect, useState } from "react";

const URL_productos = import.meta.env.VITE_API_PRODUCTOS;

export const getProductos = async () => {
  try {
    const respuesta = await fetch(URL_productos);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
