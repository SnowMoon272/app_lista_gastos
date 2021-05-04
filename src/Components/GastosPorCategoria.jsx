/* Librarys & Frameworks */
import React from "react";
import { Helmet } from "react-helmet";
/* Componets */
import { Header, Titulo } from "../Tools/Header";
import BarraTotalGastado from "./BarraTotalGastado";
/* Elements */
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
      <BarraTotalGastado />
    </>
  );
}

export default GastosPorCategoria;
