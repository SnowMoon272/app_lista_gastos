/* Librarys & Frameworks */
import React from "react";
import { Helmet } from "react-helmet";
/* Componets */
import BarraTotalGastado from "./Components/BarraTotalGastado";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from "./Tools/Header";
/* Elements */
import BotonCerrarSesion from "./Tools/BotonCerrarSesion";
import FormularioGasto from "./Components/FormularioGasto";
/* Assets & CSS */
import Boton from "./Tools/Boton";

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agegar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>

      <FormularioGasto />

      <BarraTotalGastado />
    </>
  );
}

export default App;
