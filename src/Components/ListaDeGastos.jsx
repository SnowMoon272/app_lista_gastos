import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../Tools/Header";
import BtnRegresar from "../Tools/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastos from "../Hooks/useObtenerGastos";
import {
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from "../Tools/ElementosDeLista";

const ListaDeGastos = () => {
  const [gastos] = useObtenerGastos();
  console.log("Loas gastos son:");
  console.log(gastos);

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Lista de Gastos</Titulo>
      </Header>

      {/* <Lista>
        {gastos.map((gasto) => {
          return (
            <ElementoLista key={gasto.id}>{gasto.Descripcion}</ElementoLista>
          );
        })}
      </Lista> */}

      <BarraTotalGastado />
    </>
  );
};

export default ListaDeGastos;
