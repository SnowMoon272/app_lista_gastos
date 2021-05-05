/* eslint-disable react/no-array-index-key */
/* Librarys & Frameworks */
import React from "react";
import { Helmet } from "react-helmet";
/* Componets */
import { Header, Titulo } from "../Tools/Header";
import BarraTotalGastado from "./BarraTotalGastado";
/* Elements */
import BtnRegresar from "../Tools/BtnRegresar";
import useObtenerGastosDelMesPorCategoria from "../Hooks/useObtenerGastosDelMesPorCategoria";
import {
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Valor,
} from "../Tools/ElementosDeLista";
import IconoCategoria from "../Tools/IconoCategoria";
import convertirAMoneda from "../Funciones/convertirAMoneda";

function GastosPorCategoria() {
  const gastosPorCategoria = useObtenerGastosDelMesPorCategoria();

  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Gastos por Categoria</Titulo>
      </Header>

      <ListaDeCategorias>
        {gastosPorCategoria.map((elemento, index) => {
          return (
            <ElementoListaCategorias key={index}>
              <Categoria>
                <IconoCategoria id={elemento.Categoria} />
                {elemento.Categoria}
              </Categoria>
              <Valor>{convertirAMoneda(elemento.Cantidad)}</Valor>
            </ElementoListaCategorias>
          );
        })}
      </ListaDeCategorias>

      <BarraTotalGastado />
    </>
  );
}

export default GastosPorCategoria;
