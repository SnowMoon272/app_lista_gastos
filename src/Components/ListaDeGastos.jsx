import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../Tools/Header";
import BtnRegresar from "../Tools/BtnRegresar";
// import { useAuth } from "../contextos/AuthContext";

function ListaDeGastos() {
  // const { usuario } = useAuth();
  // console.log(usuario);
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Lista de Gastos</Titulo>
      </Header>
    </>
  );
}

export default ListaDeGastos;
