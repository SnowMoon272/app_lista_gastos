import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../Tools/Header";
import BtnRegresar from "../Tools/BtnRegresar";

function GastosPorCategoria() {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Gastos por Categoria</Titulo>
      </Header>
    </>
  );
}

export default GastosPorCategoria;
