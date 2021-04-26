import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Boton from "../Tools/Boton";
import { ReactComponent as SvgLogin } from "../Images/login.svg";
import { Header, Titulo, ContenedorHeader } from "../Tools/Header";
import {
  Formulario,
  Input,
  ContenedorBoton,
} from "../Tools/ElementosDeFormularios";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

function InicioSesion() {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesion</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesion</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electronico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Iniciar Sesion
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}

export default InicioSesion;
