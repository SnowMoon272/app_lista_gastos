/* Librarys & Frameworks */
import React from "react";
import { Helmet } from "react-helmet";
import Boton from "./Tools/Boton";
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from "./Tools/Header";

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
            <Boton>X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}

export default App;
