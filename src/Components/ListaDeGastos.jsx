/* eslint-disable no-else-return */
/* Librarys & Frameworks */
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import convertirAMoneda from "../Funciones/convertirAMoneda";
/* Componets */
import { Header, Titulo } from "../Tools/Header";
import BarraTotalGastado from "./BarraTotalGastado";
/* Elements */
import BtnRegresar from "../Tools/BtnRegresar";
import Boton from "../Tools/Boton";
/* Assets & CSS */
import IconoCategoria from "../Tools/IconoCategoria";
import useObtenerGastos from "../Hooks/useObtenerGastos";
import borrarGasto from "../firebase/borrarGasto";
import { ReactComponent as IconoEditar } from "../Images/editar.svg";
import { ReactComponent as IconoBorrar } from "../Images/borrar.svg";
import {
  Lista,
  ElementoLista,
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
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();

  const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {
      locale: es,
    });
  };

  const fechaEsIgual = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(gasto.Fecha);
      const fechaGastoAnterior = formatearFecha(gastos[index - 1].Fecha);
      if (fechaActual === fechaGastoAnterior) {
        return true;
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Lista de Gastos</Titulo>
      </Header>

      <Lista>
        {gastos.map((gasto, index) => {
          return (
            <div key={gasto.id}>
              {!fechaEsIgual(gastos, index, gasto) && (
                <Fecha>{formatearFecha(gasto.Fecha)}</Fecha>
              )}
              <ElementoLista key={gasto.id}>
                <Categoria>
                  <IconoCategoria id={gasto.Categoria} />
                  {gasto.Categoria}
                </Categoria>

                <Descripcion>{gasto.Descripcion}</Descripcion>

                <Valor>{convertirAMoneda(gasto.Cantidad)}</Valor>

                <ContenedorBotones>
                  <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                    <IconoEditar />
                  </BotonAccion>

                  <BotonAccion onClick={() => borrarGasto(gasto.id)}>
                    <IconoBorrar />
                  </BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          );
        })}
        {hayMasPorCargar && (
          <ContenedorBotonCentral>
            <BotonCargarMas onClick={() => obtenerMasGastos()}>
              Cargar Más
            </BotonCargarMas>
          </ContenedorBotonCentral>
        )}

        {gastos.length === 0 && (
          <ContenedorSubtitulo>
            <Subtitulo>No hay gastos por mostrar.</Subtitulo>
            <Boton to="/">Agregar Gasto</Boton>
          </ContenedorSubtitulo>
        )}
      </Lista>

      <BarraTotalGastado />
    </>
  );
};

export default ListaDeGastos;
