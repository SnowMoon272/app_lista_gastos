/* Librarys & Frameworks */
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
/* Componets */
import BarraTotalGastado from "./BarraTotalGastado";
import { Header, Titulo } from "../Tools/Header";
/* Elements */
import BtnRegresar from "../Tools/BtnRegresar";
import FormularioGasto from "./FormularioGasto";
/* Assets & CSS */
import useObtenerGasto from "../Hooks/useObtenerGasto";

function EditarGasto() {
  const { id } = useParams();
  const [gasto] = useObtenerGasto(id);

  return (
    <>
      <Helmet>
        <title>Editar Gasto</title>
      </Helmet>
      <Header>
        <BtnRegresar ruta="/lista" />
        <Titulo>Editar Gasto</Titulo>
      </Header>
      <FormularioGasto gasto={gasto} />
      <BarraTotalGastado />
    </>
  );
}

export default EditarGasto;
